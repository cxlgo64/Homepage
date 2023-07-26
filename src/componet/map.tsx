import { useLoadScript, GoogleMap, MarkerF, CircleF} from '@react-google-maps/api';
import type { NextPage } from 'next';
import { useMemo } from 'react';
import styles from './Home.module.css';

const Map: NextPage = () => {
  const libraries = useMemo(() => ['places'], []);
  const mapCenter = useMemo(
    () => ({ lat: 38.89487147573472, lng: -77.28032671963548 }),
    []
  );

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey:"AIzaSyBXxXg4Lcn5OYt7F0p7943Mvy6wJT8aDIE",
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.homeWrapper}>
      <GoogleMap
        options={mapOptions}
        zoom={16}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: '400px', height: '400px' }}
        onLoad={() => console.log('Map Component Loaded...')}
        
      ><MarkerF position={mapCenter} onLoad={() => console.log('Marker Loaded')} />
      {[200, 300].map((radius, idx) => {
    return (
      <CircleF
        key={idx}
        center={mapCenter}
        radius={radius}
        onLoad={() => console.log('Circle Load...')}
        options={{
          fillColor: radius > 1000 ? 'red' : 'green',
          strokeColor: radius > 1000 ? 'red' : 'green',
          strokeOpacity: 0.8,
        }}
      />
    );
  })}
</GoogleMap>
      
    </div>
  );
};
export default Map;