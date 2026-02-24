// Bangalore Metro stations data
export interface Station {
  name: string;
  latitude: number;
  longitude: number;
}

export const stations: Station[] = [
  { name: "Majestic", latitude: 12.9763, longitude: 77.5713 },
  { name: "City Railway Station", latitude: 12.9785, longitude: 77.5718 },
  { name: "Cubbon Park", latitude: 12.976, longitude: 77.593 },
  { name: "MG Road", latitude: 12.9756, longitude: 77.605 },
  { name: "Trinity", latitude: 12.9721, longitude: 77.6179 },
  { name: "Indiranagar", latitude: 12.9784, longitude: 77.6408 },
  { name: "Swami Vivekananda Road", latitude: 12.9854, longitude: 77.6535 },
  { name: "Byappanahalli", latitude: 12.9907, longitude: 77.6525 },
  { name: "Whitefield", latitude: 12.9698, longitude: 77.7499 },
  { name: "Jayanagar", latitude: 12.9293, longitude: 77.5823 },
  { name: "Banashankari", latitude: 12.925, longitude: 77.5456 },
  { name: "Yelachenahalli", latitude: 12.8937, longitude: 77.5635 },
  { name: "Peenya", latitude: 13.0329, longitude: 77.5252 },
  { name: "Yeshwanthpur", latitude: 13.0285, longitude: 77.5547 },
  { name: "Nagasandra", latitude: 13.0474, longitude: 77.5006 },
];

// Constants matching backend
export const METRO_EMISSION = 0.05;
export const CAR_EMISSION = 0.2;
export const REWARD_PER_KG = 10;
