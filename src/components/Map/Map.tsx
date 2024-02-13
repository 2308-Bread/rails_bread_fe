import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import countriesGeoJson from '../../data/countries.json';
import { useNavigate } from 'react-router-dom';
import './Map.css';
import LoadingComponent from './../Loading/Loading';

interface GeoJSONLayerProps {
  load: (countryName: string) => void;
}

const MapComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [countryName, setCountryName] = useState('');
  const navigate = useNavigate();

  const load = (countryName: string) => {
    
    setCountryName(countryName);
  };

  return (
    <>
      <MapContainer center={[0, 0]} zoom={2} style={{ height: '80vh', width: '100%' }}>
        <TileLayer
          url="https://tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=a7eda3efcc6b40449d697372a8171c3b"
          attribution='&copy; <a href="http://thunderforest.com">Thunderforest</a> contributors'
          noWrap={false}
        />
        <GeoJSONLayer load={load} />
      </MapContainer>
      {isLoading && <LoadingComponent navigate={navigate} route={`/breads/${countryName}`} />}
    </>
  );
};

const GeoJSONLayer: React.FC<GeoJSONLayerProps> = ({ load }) => {
  const map = useMap();

  useEffect(() => {
    const geoJsonLayer = L.geoJSON(countriesGeoJson as any, {
      style: () => ({
        fillColor: "rgba(62, 109, 78, 0.5)",
        color: '#3e6d4e',
        weight: 1,
        dashArray: '3',
        fillOpacity: 0.5
      }),
      onEachFeature: (feature, layer) => {
        layer.on('click', () => {
          const countryName = feature.properties.name;
          load(countryName);
        });
      },
    });

    geoJsonLayer.addTo(map);

    return () => {
      map.removeLayer(geoJsonLayer);
    };
  }, [map, load]);

  return null;
};

export default MapComponent;


