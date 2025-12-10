import { Circle, MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import React, { RefObject, useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { DroneMapContainer, InfoPanel, StatusBadge } from '@/styles/solution.styles';

const droneIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [28, 32],
  iconAnchor: [16, 28],
  popupAnchor: [0, -28],
  shadowSize: [41, 41],
  shadowAnchor: [12, 41]
});

const targetIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [28, 32],
  iconAnchor: [16, 28],
  popupAnchor: [0, -28],
  shadowSize: [41, 41],
  shadowAnchor: [12, 41]
});

const startPosition: [number, number] = [35.1585, 129.1689];
const targetPosition: [number, number] = [35.148, 129.175];

const calculateDistance = (pos1: [number, number], pos2: [number, number]): number => {
  const lat1 = pos1[0];
  const lon1 = pos1[1];
  const lat2 = pos2[0];
  const lon2 = pos2[1];

  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const interpolatePosition = (start: [number, number], end: [number, number], progress: number): [number, number] => {
  const lat = start[0] + (end[0] - start[0]) * progress;
  const lng = start[1] + (end[1] - start[1]) * progress;
  return [lat, lng];
};

const updateDroneState = (
  currentProgress: number,
  setAltitude: (fn: (prev: number) => number) => void,
  setSpeed: (fn: (prev: number) => number) => void,
  setBattery: (fn: (prev: number) => number) => void,
  setDistance: (distance: number) => void,
  setDroneStatus: (status: 'active' | 'arrived') => void,
  moveProgressRef: RefObject<number>
): [number, number] => {
  const newProgress = currentProgress + 0.02;

  if (newProgress >= 1) {
    moveProgressRef.current = 1;
    setDroneStatus('arrived');
    setAltitude(() => 120);
    setSpeed(() => 0);
    return targetPosition;
  }

  moveProgressRef.current = newProgress;
  const newPosition = interpolatePosition(startPosition, targetPosition, newProgress);

  setAltitude(prev => {
    if (newProgress < 0.3) {
      return Math.min(150, prev + 20);
    } else if (newProgress > 0.8) {
      return Math.max(80, prev - 5);
    }
    return 150;
  });

  if (newProgress < 0.3) {
    setSpeed(prev => Math.min(25, prev + 2));
  } else if (newProgress > 0.8) {
    setSpeed(prev => Math.max(5, prev - 1));
  } else {
    setSpeed(() => 20 + Math.sin(newProgress * Math.PI) * 5);
  }

  setBattery(prev => Math.max(40, prev - 0.15));

  const remainingDistance = calculateDistance(newPosition, targetPosition);
  setDistance(remainingDistance);

  return newPosition;
};

const getDroneStatusText = (status: 'active' | 'arrived' | 'idle'): string => {
  if (status === 'active') return '출동 중';
  if (status === 'arrived') return '도착';
  return '대기 중';
};

export default function DroneMapContent() {
  const [dronePosition, setDronePosition] = useState<[number, number]>(startPosition);
  const [droneStatus, setDroneStatus] = useState<'active' | 'arrived' | 'idle'>('active');
  const [distance, setDistance] = useState(calculateDistance(startPosition, targetPosition));
  const [altitude, setAltitude] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [battery, setBattery] = useState(100);
  const mapRef = useRef<L.Map | null>(null);
  const moveProgressRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDronePosition(() => {
        return updateDroneState(
          moveProgressRef.current,
          setAltitude,
          setSpeed,
          setBattery,
          setDistance,
          setDroneStatus,
          moveProgressRef
        );
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const route: [number, number][] = [startPosition, targetPosition];

  return (
    <DroneMapContainer>
      <MapContainer
        ref={mapRef}
        center={[35.1565, 129.17]}
        zoom={14.5}
        style={{ height: '100%', width: '100%', zIndex: '10' }}
        bounds={[startPosition, targetPosition]}
        boundsOptions={{ padding: [50, 50] }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        <Marker position={targetPosition} icon={targetIcon}>
          <Popup>
            <div style={{ textAlign: 'center', minWidth: '180px' }}>
              <strong>목표 위치: 조난자 위치</strong>
              <br />
              위치: {targetPosition[0].toFixed(4)}, {targetPosition[1].toFixed(4)}
            </div>
          </Popup>
        </Marker>

        <Marker position={dronePosition} icon={droneIcon}>
          <Popup>
            <div style={{ textAlign: 'center', minWidth: '180px' }}>
              <strong>드론 현 위치</strong>
              <br />
              위치: {dronePosition[0].toFixed(4)}, {dronePosition[1].toFixed(4)}
              <br />
              상태: {droneStatus === 'active' ? '출동 중' : '도착'}
            </div>
          </Popup>
        </Marker>

        <Polyline positions={route} color="#2196F3" weight={3} opacity={0.8} dashArray="5, 5" />

        <Circle center={dronePosition} radius={200} color="#FF6B6B" fillColor="#FF6B6B" fillOpacity={0.1} weight={2} />

        <InfoPanel>
          <p>
            <strong>상태:</strong>{' '}
            <StatusBadge status={droneStatus === 'arrived' ? 'idle' : 'active'}>
              {getDroneStatusText(droneStatus)}
            </StatusBadge>
          </p>
          <p>
            <strong>거리:</strong> {distance.toFixed(2)} km
          </p>
          <p>
            <strong>고도:</strong> {altitude} m
          </p>
          <p>
            <strong>속도:</strong> {speed.toFixed(1)} km/h
          </p>
          <p>
            <strong>배터리:</strong> {battery.toFixed(1)}%
          </p>
          <p>
            <strong>진행률:</strong> {(moveProgressRef.current * 100).toFixed(0)}%
          </p>
        </InfoPanel>
      </MapContainer>
    </DroneMapContainer>
  );
}
