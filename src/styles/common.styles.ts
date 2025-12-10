import styled from '@emotion/styled';

export const HeaderWrap = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 90px;
  min-width: 600px;
  z-index: 1000;
  padding: 0 60px;

  background: ${props => (props.isScrolled ? 'rgba(10, 38, 71, 0.95)' : 'transparent')};
  box-shadow: ${props => (props.isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.2)' : 'none')};
  transition: all 0.3s ease;

  color: #ffffff;
`;

export const HeaderInnerItem = styled.div`
  margin-top: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleLogo = styled.div`
  display: flex;
  align-items: center;

  img {
    display: block;
    height: 50px;
  }
`;

export const Nav = styled.nav<{ isScrolled: boolean }>`
  display: flex;
  gap: 80px;
  align-items: center;
  height: 100%;
  margin: 4px 20px 0 0;
  color: #ffffff;

  a {
    position: relative;
    padding: 0 5px;
    font-weight: bold;
    font-size: 22px;

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

export const Container = styled.div`
  //padding-top: 15px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
`;

export const ContainerInner = styled.div`
  margin: 0 auto;
`;
