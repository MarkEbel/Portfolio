// import { useState } from 'react';
// import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';

// // Sample postcode coordinates (in production use postcodes.io or real data)
// const sampleLocations = [
//   { name: 'Camden', lat: 51.5416, lon: -0.1432 },
//   { name: 'Brixton', lat: 51.4622, lon: -0.1157 },
//   { name: 'Stratford', lat: 51.5413, lon: 0.0031 },
//   { name: 'Clapham', lat: 51.4653, lon: -0.1382 },
//   { name: 'Croydon', lat: 51.3721, lon: -0.0982 },
// ];

// export default function CommuteHeatmap() {
//   const [destination, setDestination] = useState('Bank');
//   const [commuteTimes, setCommuteTimes] = useState({});
//   const [loading, setLoading] = useState(false);

//   const fetchCommuteTimes = async () => {
//     setLoading(true);
//     const times = {};

//     for (const loc of sampleLocations) {
//       // In real implementation, call TfL Journey API
//       // This is mocked for now
//       const mockTime = Math.floor(Math.random() * 60); // Simulated journey time
//       times[loc.name] = mockTime;
//     }

//     setCommuteTimes(times);
//     setLoading(false);
//   };

//   return (
//     <div className="p-6 space-y-4">
//       <h1 className="text-2xl font-bold">London Commute Heatmap</h1>
//       <div className="flex gap-2">
//         <Input
//           value={destination}
//           onChange={(e) => setDestination(e.target.value)}
//           placeholder="Workplace (e.g. Bank)"
//         />
//         <Button onClick={fetchCommuteTimes} disabled={loading}>
//           {loading ? 'Loading...' : 'Calculate Commutes'}
//         </Button>
//       </div>

//       <MapContainer center={[51.5074, -0.1278]} zoom={11} className="h-[600px] rounded-xl">
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {sampleLocations.map((loc) => {
//           const time = commuteTimes[loc.name];
//           let color = 'gray';

//           if (time < 20) color = 'green';
//           else if (time < 40) color = 'orange';
//           else if (time < 60) color = 'red';

//           return (
//             <CircleMarker
//               key={loc.name}
//               center={[loc.lat, loc.lon]}
//               radius={15}
//               pathOptions={{ color }}
//             >
//               <Tooltip sticky>{`${loc.name}: ${time ?? '?'} min`}</Tooltip>
//             </CircleMarker>
//           );
//         })}
//       </MapContainer>
//     </div>
//   );
// }
