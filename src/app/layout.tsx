import {CssBaseline} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import {Navbar} from "app/components/shared/navbar";
import {SoftUIControllerProvider} from "app/context";
import {theme} from "app/theme";

export const metadata = {
    title: "Movie App",
    description: "Technical test film application"
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body>
                <SoftUIControllerProvider>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <Navbar />
                        {children}
                    </ThemeProvider>
                </SoftUIControllerProvider>
            </body>
        </html>
    );
}
