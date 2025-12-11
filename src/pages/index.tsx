import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import { AppPageLayoutProps } from '@/layout/wrapper.types';
import Wrapper from '../layout/wrapper';
import {
  HeroBackgroundSection,
  HeroBannerSection,
  HeroInner,
  HeroSection,
  MainTitle,
  SubTitle
} from '@/styles/main.styles';
import { getAssetPath } from '@/lib/getAssertPath';

const Main: NextPageWithLayout = () => {
  return (
    <HeroSection>
      <video autoPlay muted loop playsInline>
        <source src={getAssetPath('/videos/background_video.mp4')} type="video/mp4" />
      </video>
      <HeroBackgroundSection>
        <HeroInner>
          <SubTitle>인력의 한계를 넘어선 24시간 해양 안전</SubTitle>
          <MainTitle>씨센스 가디언과 함께</MainTitle>
        </HeroInner>
      </HeroBackgroundSection>
      <HeroBannerSection>
        <p>
          혁신적 기술, <span>AI 기반 스마트 해양 안전 관제 시스템</span>
        </p>
        <br />
        <p>&#39;AI·드론·GPS&#39; 24시간 예방적 감시, 신속한 초동 구조 대응으로 해양의 안전을 지키겠습니다.</p>
      </HeroBannerSection>
    </HeroSection>
  );
};

export default Main;

Main.getLayout = function getLayout(page: ReactElement, props: AppPageLayoutProps) {
  return <Wrapper {...props}>{page}</Wrapper>;
};
