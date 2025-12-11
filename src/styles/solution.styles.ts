import styled from '@emotion/styled';
import { media } from '@/styles/common.styles';

// ============================================
// SECTION 1: 문제
// ============================================
export const ProblemSectionWrapper = styled.section`
  padding: 130px 40px 50px 40px;
  background: #252525;

  ${media.tablet} {
    padding: 100px 24px 40px 24px;
  }

  ${media.mobile} {
    padding: 80px 16px 30px 16px;
  }
`;

export const ProblemContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProblemTitle = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 60px;
  text-align: center;

  ${media.tablet} {
    font-size: 32px;
    margin-bottom: 40px;
  }

  ${media.mobile} {
    font-size: 24px;
    margin-bottom: 30px;
  }

  span {
    color: #e74c3c;
    font-size: 42px;
    font-weight: 700;

    ${media.tablet} {
      font-size: 32px;
    }

    ${media.mobile} {
      font-size: 24px;
    }
  }
`;

export const ProblemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  ${media.mobile} {
    gap: 16px;
  }
`;

export const ProblemCard = styled.div<{ isVisible: boolean; delay: number }>`
  background: #333333;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border-left: 4px solid #e74c3c;
  position: relative;
  overflow: hidden;

  opacity: ${props => (props.isVisible ? 1 : 0)};
  transform: ${props => (props.isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)')};
  transition: all 2s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: ${props => `${props.delay * 0.15}s`};

  ${media.mobile} {
    padding: 24px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #e74c3c, transparent);
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(231, 76, 60, 0.2);
    background: #3d3d3d;
  }
`;

