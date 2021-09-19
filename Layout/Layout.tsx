// Components==============
import { motion } from 'framer-motion';
import { Leva } from 'leva';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/GlobalStyles';
import { theme } from '../styles/theme';
import { pages } from './pages';
// =========================

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Side = styled(motion.div)`
  background-color: ${({ theme }) => theme.color.black};
  height: 100%;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.s8};
  width: 300px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  display: grid;
  gap: ${({ theme }) => theme.spacing.s4};
  align-content: start;

  a {
    color: ${({ theme }) => theme.color.white};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    cursor: pointer;
  }
`;

const Button = styled.button`
  position: absolute;
  left: ${({ theme }) => theme.spacing.s4};
  bottom: ${({ theme }) => theme.spacing.s4};
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.m};
  z-index: 5;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: grid;
  justify-content: center;
  align-items: center;

  img {
    width: 22px;
    height: 22px;
  }
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sideBarVisible, setSideBarVisible] = useState(false);

  const { pathname } = useRouter();

  const canvas = useRef<HTMLDivElement>(null);
  const [hideDebug, setHideDebug] = useState(false);

  function handleDubbleClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.shiftKey) return setHideDebug((prev) => !prev);
    if (!e.ctrlKey) return;

    const fullscreenElement =
      document.fullscreenElement || document.webkitFullscreenElement;

    if (!canvas.current) return;

    if (!fullscreenElement) {
      if (canvas.current.requestFullscreen) {
        canvas.current.requestFullscreen();
        // @ts-ignore
      } else if (canvas.current.webkitRequestFullscreen) {
        // @ts-ignore
        canvas.current.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  return (
    <>
      <Head>
        <title>Three.js playground</title>
      </Head>
      <Leva hidden={hideDebug} />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Side
            animate={{ left: sideBarVisible ? 0 : -300 }}
            initial={{ left: sideBarVisible ? 0 : -300 }}
          >
            {pages.map((page) => (
              <Link key={page.link} href={page.link}>
                <a onClick={() => setSideBarVisible(false)}>{page.name}</a>
              </Link>
            ))}
          </Side>
          {!!(pathname !== '/') && (
            <Button onClick={() => setSideBarVisible((prev) => !prev)}>
              <img src="/menu.svg" alt="menu" />
            </Button>
          )}
          <Content ref={canvas} onDoubleClick={handleDubbleClick}>
            {children}
          </Content>
        </Wrapper>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}
