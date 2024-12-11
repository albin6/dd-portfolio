import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Include Leaflet's CSS

const MapComponent: React.FC = () => {
  const locations: { name: string; position: [number, number] }[] = [
    { name: "Qatar", position: [25.3548, 51.1839] },
    { name: "KSA (Saudi Arabia)", position: [23.8859, 45.0792] },
    { name: "Bahrain", position: [26.0667, 50.5577] },
  ];

  return (
    <MapContainer
      className="rounded"
      center={[25.108445, 48.518175]} // Centered at Qatar
      zoom={6}
      style={{ height: "400px", width: "100%", borderRadius: "10px" }}
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
  );
};

export default MapComponent;
