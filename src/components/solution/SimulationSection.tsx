import {
  CardsColumnWrapper,
  FeatureCard,
  FeatureDesc,
  FeatureIcon,
  FeatureTitle,
  HeaderSection,
  MapColumnWrapper,
  ServiceSubtitle,
  ServiceTitle,
  SimulationInner,
  SimulationMapLayout,
  SimulationWrapper
} from '@/styles/solution.styles';
import { DroneMap } from '@components/solution/droneMap';

export const SimulationSection = () => {
  return (
    <SimulationWrapper>
      <SimulationInner>
        {/* 헤더 */}
        <HeaderSection>
          <ServiceTitle>통합 관제 시뮬레이션</ServiceTitle>
          <ServiceSubtitle>
            실시간 위치와 드론 출동 경로를 보여주어, 상황에 맞는 대응을 빠르게 결정할 수 있게 합니다.
          </ServiceSubtitle>
        </HeaderSection>

        <SimulationMapLayout>
          <MapColumnWrapper>
            <DroneMap />
          </MapColumnWrapper>
          <CardsColumnWrapper>
            <FeatureCard>
              <FeatureIcon>🗺️</FeatureIcon>
              <FeatureTitle>실시간 위치 추적</FeatureTitle>
              <FeatureDesc>선박·레저기구·사람의 위치를 GPS/AIS로 통합 추적</FeatureDesc>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>🌙</FeatureIcon>
              <FeatureTitle>악천후·야간에도 안정적</FeatureTitle>
              <FeatureDesc>AI의 객관적 판단으로 모든 환경에서 구조 확률 향상</FeatureDesc>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>🎛️</FeatureIcon>
              <FeatureTitle>직관적 대시보드 UI</FeatureTitle>
              <FeatureDesc>관제사는 전체 지도, 개별 선박 상세, 실시간 영상을 즉시 전환</FeatureDesc>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>✅</FeatureIcon>
              <FeatureTitle>체계적 대응</FeatureTitle>
              <FeatureDesc>예측 불가능한 변수도 신속하고 일관되게 대처할 수 있습니다.</FeatureDesc>
            </FeatureCard>
          </CardsColumnWrapper>
        </SimulationMapLayout>
      </SimulationInner>
    </SimulationWrapper>
  );
};
