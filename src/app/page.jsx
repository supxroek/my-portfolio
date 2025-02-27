import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex flex-col h-screen mx-[10%] item py-10 justify-between">
      <nav className="flex justify-between">
        <a>logo</a>

        <div className="flex space-x-4">
          <div>icon?</div>
          <div>hamberker</div>
        </div>
      </nav>

      <section>
        <div>
          <h1 className="font-semibold text-2xl">Hi, my name is</h1>
          <h1 className="font-semibold text-8xl pb-8">Suparoek Manajit</h1>
          <h1 className="font-bold text-4xl pb-8">Software Developer</h1>
          <h1 className="font-bold text-4xl pb-8">Programmer</h1>

          <div className="flex space-x-2">
            <Image src="/html.png" alt="hero" width={30} height={30} />
            <Image src="/css.png" alt="hero" width={30} height={30} />
            <Image src="/js.png" alt="hero" width={30} height={30} />
            <Image src="/python.png" alt="hero" width={30} height={30} />
            <Image src="/database.png" alt="hero" width={30} height={30} />
            <Image src="/c.png" alt="hero" width={30} height={30} />
            <Image src="/docker.png" alt="hero" width={30} height={30} />
            <Image src="/git.png" alt="hero" width={30} height={30} />
            <Image src="/figma.png" alt="hero" width={30} height={30} />
          </div>

          <div className='mt-8'>
            <button className="px-6 py-3 flex bg-amber-600 text-white rounded-lg shadow-md hover:bg-amber-700 transition duration-300">
              Let's Talk
              <FontAwesomeIcon icon={faThumbsUp} className='w-6 h-6 animate-bounce ml-2'  />
            </button>
          </div>

        </div>
      </section>

      <footer>
        <p>&copy; 2023 Suparoek Manajit. All rights reserved.</p>
        <div className="flex space-x-4 mt-2">
          <a href="#" className="hover:text-amber-600 transition duration-300">Facebook</a>
          <a href="#" className="hover:text-amber-600 transition duration-300">Twitter</a>
          <a href="#" className="hover:text-amber-600 transition duration-300">LinkedIn</a>
        </div>
      </footer>

    </main>
  );
}
