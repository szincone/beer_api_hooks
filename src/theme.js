import { createMuiTheme } from '@material-ui/core/styles';

//Background: #0b2742
//Background Contrast Text: #FFFFFF
//Cards: #FFFFFF
//Card Contrast Text:#0b2742

//breakpoint values {xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920}

export default createMuiTheme({
  typography: {
    htmlFontSize: 10,
    useNextVariants: true,
    body1: { color: 'inherit' },
    body2: { color: 'inherit' },
  },
  palette: {
    primary: {
      main: '#0b2742', // dark navy blue
      contrastText: '#F03A47', // bright red
    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#276FBF', // cool blue
    },
    background: {
      default: '#0b2742',
      paper: '#0b2742',
    },
    tonalOffset: 0.2,
  },
});
