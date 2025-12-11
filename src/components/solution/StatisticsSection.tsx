import dynamic from 'next/dynamic';
import {
  ChartContainer,
  ChartsGrid,
  ChartWrapper,
  StatisticsInner,
  StatisticsSectionWrapper
} from '@/styles/solution.styles';

const StatisticsSectionClient = dynamic(
  () => import('@components/solution/StatisticsChartSection').then(mod => mod.StatisticsChartSection),
  {
    ssr: false,
    loading: () => (
      <StatisticsSectionWrapper>
        <StatisticsInner>
          <ChartsGrid>
            <ChartContainer>
              <h3>연도별 해양사고 발생 추이</h3>
              <ChartWrapper>{/*<LoadingMessage>해양사고 데이터 로드 중...</LoadingMessage>*/}</ChartWrapper>
            </ChartContainer>
            <ChartContainer>
              <h3>연도별 인명피해(사망/실종)</h3>
              <ChartWrapper>{/*<LoadingMessage>인명피해 데이터 로드 중...</LoadingMessage>*/}</ChartWrapper>
            </ChartContainer>
          </ChartsGrid>
        </StatisticsInner>
      </StatisticsSectionWrapper>
    )
  }
);

export const StatisticsSection = StatisticsSectionClient;
