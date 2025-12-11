import styled from '@emotion/styled';
import { media } from '@/styles/common.styles';

export const HeroSection = styled.div`
  position: relative;
  min-height: 500px;
  height: calc(100vh);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }
`;

export const HeroBackgroundSection = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2));
    z-index: -1;
  }
`;

export const HeroInner = styled.div`
  position: absolute;
  bottom: 12em;
  right: 0;
  padding-right: 30px;
  text-align: right;
  overflow: hidden;

  ${media.tablet} {
    bottom: 11em;
    padding-right: 20px;
  }

  ${media.mobile} {
    bottom: 10em;
    padding-right: 16px;
    text-align: left;
  }
`;

export const SubTitle = styled.p`
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 2px;
  color: white;
  animation: slideUpText 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
  opacity: 0;

  ${media.tablet} {
    font-size: 18px;
    letter-spacing: 1px;
  }

  ${media.mobile} {
    font-size: 16px;
    letter-spacing: 0.5px;
  }

  @keyframes slideUpText {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const MainTitle = styled.h1`
  font-size: 52px;
  font-weight: 700;
  line-height: 1.3;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  animation: slideUpText 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
  opacity: 0;

  ${media.tablet} {
    font-size: 36px;
    line-height: 1.4;
  }

  ${media.mobile} {
    font-size: 28px;
    line-height: 1.3;
  }

  @keyframes slideUpText {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const HeroBannerSection = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: 45px 80px;
  background: rgba(0, 0, 0, 0.87);
  color: white;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  word-break: keep-all;

  ${media.tablet} {
    padding: 35px 24px;
  }

  ${media.mobile} {
    padding: 35px 16px;
  }

  p {
    font-size: 18px;

    ${media.tablet} {
      font-size: 16px;
      min-width: auto;
    }

    ${media.mobile} {
      font-size: 14px;
      flex: 1 1 100%;
    }
  }

  span {
    font-size: 20px;
    font-weight: bold;

    ${media.tablet} {
      font-size: 18px;
    }

    ${media.mobile} {
      font-size: 16px;
    }
  }
`;
