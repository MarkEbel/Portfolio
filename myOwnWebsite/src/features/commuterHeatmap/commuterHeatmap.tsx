import { useState, useEffect, useRef } from 'react';
import {
  MapContainer,
  TileLayer,
  useMap,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.heat';
import 'leaflet/dist/leaflet.css';

type Location = {
  name: string;
  lat: number;
  lon: number;
};
const mockHeatmapPoints: [number, number, number][] = [
  [51.5074, -0.1278, 0.9], // Central London
  [51.5154, -0.1410, 0.8], // King's Cross
  [51.5287, -0.1257, 0.7], // Shoreditch
  [51.5072, -0.1276, 0.6], // Liverpool Street
  [51.5034, -0.1195, 0.5], // Tower of London
  [51.5079, -0.0877, 0.4], // Canary Wharf
  [51.5034, -0.1195, 0.3], // London Bridge
  [51.5074, -0.1278, 0.2], // Westminster
  [51.5074, -0.1278, 0.1], // Covent Garden
];

const sampleLocations: Location[] = [
  { name: 'Camden', lat: 51.5416, lon: -0.1432 },
  { name: 'Brixton', lat: 51.4622, lon: -0.1157 },
  { name: 'Stratford', lat: 51.5413, lon: 0.0031 },
  { name: 'Clapham', lat: 51.4653, lon: -0.1382 },
  { name: 'Croydon', lat: 51.3721, lon: -0.0982 },
];

function HeatmapLayer({ points }: { points: [number, number, number][] }) {
  const map = useMap();
  const heatLayerRef = useRef<L.Layer | null>(null);


  useEffect(() => {
    if (heatLayerRef.current) {
      map.removeLayer(heatLayerRef.current);
    }
    const heatLayer = (L as any).heatLayer(points, {
      radius: 150,
      blur: 15,
      max: 0.9,
      useLocalExtrema: false, // Ensures global maximum intensity
      gradient: {
        0.0: 'green',
        0.25: 'yellow',
        0.5: 'orange',
        0.75: 'red',
        1.0: 'darkred'
      },
    });
    
    
    heatLayer.addTo(map);
    heatLayerRef.current = heatLayer;

    // Cleanup on unmount
    return () => {
      if (heatLayerRef.current) {
        map.removeLayer(heatLayerRef.current);
      }
    };
  }, [map, points]);

  return null;
}

export default function CommuteHeatmap() {
  const [destination, setDestination] = useState<string>('Bank');
  const [heatmapPoints, setHeatmapPoints] = useState<[number, number, number][]>(mockHeatmapPoints);
  // const [heatmapPoints, setHeatmapPoints] = useState<[number, number, number][]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCommuteTimes = async () => {
    setLoading(true);
    const points: [number, number, number][] = [];

    for (const loc of sampleLocations) {
      try {
        // Replace this mock with actual API call to TfL
        const mockTime = Math.floor(Math.random() * 60) + 1; // Avoid division by zero
        const intensity = 1 / mockTime;
        points.push([loc.lat, loc.lon, 400*intensity]);
      } catch (error) {
        console.error(`Error fetching data for ${loc.name}:`, error);
        points.push([loc.lat, loc.lon, 0.01]);
      }
    }

    setHeatmapPoints(points);
    setLoading(false);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">London Commute Heatmap</h1>
      <div className="flex gap-2">
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Workplace (e.g. Bank)"
          className="border px-3 py-2 rounded w-full md:w-auto"
        />
        <button
          onClick={fetchCommuteTimes}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Calculate Commutes'}
        </button>
      </div>

      <MapContainer
        className="h-[600px] rounded-xl z-0"
        center={[51.5074, -0.1278]}
        zoom={11}
        scrollWheelZoom={true}
        style={{ height: '600px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <HeatmapLayer points={heatmapPoints} />
      </MapContainer>
    </div>
  );
}
