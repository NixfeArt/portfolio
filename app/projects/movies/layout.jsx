import { MovieContextProvider } from "@/context/movie-context";

export default function MovieLayout({children}) {
  return(
    <MovieContextProvider>
      <div className="flex justify-center w-full">
        <div className="flex flex-col justify-center w-80 sm:1/2 md:w-3/5 lg:w-4/5">
          {children}
        </div>
      </div>
    </MovieContextProvider>
  )
}