'use client'
import SubTitle from "@/components/UI/sub-title"
import Title from "@/components/UI/title"
import Btn from "@/components/btns/btn"
import Link from "next/link";

const Projects = () => {

  return(
    <div className="mt-10 flex flex-col items-center">
      <Title>My Projects!!</Title>
      <div className="p-4 flex flex-col mt-10 cursor-pointer rounded-md border-2 border-violet-50 hover:border-violet-200 w-80">
      <SubTitle>Movies</SubTitle>
      <p className="mt-3 text-center font-roboto400">Movie Search and Information Portal is a user-friendly web application designed to help movie enthusiasts discover, search for, and access comprehensive information about their favorite films. This platform serves as a one-stop destination for movie buffs to explore an extensive database of movies from various genres, eras, and cultures.</p>
      <Link href="/projects/movies">
        <Btn>Check Project</Btn>
      </Link>
      </div>
    </div>
  )
}

export default Projects