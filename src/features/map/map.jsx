import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { divIcon, Icon, point } from "leaflet";
import "leaflet/dist/leaflet.css";
import logo from "./assets/icon/location.svg"

function Map() {
  function clusterIconCustom(cluster) {
    return new divIcon({
      html: `<div class = "cluster-icon-class">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true),
    });
  }

  const markers = [
    {
      geoCode: [34.343831, 47.079996],
      popup: "position 1",
    },
    {
      geoCode: [34.343075, 47.087594],
      popup: "position 2",
    },
    {
      geoCode: [34.339956, 47.087564],
      popup: "position 3",
    },
  ];
  const customIcon = new Icon({
    iconUrl : logo,
    iconSize : [38,38]
  })
  return (
    <div className=" sm:ml-64 h-screen w-screen fixed">
      <MapContainer
        center={[34.342177, 47.099000]}
        zoom={13}
        className="h-full w-full "
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={clusterIconCustom}
        >
          {markers.map((marker) => (
            <Marker position={[marker.geoCode[0], marker.geoCode[1]]} icon={customIcon}>
              <Popup>
                <div className="bg-red-100 text-1xl p-3 rounded-2xl">
                  {marker.popup}
                </div>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

export default Map;
