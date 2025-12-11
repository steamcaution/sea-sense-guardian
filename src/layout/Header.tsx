import { HamburgerButton, HeaderInnerItem, HeaderWrap, Nav, TitleLogo } from '@/styles/header.styles';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsScrolled(isMenuOpen || window.scrollY > 0);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (!isMenuOpen) {
        setIsScrolled(window.scrollY > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderWrap isScrolled={isScrolled}>
      <HeaderInnerItem>
        <Link href="/">
          <TitleLogo>
            <h1>SeaSense Guardian</h1>
            {/*  <img src={getAssetPath('/img/title_logo.png')} alt="SeaSense Guardian" />*/}
          </TitleLogo>
        </Link>

        <Nav isOpen={isMenuOpen}>
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/solution" onClick={closeMenu}>
            Solution
          </Link>
        </Nav>

        <HamburgerButton onClick={toggleMenu} isOpen={isMenuOpen} aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </HamburgerButton>
      </HeaderInnerItem>
    </HeaderWrap>
  );
}
