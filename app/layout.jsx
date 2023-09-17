import Navigation from "@/components/navigation"
import { roboto400, roboto500, roboto700, roboto900, bebas } from "./fonts"
import './globals.css'
import Footer from "@/components/footer"

export const metadata = {
  title: {
    default: 'Aleksandar Portfolio',
    template: '%s | Aleksandar'
  }
}

export default function RootLayout({children}) {
  return (
    <html lang="en" className={`${roboto400.variable} ${roboto500.variable} ${roboto700.variable} ${roboto900.variable} ${bebas.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Navigation />
        <main className="grow">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}