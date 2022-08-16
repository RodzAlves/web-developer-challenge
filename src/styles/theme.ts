export const theme = {
  grid: {
    container: '51.6rem',
    gutter: '2.4rem',
  },
  border: {
    radius: {
      small: '0.3rem',
      medium: '0.8rem',
    },
  },
  font: {
    family:
      "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
    },
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  colors: {
    primary: '#313131',
    secondary: '#494949',
    background: '#343434',
    white: '#FAFAFA',
    black: '#2b2b2b',
    lightGray: '#9f9f9f',
    gray: '#5f5f5f',
    error: '#ee4b2b',
    green: '#71bb00',
  },
};

export type TypeTheme = typeof theme;
