import styled from '@emotion/styled';
import { media } from '@/styles/common.styles';

export const HeaderWrap = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 90px;
  z-index: 1000;
  padding: 0 3em;
  overflow: hidden;

  background: ${props => (props.isScrolled ? 'rgba(10, 38, 71, 0.95)' : 'transparent')};
  box-shadow: ${props => (props.isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.2)' : 'none')};
  transition: all 0.3s ease;

  color: #ffffff;

  ${media.tablet} {
    padding: 0 2em;
    height: 70px;
  }

  ${media.mobile} {
    padding: 0 16px;
    height: 60px;
  }
`;

export const HeaderInnerItem = styled.div`
  margin-top: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;

  ${media.tablet} {
    margin-top: 15px;
  }

  ${media.mobile} {
    margin-top: 10px;
  }
`;

export const TitleLogo = styled.div`
  display: flex;
  align-items: center;

  img {
    display: block;
    height: 50px;
  }

  h1 {
    font-size: 34px;
    margin: 3px 0 0 0;
    color: #ffffff;
    white-space: nowrap;

    ${media.tablet} {
      font-size: 24px;
      margin: 8px 0 0 0;
    }

    ${media.mobile} {
      font-size: 18px;
      margin: 8px 0 0 0;
    }
  }
`;

export const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  gap: 80px;
  align-items: center;
  height: 100%;
  margin: 4px 20px 0 0;
  color: #ffffff;

  ${media.tablet} {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    flex-direction: column;
    gap: 0;
    margin: 0;
    padding: ${props => (props.isOpen ? '0 20px' : '0')};
    background: rgba(10, 38, 71, 0.98);
    max-height: ${props => (props.isOpen ? '400px' : '0')};
    overflow: hidden;
    transform: translateY(0);
    opacity: ${props => (props.isOpen ? '1' : '0')};
    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    border-bottom: ${props => (props.isOpen ? '1px solid rgba(255, 255, 255, 0.1)' : 'none')};
    z-index: 999;
  }

  ${media.mobile} {
    top: 60px;
    max-height: ${props => (props.isOpen ? '350px' : '0')};
  }

  a {
    position: relative;
    padding: 0 5px;
    font-weight: bold;
    font-size: 22px;
    color: #ffffff;
    text-decoration: none;
    white-space: nowrap;

    ${media.tablet} {
      font-size: 18px;
      padding: 20px 10px;
      width: 100%;
      display: block;
      border-top: 1px solid rgba(255, 255, 255, 0.1);

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        background: rgba(255, 255, 255, 0.08);
        padding-left: 24px;
        transition: all 0.2s ease;
      }
      &::after {
        display: none;
      }
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      background: #ffffff;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

export const HamburgerButton = styled.button<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
  flex-shrink: 0;

  ${media.tablet} {
    display: flex;
    transform: ${props => (props.isOpen ? 'translateX(8px)' : 'translateX(0)')}; // ← 추가
  }

  span {
    width: 100%;
    height: 2px;
    background: #ffffff;
    border-radius: 2px;
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    transform-origin: center;

    &:nth-of-type(1) {
      transform: ${props => (props.isOpen ? 'rotate(45deg) translateY(16px)' : 'rotate(0deg) translateY(0px)')};
      transform-origin: center center;
    }

    &:nth-of-type(2) {
      opacity: ${props => (props.isOpen ? '0' : '1')};
      transition: opacity 0.3s ease;
    }

    &:nth-of-type(3) {
      transform: ${props => (props.isOpen ? 'rotate(-45deg) translateY(-16px)' : 'rotate(0deg) translateY(0px)')};
      transform-origin: center center;
    }
  }
`;
