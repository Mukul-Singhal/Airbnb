import * as React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

import MapBoxCard from "./MapBoxCard";

function Map({ searchResult }) {
  const [selectedLocation, setSelectedLocation] = React.useState({});

  const coordinates = searchResult.map((item) => {
    return {
      longitude: item.long,
      latitude: item.lat,
    };
  });

  const center = getCenter(coordinates);

  const [viewport, setViewPort] = React.useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 14,
  });

  console.log(selectedLocation);

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mukul-singhal-/cks5yhmgt4p0x18qqfi2obsf1"
      mapboxApiAccessToken="pk.eyJ1IjoibXVrdWwtc2luZ2hhbC0iLCJhIjoiY2tzNXNqem40MHdjcTJ1cGhucG52bDIyMiJ9.9IR9MteGxHs7HsQIhnReZg"
      {...viewport}
      onViewportChange={(nextViewport) => setViewPort(nextViewport)}
    >
      {searchResult.map((result) => (
        <div key={result.long}>
          <Marker
            latitude={result.lat}
            longitude={result.long}
            offsetLeft={-20}
            offsetTop={-10}
            className=""
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="text-2xl cursor-pointer animate-bounce z-0"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>

          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closedOnClick={true}
              latitude={result.lat}
              longitude={result.long}
              className="rounded-lg z-10"
            >
              <MapBoxCard result={result} />
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}
export default Map;
