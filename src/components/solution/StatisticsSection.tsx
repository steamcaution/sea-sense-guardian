import dynamic from 'next/dynamic';
import { LoadingMessage, StatisticsInner, StatisticsSectionWrapper } from '@/styles/solution.styles';

const StatisticsSectionClient = dynamic(
  () => import('@components/solution/StatisticsChartSection').then(mod => mod.StatisticsChartSection),
  {
    ssr: false,
    loading: () => (
      <StatisticsSectionWrapper>
        <StatisticsInner>
          <LoadingMessage>통계 차트 로드 중...</LoadingMessage>
        </StatisticsInner>
      </StatisticsSectionWrapper>
    )
  }
);

export const StatisticsSection = StatisticsSectionClient;
