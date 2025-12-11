import styled from '@emotion/styled';
import { media } from '@/styles/common.styles';

export const FooterWrap = styled.footer`
  margin-top: auto;
  background: #144272;
  color: #cfe6ea;
  padding: 32px 0;

  ${media.tablet} {
    padding: 24px 0;
  }

  ${media.mobile} {
    padding: 16px 0;
  }
`;

export const InfoWrap = styled.div`
  width: 100%;
`;

export const InfoTop = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90vw;
  margin: 0 auto;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.09);

  ${media.tablet} {
    flex-direction: column;
    gap: 16px;
    padding: 0 20px 20px;
  }

  ${media.mobile} {
    padding: 0 16px 16px;
    gap: 12px;
  }

  .footerLogo {
    width: 150px;
    flex-shrink: 0;

    ${media.tablet} {
      width: 120px;
    }

    ${media.mobile} {
      width: 100px;
    }
  }
`;

export const InfoInner = styled.div`
  margin: 0 auto;
  max-width: 90vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  padding: 24px;
  align-items: flex-start;

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 20px;
  }

  ${media.mobile} {
    gap: 16px;
    padding: 16px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${media.mobile} {
    gap: 12px;
  }
`;

export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    margin: 0;
    font-size: 13px;
    color: #99a8b0;
    line-height: 1.6;

    ${media.tablet} {
      font-size: 12px;
    }

    ${media.mobile} {
      font-size: 11px;
    }
  }

  .company-name {
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 4px;

    ${media.tablet} {
      font-size: 13px;
    }

    ${media.mobile} {
      font-size: 12px;
    }
  }
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-end;

  ${media.tablet} {
    align-items: flex-start;
    gap: 12px;
  }

  ${media.mobile} {
    gap: 10px;
  }
`;

export const ContactGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: right;

  ${media.tablet} {
    text-align: left;
    gap: 6px;
  }

  p {
    margin: 0;
    font-size: 13px;
    color: #99a8b0;
    line-height: 1.6;

    ${media.tablet} {
      font-size: 12px;
    }

    ${media.mobile} {
      font-size: 11px;
    }

    strong {
      color: #b0d4dc;
      font-weight: 600;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;
  width: 32px;
  height: 32px;

  ${media.tablet} {
    justify-content: flex-start;
    gap: 10px;
  }

  img {
    width: 30px;
    height: 30px;

    ${media.tablet} {
      width: 26px;
      height: 26px;
    }

    ${media.mobile} {
      width: 24px;
      height: 24px;
    }
  }
`;

export const FooterBottomBar = styled.div`
  max-width: 90vw;
  margin: 0 auto;
  padding: 16px 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.tablet} {
    flex-direction: column;
    padding: 16px 20px 0;
    gap: 12px;
  }

  ${media.mobile} {
    padding: 12px 16px 0;
    gap: 10px;
  }
`;

export const CopyrightText = styled.p`
  font-size: 12px;
  color: #6b7a81;
  margin: 0;
  line-height: 1.4;

  ${media.tablet} {
    font-size: 11px;
    white-space: normal;
  }

  ${media.mobile} {
    font-size: 10px;
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  ${media.tablet} {
    gap: 12px;
    justify-content: flex-start;
  }

  ${media.mobile} {
    gap: 8px;
    flex-direction: column;
    align-items: flex-start;
  }

  a {
    font-size: 12px;
    color: #6b7a81;
    text-decoration: none;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

    white-space: nowrap;

    ${media.mobile} {
      font-size: 11px;
      white-space: normal;
    }

    &:hover {
      color: #99a8b0;
    }
  }

  span {
    color: rgba(255, 255, 255, 0.08);
    font-size: 12px;

    ${media.mobile} {
      font-size: 10px;
      display: none;
    }
  }
`;
