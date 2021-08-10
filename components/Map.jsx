import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function Map({ searchResult }) {
  const coordinates = searchResult.map((item) => {
    return {
      longitude: item.long,
      latitude: item.lat,
    };
  });

  const center = getCenter(coordinates);

  const [viewport, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mukul-singhal-/cks5yhmgt4p0x18qqfi2obsf1"
      mapboxApiAccessToken="pk.eyJ1IjoibXVrdWwtc2luZ2hhbC0iLCJhIjoiY2tzNXNqem40MHdjcTJ1cGhucG52bDIyMiJ9.9IR9MteGxHs7HsQIhnReZg"
      {...viewport}
      onViewportChange={(nextViewport) => setViewPort(nextViewport)}
    >
      {searchResult.map(({ long, lat }) => {
        <div key={long}>
          <Marker
            longitude={long}
            latitude={lat}
            // offsetLeft={-20}
            // offsetTop={-10}
          >
            <p>📌📌🚀</p>
          </Marker>
        </div>;
      })}
    </ReactMapGL>
  );
}
export default Map;
