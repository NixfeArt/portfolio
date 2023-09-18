'use client'
import { MovieContextProvider } from "@/context/movie-context";

export default function MovieLayout({children}) {
  return(
    <MovieContextProvider>
      {children}
    </MovieContextProvider>
  )
}