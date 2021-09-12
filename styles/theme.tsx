const mediaQuery = (minWidth: number) => `@media (min-width: ${minWidth}px)`;

const fontSize = (small: number, big: number) =>
  `font-size: ${small}px,

  ${mediaQuery(768)} {
     font-size: ${big}px, 
  }`;

export type ThemeTypes = typeof theme;

export const theme = {
  color: {
    primary: '#FDC61A',
    black: '#1A1A1A',
    white: '#FFFFFF',
    offWhite: '#FAFAFA',
    gray: '#343434',
  },
  shadow: {
    xs: '0 1px 3px rgba(0, 0, 0, 0.1)',
    s: '0 1px 3px rgba(0, 0, 0, 0.2)',
    m: '0 4px 6px rgba(0, 0, 0, 0.1)',
    l: '0 10px 20px rgba(0, 0, 0, 0.15), 0 5px 8px rgba(0, 0, 0, 0.03)',
    xl: '0 15px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.05)',
  },
  borderRadius: '3px',

  spacing: {
    s1: '0.25rem',
    s2: '0.5rem',
    s3: '0.75rem',
    s4: '1rem',
    s5: '1.25rem',
    s6: '1.5rem',
    s7: '1.75rem',
    s8: '2rem',
    s9: '2.5rem',
    s10: '3rem',
    s11: '4rem',
    s12: '6rem',
    s13: '8rem',
    s14: '12rem',
    s15: '16rem',
    s16: '24rem',
    s17: '30rem',
    s18: '48rem',
  },

  fontSize: {
    s: fontSize(16, 16),
    m: fontSize(17, 17),
    l: fontSize(19, 19),
    h2: fontSize(28.5, 28),
    h3: fontSize(27, 35),
    h1: fontSize(30, 40),
  },
  fontWeight: {
    normal: '400',
    semiBold: '500',
    bold: '600',
    heavy: '700',
  },
  mediaQ: {
    custom: mediaQuery,
    mobile: mediaQuery(400),
    tablet: mediaQuery(768),
    desktopS: mediaQuery(900),
    desktopM: mediaQuery(1200),
    desktopL: mediaQuery(1600),
  },
};
