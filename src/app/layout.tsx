import { ReduxProvider } from "@/setup/store/redux-provider";
import { ThemeProvider } from "@/setup/theme/theme-provider";

import "./globals.css";
import Navbar from "@/components/UI/navbar-section";
import { Container } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <ThemeProvider>
            <Container
              fixed
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: {
                  xs: "32px",
                  tabletS: "60px",
                  tablet: "96px",
                  lg: "160px",
                },
              }}
            >
              <Navbar />
              {children}
            </Container>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
