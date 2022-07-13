import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapRouting from "./MapRouting";
import { useSelector } from "react-redux";

const MainMap = () => {
  const selectedPoints = useSelector((state) => state.selectedPoints);
  const position = [52.51, 13.38];
  const rMachine = useRef();

  useEffect(() => {
    if (rMachine.current) {
      rMachine.current.setWaypoints(selectedPoints);
    }
  }, [selectedPoints, rMachine]);

  return (
    <section className="map-component">
      <div className="map">
        <MapContainer center={position} zoom={6} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {selectedPoints && (
            <MapRouting ref={rMachine} waypoints={selectedPoints} />
          )}
        </MapContainer>
      </div>
    </section>
  );
};

export default MainMap;
