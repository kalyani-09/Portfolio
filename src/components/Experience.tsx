import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Software Developer Intern',
      company: 'Dinosys Infotech Pvt Ltd',
      period: 'June 2024-March 2025',
      description:[
        'Engineered automated investigation tools and OSINT systems using Python and Selenium for web scraping, with a focus on backend development and data processing.',
        'Collaborated with cross-functional teams to architect, test, and deploy secure software solutions, ensuring confidentiality and compliance with industry standards.'
      ],
      color: 'from-blue-600 to-cyan-600',
    },
    // {
    //   title: 'Frontend Developer',
    //   company: 'Digital Solutions Ltd.',
    //   period: '2020 - 2022',
    //   description:
    //     'Developed responsive web applications using React and modern CSS frameworks. Collaborated with cross-functional teams to deliver projects.',
    //   achievements: [
    //     'Built 15+ production-ready web applications',
    //     'Reduced bundle size by 35% through optimization',
    //     'Established component library used across teams',
    //   ],
    //   color: 'from-purple-600 to-pink-600',
    // },
    // {
    //   title: 'Junior Frontend Developer',
    //   company: 'StartUp Ventures',
    //   period: '2019 - 2020',
    //   description:
    //     'Created user interfaces for web applications. Learned modern development practices and contributed to various client projects.',
    //   achievements: [
    //     'Delivered features for 10+ client projects',
    //     'Improved code quality through peer reviews',
    //     'Gained expertise in React and Redux',
    //   ],
    //   color: 'from-green-600 to-teal-600',
    // },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full" />
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-600 to-teal-600" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="hidden md:block md:w-1/2" />

                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-600 transform -translate-x-1/2 z-10" />

                <div
                  className={`ml-20 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
                  }`}
                >
                  <div className="group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-start space-x-4 mb-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${exp.color} shadow-lg group-hover:scale-110 transition-transform`}
                      >
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>

                    {/* <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p> */}
                    <div className="space-y-2">
                      {/* <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        Key Achievements:
                      </p> */}
                      <ul className="space-y-2">
                        {exp.description.map((des, desIndex) => (
                          <li
                            key={desIndex}
                            className="flex items-start space-x-2 text-gray-600 dark:text-gray-400"
                          >
                            <div
                              className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`}
                            />
                            <span className="text-sm">{des}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    

                    {/* <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        Key Achievements:
                      </p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start space-x-2 text-gray-600 dark:text-gray-400"
                          >
                            <div
                              className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`}
                            />
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
