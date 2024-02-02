// src/components/ChoroplethMap.tsx

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ChoroplethMap: React.FC = () => {
  useEffect(() => {
    // Add your Leaflet code here
  }, []);

  return (
    <div className="map-container">
      <MapContainer center={[0, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Add your choropleth layer here */}
      </MapContainer>
    </div>
  );
};

export default ChoroplethMap;
