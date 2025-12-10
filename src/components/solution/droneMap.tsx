'use client';

import { ComponentType, useEffect, useState } from 'react';
import { MapLoading } from '@/styles/solution.styles';

export const DroneMap = () => {
  const [MapComponent, setMapComponent] = useState<ComponentType | null>(null);

  useEffect(() => {
    // 브라우저에서만 동적 import
    import('./droneMapContent').then(mod => {
      setMapComponent(() => mod.default);
    });
  }, []);

  if (!MapComponent) {
    return <MapLoading>지도 로드 중...</MapLoading>;
  }

  return <MapComponent />;
};
