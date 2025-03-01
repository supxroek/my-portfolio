function page() {
  return (
    <section className="grid h-screen-auto sm:overflow-hidden">
      <div className="grid sm:grid-cols-[80%_40%] sm:justify-between">
        <div className="grid">
          <h1 className="font-semibold text-sm mb-2 text-[#aaaa]">SKILLS</h1>
          <h1 className="font-semibold text-2xl text-[#FF0000] sm:text-4xl">
            My Skills
          </h1>
          <h1 className="font-bold text-sm sm:text-xl mt-6">
            I like to take responsibility to craft aesthetic user experience
            using modern frontend architecture.
          </h1>

          <h1 className="mt-10 text-[#aaaa]">Languages & Tools</h1>
          <div className="flex flex-wrap space-x-2 mt-2 p-2 items-center">
            <img src="/html.png" className="w-8" />
            <img src="/css.png" className="w-8" />
            <img src="/js.png" className="w-8" />
            <img
              src="/nodejs.png"
              className="w-8 p-0.5 bg-gray-200 rounded-full"
            />
            <img src="/python.png" className="w-8" />
            <img src="/c.png" className="w-9" />
            <img src="/c-plus.png" className="w-8" />
            <img src="/c-sharp.png" className="w-8" />
            <img src="/firebase.png" className="w-8" />
            <img src="/dart.png" className="w-8" />
            <img src="/java.png" className="w-8" />
          </div>

          <h1 className="mt-6 text-[#aaaa]">Frameworks & Libraries</h1>
          <div className="flex flex-wrap space-x-2 mt-2 p-2 items-center">
            <img src="/react.png" className="w-8" />
            <img src="/tailwindcss.png" className="w-8" />
            <img src="/vite.png" className="w-8" />
            <img src="/nextjs.png" className="w-8" />
            <img src="/flutter.png" className="w-8" />
          </div>

          <div className="sm:flex gap-x-4">
            <div>
              <h1 className="mt-6 text-[#aaaa]">Databases</h1>
              <div className="flex flex-wrap space-x-2 mt-2 p-2 items-center">
                <img
                  src="/oracle.png"
                  className="w-8 p-0.5 bg-gray-200 rounded-full"
                />
                <img src="/postgresql.png" className="w-8" />
                <img src="/mongodb.png" className="w-8" />
              </div>
            </div>

            <div>
              <h1 className="mt-6 text-[#aaaa]">Others</h1>
              <div className="flex flex-wrap space-x-2 mt-2 p-2 items-center">
                <img src="/docker.png" className="w-8" />
                <img src="/git.png" className="w-8" />
                <img src="/figma.png" className="w-8" />
                <img src="/canva.png" className="w-8" />
                <img src="/microsoft-office.png" className="w-8" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-50 items-center justify-center sm:items-start sm:justify-start sm:mt-0">
          <img
            src="/planet.png"
            className="rounded-lg shadow-lg w-50 h-auto sm:w-80 lg:w-128"
          />
        </div>
      </div>
    </section>
  );
}
export default page