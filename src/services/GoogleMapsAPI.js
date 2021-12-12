import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import '../styles/google-maps-api.css';

const API_KEY = 'AIzaSyBJ2k2ZRvU-b6xLzWTVh4GG-dvlfIysSZA';

function getGoogleMapsAPI() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
  });

  const position = {
    lat: -3.775068,
    lng: -38.560858,
  };

  return (
    <div className="map">
      {isLoaded ? (
      <GoogleMap
        mapContainerStyle={{width: '100%', height: '100%'}}
        center={position}
        zoom={15}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
        <Marker
          position={position}
          options={{
            label: {
              text: 'Posição',
              className: 'map-marker',
            }
          }}
        />
      </GoogleMap>
  ) : <></>}
    </div>
  );
}

export default getGoogleMapsAPI;
