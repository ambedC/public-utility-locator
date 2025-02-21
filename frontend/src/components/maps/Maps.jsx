import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import { Marker } from '@react-google-maps/api'
const containerStyle = {
  width: '90%',
  height: '800px',
}

const center = {
  lat: 10.269549499969044,
  lng: 76.40029145981869,
}

export default function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCTtIPE37GzL7AHPhGKzcnQB2iIn0hpWWE',
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div className="maps-container">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={1}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
        <Marker
            position={center}
        />
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
    </div>
    ) : 
    (
        <></>
    )
}

