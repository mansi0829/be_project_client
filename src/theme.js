import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper: 'rgb(15, 23, 42)', // #0f172a
    },
  },
});

export default darkTheme;