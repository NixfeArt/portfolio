'use client'
import Navigation from "@/components/navigation"
import { roboto400, roboto500, roboto700, roboto900, bebas } from "./fonts"
import './globals.css'
import Footer from "@/components/footer"
import { ThemeContextProvider } from "@/context/theme-context"
import { GlobalStyle } from "@/styles/styled"
import StyledComponentsRegistry from "@/lib/registry"
import { AuthProvider } from "@/context/auth-context"

// export const metadata = {
//   title: {
//     default: 'Aleksandars Portfolio',
//     template: '%s | Aleksandar'
//   }
// }

export default function RootLayout({children}) {
  return (
    <AuthProvider>
      <html
      lang="en"
      className={`${roboto400.variable} ${roboto500.variable} ${roboto700.variable} ${roboto900.variable} ${bebas.variable}`}>
        <ThemeContextProvider>
          <body className="flex flex-col min-h-screen">
            <StyledComponentsRegistry>
              <GlobalStyle />
              <Navigation />
              <main className="grow">
                {children}
              </main>
              <Footer />
            </StyledComponentsRegistry>
          </body>
        </ThemeContextProvider>
      </html>
    </AuthProvider>
  )
}