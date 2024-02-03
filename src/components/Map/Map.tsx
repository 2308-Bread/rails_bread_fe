import React from 'react';
import { MapContainer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import countriesData from './countries.geo.json';

interface GeoJSONFeature {
  type: 'Feature';
  properties: {
    [key: string]: any;
  };
  geometry: {
    type: string;
    coordinates: any;
  };
}

interface GeoJSONData {
  type: 'FeatureCollection';
  features: GeoJSONFeature[];
}

const CountriesMap = () => {
  const handleCountryClick = (event: any, feature: GeoJSONFeature) => {
    alert(`Clicked on ${feature.properties.name}`);
  };

  const onEachCountryFeature = (feature: GeoJSONFeature, layer: any) => {
    layer.on({
      click: (event: any) => handleCountryClick(event, feature),
    });
  };

  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      style={{ height: '500px', width: '100%' }}
    >
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


