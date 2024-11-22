import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const landmarks = [
  {
    id: 1,
    name: "Pashupatinath Temple",
    position: [27.7106, 85.3482],
    description:
      "A sacred Hindu temple complex on the Bagmati River, dedicated to Lord Shiva.",
    image: "https://i.pinimg.com/736x/10/3a/27/103a27cbdb069603fd534d33ddbabe23.jpg", 
  },
  {
    id: 2,
    name: "Pokhara",
    position: [28.2096, 83.9856],
    description:
      "A gateway to the Annapurna Circuit, known for its lakeside serenity and mountain views.",
    image: "https://cdn.audleytravel.com/-/-/79/1319371-pokhara-pokhara.jpg",
  },
];

const MapComponent: React.FC = () => {
  return (
    <MapContainer
      center={[28.3949, 84.124]} 
      zoom={7}
      className="w-full h-screen mt-18 z-30"
      {...({ center: [28.3949, 84.124] } as any)}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {landmarks.map((landmark) => (
        <Marker key={landmark.id} position={landmark.position}>
          <Popup>
            <div className="text-center space-y-2">
              <img
                src={landmark.image}
                alt={landmark.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-lg font-bold">{landmark.name}</h3>
              <p className="text-sm text-gray-600">{landmark.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
