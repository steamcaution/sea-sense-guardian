'use client';

import { Suspense } from 'react';
import DroneMapContent from './droneMapContent'; // ← dynamic 제거, 직접 import
import { MapLoading } from '@/styles/solution.styles';

export const DroneMap = () => (
  <Suspense fallback={<MapLoading>지도 로드 중...</MapLoading>}>
    <DroneMapContent />
  </Suspense>
);
