import Title from "@/components/UI/title"
import ProjectsNavigation from "@/components/projects-navigation"

const Projects = () => {
  return(
    <div className="mt-10">
      <Title extraClasses={['text-primary']}>This are my Projects!!</Title>
      <ProjectsNavigation />
    </div>
  )
}

export default Projects