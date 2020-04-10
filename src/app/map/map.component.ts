import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, marker, icon, polyline, Map, point, map } from 'leaflet';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private coordonnees : string = '';
  constructor() { }
  ngOnInit() {
  }

  maps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  central = marker([ 46.8523, -121.7603 ], {
    icon: icon({
      iconSize: [ 41, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'leaflet/central.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  }).bindPopup('Central').openPopup();;

  signalement = marker([ 46.78465227596462,-121.74141269177198 ], {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  }).bindPopup('Signalement').openPopup();

  iconSignal = icon({
    iconUrl : 'leaflet/marker-icon.png',
    iconSize: [25, 25],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28]
  });

  route = polyline([[ 46.78465227596462,-121.74141269177198 ],
    [ 46.80047278292477, -121.73470708541572 ],
    [ 46.815471360459924, -121.72521826811135 ],
    [ 46.8360239546746, -121.7323131300509 ],
    [ 46.844306448474526, -121.73327445052564 ],
    [ 46.84979408048093, -121.74325201660395 ],
    [ 46.853193528950214, -121.74823296256363 ],
    [ 46.85322881676257, -121.74843915738165 ],
    [ 46.85119913890958, -121.7519719619304 ],
    [ 46.85103829018772, -121.7542376741767 ],
    [ 46.85101557523012, -121.75431755371392 ],
    [ 46.85140013694763, -121.75727385096252 ],
    [ 46.8525277543813, -121.75995212048292 ],
    [ 46.85290292836726, -121.76049157977104 ],
    [ 46.8528160918504, -121.76042997278273 ]]);


  options = {
    layers: [ this.maps, this.route, this.central, this.signalement ],
    zoom: 7,
    center: latLng([ 46.879966, -121.726909 ])
  };

  onMapReady(map: Map) {  
    map.fitBounds(this.route.getBounds(), {
      padding: point(24, 24),
      maxZoom: 12,
      animate: true
    });
  }

  addMarker(co) {
    marker([co.latlng.lat, co.latlng.lng], {
      icon: icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 41 ],
        iconUrl: 'leaflet/marker-icon.png',
        shadowUrl: 'leaflet/marker-shadow.png'
      })
    }).bindPopup('Signalement').openPopup();
  }

  showCoordinates(map) {
    console.warn(map.latlng.lat+' '+map.latlng.lng);
    this.coordonnees = '[ '+map.latlng.lat+', '+map.latlng.lng+' ]';
  }

  

}
