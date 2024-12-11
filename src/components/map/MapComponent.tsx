import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Include Leaflet's CSS
import L from "leaflet";

// Configure marker icons to use external URLs
const customMarkerIcon = L.icon({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41], // Size of the icon
  iconAnchor: [12, 41], // Anchor point
});
L.Marker.prototype.options.icon = customMarkerIcon;

const MapComponent: React.FC = () => {
  const locations: { name: string; position: [number, number] }[] = [
    { name: "Qatar", position: [25.3548, 51.1839] },
    { name: "KSA (Saudi Arabia)", position: [23.8859, 45.0792] },
    { name: "Bahrain", position: [26.0667, 50.5577] },
  ];

  return (
    <div className="relative overflow-hidden">
      <MapContainer
        className="rounded h-80 md:h-96 w-full z-0"
        center={[25.108445, 48.518175]} // Centered at Qatar
        zoom={6}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location, index) => (
          <Marker key={index} position={location.position}>
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
