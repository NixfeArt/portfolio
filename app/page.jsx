import AboutMe from "@/components/aboutMe"

export const metadata = {
  title: 'Aleksandar Portfolio'
}

const HomePage = () => {
    return (
    <div className="flex justify-center">
      <AboutMe />
    </div>
  )
}

export default HomePage