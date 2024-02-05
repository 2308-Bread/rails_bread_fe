import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import countriesData from './countries.geo.json';

type GeoJSONFeature = {
  type: 'Feature';
  properties: {
    [key: string]: any;
  };
  geometry: {
    type: string;
    coordinates: any;
  };
}

type GeoJSONData = {
  type: 'FeatureCollection';
  features: GeoJSONFeature[];
}

const CountriesMap = () => {
  const [clickedCountry, setClickedCountry] = useState<string | null>(null);

  const handleCountryClick = (event: any, feature: GeoJSONFeature) => {
    const countryName = feature.properties.name;
    setClickedCountry(countryName);
    alert(`Clicked on ${countryName}`);
  };

  const onEachCountryFeature = (feature: GeoJSONFeature, layer: any) => {
    layer.on({
      click: (event: any) => handleCountryClick(event, feature),
    });
  };

  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: '1100px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <GeoJSON
        data={countriesData as GeoJSONData}
        style={() => ({
          fillColor: 'transparent',
          color: 'blue',
          weight: 1,
          fillOpacity: 0.6,
        })}
        onEachFeature={onEachCountryFeature as any} // Specify type as any
      />
    </MapContainer>
  );
};

export default CountriesMap;




