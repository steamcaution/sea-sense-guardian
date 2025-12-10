import { HeaderInnerItem, HeaderWrap, Nav } from '@/styles/common.styles';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderWrap isScrolled={isScrolled}>
      <HeaderInnerItem>
        <Link href="/">
          <h1 style={{ fontSize: '34px', marginTop: '4px', color: '#ffffff' }}>SeaSense Guardian</h1>
          {/*<TitleLogo>*/}
          {/*  <img src={getAssetPath('/img/title_logo.png')} alt="SeaSense Guardian" />*/}
          {/*</TitleLogo>*/}
        </Link>

        <Nav isScrolled={isScrolled}>
          <Link href="/">Home</Link>
          <Link href="/solution">Solution</Link>
        </Nav>
      </HeaderInnerItem>
    </HeaderWrap>
  );
}
