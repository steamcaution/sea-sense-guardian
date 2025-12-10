import styled from '@emotion/styled';

export const FooterWrap = styled.footer`
  margin-top: auto;
  background: #144272;
  color: #cfe6ea;
  padding: 32px 0;
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

  .footerLogo {
    width: 150px;
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
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  }

  .company-name {
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 4px;
  }
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-end;
`;

export const ContactGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: right;

  p {
    margin: 0;
    font-size: 13px;
    color: #99a8b0;
    line-height: 1.6;

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

  img {
    width: 30px;
    height: 30px;
  }
`;

export const FooterBottomBar = styled.div`
  max-width: 90vw;
  margin: 0 auto;
  padding: 16px 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CopyrightText = styled.p`
  font-size: 12px;
  color: #6b7a81;
  margin: 0;
  line-height: 1.4;
`;

export const Links = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  a {
    font-size: 12px;
    color: #6b7a81;
    text-decoration: none;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

    &:hover {
      color: #99a8b0;
    }
  }

  span {
    color: rgba(255, 255, 255, 0.08);
    font-size: 12px;
  }
`;
