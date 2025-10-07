import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-gray-900" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <div className="relative inline-block">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 p-1 animate-pulse-slow">
              <div className="w-full h-full rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-6xl font-bold text-gray-600 dark:text-gray-400">
                KM
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white animate-fade-in">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Kalyani Mogre
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 animate-fade-in animation-delay-200">
             Passionate Software Developer who turns ideas into interactive digital experiences. </p>
            {/* <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 animate-fade-in animation-delay-400">
          With expertise in MERN stack and AI integration , I love crafting smart, impactful and seamless web applications.
            </p> */}
          </div>

          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 animate-fade-in animation-delay-600">
             With expertise in MERN stack and AI integration , I love crafting smart, impactful and seamless web applications.
          </p>

          <div className="flex items-center justify-center space-x-4 animate-fade-in animation-delay-800">
            <a
              href="https://github.com/kalyani-09"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/kalyani-mogre-b8a375247/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="mailto:kalyanimogre2003@gmail.com"
              className="p-3 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
          </div>

          <div className="pt-8 animate-fade-in animation-delay-1000">
            <button
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-900 to-transparent" />
    </section>
  );
}
