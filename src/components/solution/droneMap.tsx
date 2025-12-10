import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { MapLoading } from '@/styles/solution.styles';

const DroneMapContent = dynamic(() => import('./droneMapContent'), {
  ssr: false,
  loading: () => <MapLoading>지도 로드 중...</MapLoading>
});

export const DroneMap = () => (
  <Suspense fallback={<MapLoading>지도 로드 중...</MapLoading>}>
    <DroneMapContent />
  </Suspense>
);
