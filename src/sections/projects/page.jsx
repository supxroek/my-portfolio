function page() {
  return (
    <section className="grid grid-cols h-screen-auto mb-[60%]">
      <div>
        <h1 className="font-semibold text-sm mb-2 text-[#aaaa]">PROJECTS</h1>
        <h1 className="font-semibold text-2xl text-[#FF0000] sm:text-4xl">
          My Projects
        </h1>
        <h1 className="font-bold text-sm sm:text-xl mt-6">
          I have worked on several projects that have helped me to improve my
          skills and knowledge.
        </h1>
      </div>

      <div className="grid grid-cols-1 mt-10 gap-x-8 gap-y-20 sm:grid-cols-2">
        <div className="space-y-4 items-center">
          <img
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-xl h-auto h-max-50 aspect-3/2 rounded-lg"
          />
          <div>
            <h1 className="font-bold text-lg sm:text-xl">Project 1</h1>
            <p className="text-[#aaaa]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="space-y-4 items-center">
          <img
            src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-xl h-auto h-max-50 aspect-3/2 rounded-lg"
          />
          <div>
            <h1 className="font-bold text-lg sm:text-xl">Project 2</h1>
            <p className="text-[#aaaa]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="space-y-4 items-center">
          <img
            src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-xl h-auto h-max-50 aspect-3/2 rounded-lg"
          />
          <div>
            <h1 className="font-bold text-lg sm:text-xl">Project 3</h1>
            <p className="text-[#aaaa]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="space-y-4 items-center">
          <img
            src="https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-xl h-auto h-max-50 aspect-3/2 rounded-lg"
          />
          <div>
            <h1 className="font-bold text-lg sm:text-xl">Project 4</h1>
            <p className="text-[#aaaa]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default page