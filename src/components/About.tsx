import { Code2, Palette, Rocket, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code',
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Creating beautiful user experiences',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing for speed and efficiency',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate Software Developer who lovs transforming ideas into engaging digital experiences. With  a strong 
              foundation in the MERN stack , I enjoy building responsive , user-friendly and visually appealing web applications 
              that deliver real value to users.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I specialize in AI tools and web applications to craft smart and efficient solutions . 
              From developing AI-powerd financial management platforms to craeeting social media applications,
              I focus on building products that modern , scalable, and impactful.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
             Curious and creative by nature , I'm always exploring new technologies and innovative ways to solve problems.
             My goal is to continuosly learn , evolve and push the boundaries of what's possible through technology and design.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[1/0.65] rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 p-1">
              <div className="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Code2 className="w-32 h-32 mx-auto text-gray-400 dark:text-gray-600" />
                  <p className="text-xl font-semibold text-gray-600 dark:text-gray-400">
                    Your Photo Here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
