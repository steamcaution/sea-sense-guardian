import {
  CompanyInfo,
  ContactGroup,
  CopyrightText,
  FooterBottomBar,
  FooterWrap,
  InfoInner,
  InfoTop,
  InfoWrap,
  LeftSection,
  Links,
  RightSection,
  SocialLinks
} from '@/styles/footer.styles';
import Link from 'next/link';
import { getAssetPath } from '@/lib/getAssertPath';

export default function Footer() {
  return (
    <FooterWrap>
      <InfoWrap>
        <InfoTop>
          {/*<img className="footerLogo" src={getAssetPath('/img/title_logo.png')} alt="SeaSense Guardian" />*/}
          <h1 style={{ fontSize: '28px' }}>SeaSense Guardian</h1>

          <SocialLinks>
            <a href="http://pf.kakao.com/" title="KakaoTalk" target="_blank" rel="noopener noreferrer">
              <img src={getAssetPath('/img/icons/kakao.png')} alt="KakaoTalk" />
            </a>
            <a href="https://blog.naver.com/" title="Blog" target="_blank" rel="noopener noreferrer">
              <img src={getAssetPath('/img/icons/naver_blog.png')} alt="NaverBlog" />
            </a>
            <a href="https://www.instagram.com/" title="Instagram" target="_blank" rel="noopener noreferrer">
              <img src={getAssetPath('/img/icons/instagram.png')} alt="Instagram" />
            </a>
          </SocialLinks>
        </InfoTop>
        <InfoInner>
          {/* 좌측: 회사 정보 */}
          <LeftSection>
            <CompanyInfo>
              <div className="company-name">씨센스 가디언</div>
              <p>대표자 : OOO</p>
              <p>사업자등록번호 : 000-00-0000</p>
              {/*<p>통신판매업 신고번호 : 2025-0000-00000</p>*/}
              <p>(00000) 서울시 OO구 XXXX</p>
            </CompanyInfo>
          </LeftSection>

          {/* 우측: 연락처 및 SNS */}
          <RightSection>
            <ContactGroup>
              <p>
                <strong>TEL</strong> : 02-1234-5678
              </p>
              <p>
                <strong>E-MAIL</strong> : seasense@gmail.com
              </p>
            </ContactGroup>
          </RightSection>
        </InfoInner>
      </InfoWrap>

      {/* 하단 바: 저작권, 법률링크 */}
      <FooterBottomBar>
        <CopyrightText>© 2025 SeaSense Guardian • All Rights Reserved</CopyrightText>

        <Links>
          <Link href="/">개인정보처리방침</Link>
          <span>|</span>
          <Link href="/">이용약관</Link>
          <span>|</span>
          <Link href="/">서비스 이용약관</Link>
        </Links>
      </FooterBottomBar>
    </FooterWrap>
  );
}
