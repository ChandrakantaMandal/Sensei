import { Inter } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/ui/themes";

import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/heder";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sensai - AI Cerrer Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      afterSignOutUrl="/sign-in"
      appearance={{
        theme: dark,
      }}
    >
      <html
        lang="en"
        suppressHydrationWarning
        className={`${inter.className}  h-full antialiased`}
      >
        <body className="min-h-full flex flex-col container">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