export const CardIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin-bottom: 20px;
  box-shadow: 0 4px 15px rgba(231, 76, 60, 0.2);

  ${media.mobile} {
    width: 50px;
    height: 50px;
    font-size: 24px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;

  ${media.mobile} {
    font-size: 18px;
  }
`;

export const CardContent = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    font-size: 14px;
    color: #d0d0d0;
    line-height: 1.8;
    margin-bottom: 12px;
    padding-left: 20px;
    position: relative;

    ${media.mobile} {
      font-size: 13px;
      margin-bottom: 8px;
    }

    &::before {
      content: '→';
      position: absolute;
      left: 0;
      color: #e74c3c;
      font-weight: bold;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

// ============================================
// SECTION 2: 통계
// ============================================
export const StatisticsSectionWrapper = styled.section`
  padding: 40px 40px 100px 40px;
  background: #252525;

  ${media.tablet} {
    padding: 40px 24px 80px 24px;
  }

  ${media.mobile} {
    padding: 30px 16px 60px 16px;
  }
`;

export const StatisticsInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const StatisticsTitle = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 60px;
  text-align: center;

  ${media.tablet} {
    font-size: 32px;
    margin-bottom: 40px;
  }

  ${media.mobile} {
    font-size: 24px;
    margin-bottom: 30px;
  }

  span {
    color: #e74c3c;
    font-size: 42px;
    font-weight: 700;

    ${media.tablet} {
      font-size: 32px;
    }

    ${media.mobile} {
      font-size: 24px;
    }
  }
`;

export const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 40px;

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  ${media.mobile} {
    gap: 20px;
  }
`;

export const ChartContainer = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border-top: 3px solid #e74c3c;

  ${media.tablet} {
    padding: 20px;
  }

  ${media.mobile} {
    padding: 16px;
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
    color: #252525;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    gap: 8px;

    ${media.mobile} {
      font-size: 16px;
      margin-bottom: 20px;
    }
  }
`;

export const ChartWrapper = styled.div`
  width: 100%;
  height: 300px;

  ${media.mobile} {
    height: 250px;
  }

  canvas {
    max-height: 100%;
  }
`;

export const LoadingMessage = styled.div`
  background: rgba(52, 152, 219, 0.1);
  border: 1px solid #3498db;
  border-radius: 8px;
  padding: 20px;
  color: #3498db;
  text-align: center;
  font-size: 14px;

  ${media.mobile} {
    padding: 16px;
    font-size: 12px;
  }
`;

export const ErrorMessage = styled.div`
  background: rgba(231, 76, 60, 0.1);
  border: 1px solid #e74c3c;
  border-radius: 8px;
  padding: 20px;
  color: #e74c3c;
  text-align: center;
  font-size: 14px;

  ${media.mobile} {
    padding: 16px;
    font-size: 12px;
  }
`;

// ============================================
// SECTION 3: 드론 인명 구조
// ============================================

export const VideoServiceWrapper = styled.section`
  width: 100%;
  padding: 80px 0;
  background-color: #f5f5f5;

  ${media.tablet} {
    padding: 60px 0;
  }

  ${media.mobile} {
    padding: 40px 0;
  }
`;

export const VideoServiceInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  ${media.mobile} {
    padding: 0 16px;
  }
`;

export const ServiceTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.3;
  color: #111;
  margin-bottom: 16px;

  ${media.tablet} {
    font-size: 28px;
  }

  ${media.mobile} {
    font-size: 22px;
  }
`;

export const ServiceSubtitle = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 0;
  word-break: keep-all;

  ${media.tablet} {
    font-size: 14px;
  }

  ${media.mobile} {
    font-size: 13px;
  }
`;

export const VideoLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: flex-start;

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 32px;
    margin-top: 30px;
  }

  ${media.mobile} {
    gap: 24px;
    margin-top: 20px;
  }
`;

export const VideoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${media.mobile} {
    gap: 6px;
  }
`;

export const TabButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const TabButton = styled.button<{ isActive: boolean }>`
  padding: 10px 16px;
  border: 2px solid ${({ isActive }) => (isActive ? '#0a2647' : '#e0e0e0')};
  background-color: ${({ isActive }) => (isActive ? '#0a2647' : '#ffffff')};
  color: ${({ isActive }) => (isActive ? '#ffffff' : '#333')};
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  ${media.mobile} {
    padding: 8px 12px;
    font-size: 12px;
  }

  &:hover {
    border-color: #0a2647;
    background-color: ${({ isActive }) => (isActive ? '#0a2647' : '#f5f5f5')};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const VideoWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background: #000;

  ${media.mobile} {
    aspect-ratio: auto;
    max-height: 250px;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${media.mobile} {
    gap: 16px;
  }
`;

export const VideoInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid #e0e0e0;

  ${media.mobile} {
    padding: 16px;
  }
`;

export const VideoInfoIcon = styled.span`
  font-size: 28px;
  line-height: 1;

  ${media.mobile} {
    font-size: 24px;
  }
`;

export const VideoInfoTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #111;
  margin: 0;

  ${media.mobile} {
    font-size: 14px;
  }
`;

export const VideoInfoDesc = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #555;
  margin: 0;
  word-break: keep-all;

  ${media.mobile} {
    font-size: 13px;
  }
`;

export const VideoInfoPoints = styled.ul`
  list-style: none;
  padding: 0;
  margin: 8px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${media.mobile} {
    gap: 6px;
  }
`;

export const VideoInfoPoint = styled.li`
  font-size: 13px;
  line-height: 1.5;
  color: #666;
  padding-left: 20px;
  position: relative;
  word-break: keep-all;

  ${media.mobile} {
    font-size: 12px;
    padding-left: 16px;
  }

  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #4caf50;
    font-weight: bold;
  }
`;

// ============================================
// SECTION 4: 통합 관제 대시보드
// ============================================
export const SimulationWrapper = styled.section`
  width: 100%;
  padding: 80px 0;
  background-color: #ffffff;
`;

export const SimulationInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const HeaderSection = styled.div`
  margin-bottom: 48px;
  text-align: center;
`;

export const SimulationMapLayout = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 48px;
  align-items: flex-start;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const MapColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MapSectionLabel = styled.p`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #888;
  margin: 0;
`;

export const CardsColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-self: center;
`;

export const SimulationResultWrapper = styled.div`
  grid-column: 1 / -1;
  margin-top: 16px;
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 24px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  background-color: #f9fbfc;
  border-radius: 12px;
  border: 1px solid #e8ecf1;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);

  &:hover {
    border-color: #205295;
    background: linear-gradient(135deg, #f0f5fa 0%, #e8f1f9 100%);
    box-shadow: 0 6px 16px rgba(32, 82, 149, 0.2);
  }
`;

export const FeatureIcon = styled.span`
  font-size: 24px;
  line-height: 1;
`;

export const FeatureTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #111;
  margin: 0;
`;

export const FeatureDesc = styled.p`
  font-size: 13px;
  line-height: 1.5;
  color: #666;
  margin: 0;
`;

// ============================================
// 드론 지도 영역
// ============================================
export const MapLoading = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  border-radius: 12px;
  font-size: 16px;
  color: #666;
`;

export const DroneMapContainer = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 1;

  .leaflet-control {
    z-index: 0 !important;
  }
  .leaflet-pane {
    z-index: 0 !important;
  }
  .leaflet-top,
  .leaflet-bottom {
    z-index: 0 !important;
  }
`;

export const InfoPanel = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.95);
  padding: 16px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 20;
  min-width: 150px;

  p {
    margin: 6px 0;
    font-size: 14px;
    color: #333;

    strong {
      color: #0a2647;
      font-weight: 600;
    }
  }
`;

export const StatusBadge = styled.span<{ status: 'active' | 'idle' | 'emergency' }>`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  background: ${props => {
    switch (props.status) {
      case 'active':
        return '#4CAF50';
      case 'idle':
        return '#FFC107';
      case 'emergency':
        return '#F44336';
      default:
        return '#999';
    }
  }};
  color: white;
`;
