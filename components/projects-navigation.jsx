import Link from "next/link"

const ProjectsNavigation = () => {
  <div>
    <ul className="flex gap-3 font-roboto500 text-violet-900">
      <li className="hover:text-violet-600">
        <Link href="/projects/movies">Movies</Link>
      </li>
      <li>
        HJello
      </li>
    </ul>
  </div>
}

export default ProjectsNavigation