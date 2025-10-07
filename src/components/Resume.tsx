import { Download, FileText} from 'lucide-react';

export default function Resume() {
  // const resumeHighlights = [
  //   {
  //     icon: GraduationCap,
  //     title: 'Education',
  //     content: 'Bachelor of Computer Science',
  //     color: 'from-blue-600 to-cyan-600',
  //   },
  //   {
  //     icon: Briefcase,
  //     title: 'Experience',
  //     content: 'Fresher',
  //     color: 'from-purple-600 to-pink-600',
  //   },
  //   {
  //     icon: Award,
  //     title: 'Certifications',
  //     content: 'AWS Certified Developer',
  //     color: 'from-green-600 to-teal-600',
  //   },
  // ];

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 mb-6 animate-pulse-slow">
              <FileText className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Professional Resume
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Download my complete resume to learn more about my professional experience,
              education, skills, and accomplishments.
            </p>
          </div>

          {/* <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {resumeHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">{item.content}</p>
                </div>
              );
            })}
          </div> */}

          <div className="text-center">
            <a
              href="https://drive.google.com/file/d/1gAZUG7VFpDXEtjmypmjUA3HJI1EudBSM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              PDF Format • Updated on September 2025
            </p>
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  What's Inside?
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 dark:text-cyan-400 mt-1">•</span>
                    <span>Detailed work experience and accomplishments</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 dark:text-cyan-400 mt-1">•</span>
                    <span>Complete technical skills and certifications</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 dark:text-cyan-400 mt-1">•</span>
                    <span>Educational background and achievements</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 dark:text-cyan-400 mt-1">•</span>
                    <span>Notable projects and contributions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
