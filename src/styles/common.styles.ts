import styled from '@emotion/styled';

export const breakpoints = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  wide: 1280
};

export const media = {
  mobile: `@media (min-width: 320px) and (max-width: ${breakpoints.mobile}px)`,
  tablet: `@media (max-width: ${breakpoints.tablet}px)`,
  desktop: `@media (max-width: ${breakpoints.desktop}px)`,
  wide: `@media (max-width: ${breakpoints.wide}px)`
};

export const Container = styled.div`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
`;

export const ContainerInner = styled.div`
  margin: 0 auto;
`;
