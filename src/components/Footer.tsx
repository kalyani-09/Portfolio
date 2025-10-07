import {  ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-white py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-cyan-900/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>

          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              Kalyani Mogre
            </h3>
            <p className="text-gray-400">Software Developer</p>
          </div>

          {/* <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div> */}

          {/* <div className="w-full border-t border-gray-800 pt-6">
            <p className="text-center text-gray-400 text-sm">
              &copy; {currentYear} John Doe. All rights reserved.
            </p>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
