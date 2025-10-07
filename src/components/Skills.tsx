// import { useState } from 'react';

export default function Skills() {
  // const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  // const skills = [
  //   { name: 'HTML', level: 95, color: 'from-orange-500 to-red-500' },
  //   { name: 'CSS', level: 90, color: 'from-blue-500 to-cyan-500' },
  //   { name: 'JavaScript', level: 92, color: 'from-yellow-400 to-yellow-600' },
  //   { name: 'TypeScript', level: 88, color: 'from-blue-600 to-blue-800' },
  //   { name: 'React', level: 90, color: 'from-cyan-400 to-blue-500' },
  //   { name: 'Node.js', level: 85, color: 'from-green-500 to-green-700' },
  //   { name: 'Tailwind CSS', level: 93, color: 'from-teal-400 to-cyan-600' },
  //   { name: 'Git', level: 87, color: 'from-orange-600 to-red-600' },
  // ];

  const categories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'Next.js'],
      icon: '🎨',
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
      icon: '⚙️',
    },
    {
      title: 'Languages',
      skills: ['C','C++','Java','Python'],
      icon: '</>',
    },
    {
      title: 'AWS',
      skills: ['S3', 'EC2', 'IAM', 'VPC', 'Load Balancer','Autoscaling'],
      icon: '🌩️',
    },
   
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full" />
        </div>

        {/* <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Technical Proficiency
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-medium text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out ${
                      hoveredSkill === index ? 'animate-pulse' : ''
                    }`}
                    style={{
                      width: `${skill.level}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div>
          {/* <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Core Competencies
          </h3> */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h4>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
