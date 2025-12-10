import { ReactElement } from 'react';
import Wrapper from '../../layout/wrapper';
import { AppPageLayoutProps } from '@/layout/wrapper.types';
import { NextPageWithLayout } from '../_app';
import { StatisticsSection } from '@components/solution/StatisticsSection';
import { ProblemSection } from '@components/solution/ProblemSection';
import { SimulationSection } from '@components/solution/SimulationSection';
import { ServiceVideoSection } from '@components/solution/ServiceVideoSection';

const Solution: NextPageWithLayout = () => {
  return (
    <>
      <ProblemSection />
      <StatisticsSection />
      <ServiceVideoSection />
      <SimulationSection />
    </>
  );
};

export default Solution;

Solution.getLayout = function getLayout(page: ReactElement, props: AppPageLayoutProps) {
  return <Wrapper {...props}>{page}</Wrapper>;
};
