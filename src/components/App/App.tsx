import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Counter } from "../Counter/Counter";
import style from "./App.module.css";
import { StyledEngineProvider } from '@mui/material/styles';



export function App() {
    return (
        <Container>
            <Counter />
        </Container>
    )
}


/**переопределяет базовые значения стилей библиотеки MUI*/
const theme = createTheme({
    palette: {
        primary: {
            main: '#b9718abd',
            contrastText: '#FFFFFF',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                containedPrimary: {
                    backgroundColor: '#b9718abd',
                },
                outlinedPrimary: {
                    borderColor: '#b9718abd',
                    color: 'rgba(0, 0, 0, 0.87)',
                },
                textPrimary: {
                    color: 'rgba(0, 0, 0, 0.87)'
                },
            },
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {

                    '&.Mui-expanded': {
                        marginBottom: '0px',
                    },
                },
                content: {
                    margin: '20px 0px',
                },
            },
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    '&.Mui-expanded': {
                        margin: '0',
                    },
                },
            },
        },
    },
});

/**Компанент задает структуру приложению */
function Container(props: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <StyledEngineProvider injectFirst>
                <div className={style.container}>
                    <div className={style.content}>
                        {props.children}
                    </div>
                </div>
            </StyledEngineProvider>
        </ThemeProvider>
    );
}