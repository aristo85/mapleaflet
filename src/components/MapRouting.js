import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/src/images/marker.svg";

delete L.Icon.Default.prototype._getIconUrl;
// delete L.Icon.Default.addEventListener('click', () => console.log('first'));


const createRoutineMachineLayer = ({ waypoints }) => {
L.Icon.Default.mergeOptions({
    iconRetinaUrl: icon,
  });
  
  const instance = L.Routing.control({
    waypoints,
    lineOptions: {
      styles: [{ color: "#b50abe", weight: 4 }],
    },
  });

  return instance;
};

const MapRouting = createControlComponent(createRoutineMachineLayer);

export default MapRouting;
