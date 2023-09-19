import Paragraph from "./UI/paragraph"
import Title from "./UI/title"

const AboutMe = () => {
  const extraClasses = ['text-lg sm:text-xl']

  return(
    <div className="mt-4 sm:w-1/2">
        <Title>Welcome to My Portfolio</Title>
        <Paragraph>Hey there! I'm Aleksandar Kovacevic, a passionate designer and frontend developer, with a strong focus on crafting beautiful user experiences. My journey in the world of design, UI/UX, and frontend development has been a thrilling adventure, and I'm excited to share it with you.</Paragraph>
        <Title
          isRoboto={true}
          extraClasses={extraClasses}>Design That Inspires</Title>
        <Paragraph>In the realm of design, I strive to create visually captivating and user-centric designs that leave a lasting impression. From sleek mobile app interfaces to eye-catching websites, I bring concepts to life with precision and creativity. My design journey has taught me that the beauty of design lies in its ability to communicate and evoke emotions.</Paragraph>
        <Title isRoboto={true} extraClasses={extraClasses}>UI/UX Wizardry</Title>
        <Paragraph>User Experience (UX) and User Interface (UI) design are my passions. I believe that the true power of a digital product lies in its ability to provide a seamless, intuitive, and delightful experience. My UX expertise extends to wireframing, prototyping, and user testing, ensuring that every interaction is a meaningful one.</Paragraph>
        <Title isRoboto={true} extraClasses={extraClasses}>Frontend Development Magic</Title>
        <Paragraph>As a frontend developer, I specialize in Next.js and React, using the latest technologies to build high-performance and responsive web applications. I'm well-versed in creating interactive and dynamic web experiences that not only look great but also function flawlessly. Whether it's optimizing performance or ensuring cross-browser compatibility, I'm up for the challenge.</Paragraph>
        <Title isRoboto={true} extraClasses={extraClasses}>Learning is My Superpower</Title>
        <Paragraph>While I consider myself fluent in these areas, I also understand that the world of design and technology is ever-evolving. I thrive on continuous learning, always seeking new techniques, tools, and trends to stay ahead of the curve. It's this commitment to growth that keeps my work fresh and exciting.</Paragraph>
        <Title isRoboto={true} extraClasses={extraClasses}>Join Me on This Creative Journey</Title>
        <Paragraph>I'm not just a designer or developer; I'm a creative problem solver. My passion is to bring your ideas to life, turning concepts into engaging digital experiences. If you have a project in mind or simply want to chat about the latest design trends, feel free to reach out. Let's embark on this creative journey together!</Paragraph>
        <Paragraph>Thank you for visiting my portfolio. I can't wait to connect and collaborate with you to create something extraordinary.</Paragraph>
    </div>
  )
}

export default AboutMe