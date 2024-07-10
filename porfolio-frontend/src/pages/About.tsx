const About = () => {
  return (
    <div className="w-full h-full">
      <img src="not_rust.png" alt="" className="hidden lg:block lg:w-96 2xl:w-500px  -rotate-6 aspect-auto fixed -bottom-2 -left-5" />
      <div className="h-full flex flex-col justify-around items-center">
        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-center">Martin Haas</h1>
        <p className="text-center w-96 text-2xl">
          I am a third semester <strong>Computer Science</strong> student.
          At 19 years old, I stand out for my <strong>excellent grades</strong> and knowledge of
          Java, JavaScript, TypeScript, SQL and Docker.
          Exploring Python and starting studies in Rust.
          <strong> Passionate</strong> about unlocking the secrets of technologies.
        </p>
      </div>
      <img src="backpack.png" alt="" className="hidden lg:block w-500px aspect-auto fixed bottom-0 -right-8"/>
    </div>
  )
}

export default About;
