import { createTheme } from "@mui/material";

const theme = createTheme({
    components:{
        MuiCssBaseline: {
            styleOverrides: (themeParam) => `
                * {
                    box-sizing: border-box;
                },
                body {
                    color: ${themeParam.palette.primary.dark};
                }
            `
        },
    },
    typography: {
        fontFamily: [
            'NotoSans', 'Montserrat',
        ].join(','),
    },
    palette: {
        background: {
            default: '#F0E9D2',
        },
        primary: {
            main: '#678983',
            light: '#E6DDC4',
            dark: '#181D31',
        },
        secondary: {
            main: '#A9AF7E',
            light: '#E6E5A3',
            dark: '#557153',
        }
    }
});

export default theme;