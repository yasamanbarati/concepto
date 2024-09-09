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
            <Container fixed>
              <Navbar />
              {children}
            </Container>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
