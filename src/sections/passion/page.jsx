import { FCIBold } from "@/app/fonts";

function page() {
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="inline-block">
        <h1
          className={`${FCIBold.className} text-center max-w-6xl font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}
        >
          I'm passionate about software development and aim to improve my
          skills. I create efficient applications that solve problems and meet
          user needs.
        </h1>
      </div>
    </section>
  );
}
export default page