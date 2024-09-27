import { ReduxProvider } from "@/setup/store/redux-provider";
import { ThemeProvider } from "@/setup/theme/theme-provider";

import "./globals.css";
import Navbar from "@/components/UI/navbar-section";
import { Container } from "@mui/material";
import Footer from "@/components/UI/footer-section";

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
              }}
            >
              <Navbar />
              {children}
            </Container>
            <Footer />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
