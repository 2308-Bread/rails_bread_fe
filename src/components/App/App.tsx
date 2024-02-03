import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';
import CountriesMap from '../Map/Map';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MapContainer center={[51.505, -0.09]} zoom={3} style={{ height: '900px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <CountriesMap />
        </MapContainer>
      </header>
    </div>
  );
}

export default App;



