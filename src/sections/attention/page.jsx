import { FCIBold } from "@/app/fonts";

function page() {
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="inline-block">
        <h1
          className={`${FCIBold.className} font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center max-w-6xl`}
        >
          I have a strong obsession for attention to detail.
        </h1>
      </div>
    </section>
  );
}
export default page