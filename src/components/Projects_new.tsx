import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Senior Frontend Developer',
      description:
        'Leading frontend development for enterprise applications. Architecting scalable React solutions and mentoring junior developers.',
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'Frontend Developer',
       description:
        'Leading frontend development for enterprise applications. Architecting scalable React solutions and mentoring junior developers.',
     image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'Junior Frontend Developer',
       description:
        'Leading frontend development for enterprise applications. Architecting scalable React solutions and mentoring junior developers.',
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'Junior Frontend Developer',
       description:
        'Leading frontend development for enterprise applications. Architecting scalable React solutions and mentoring junior developers.',
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      gradient: 'from-blue-600 to-cyan-600',
    },
  ];

  return (
       <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-600 to-teal-600" />

          <div className="space-y-12">
            {projects.map((project, index) => (
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
                  <div
              key={index}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center space-x-4`}
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white hover:bg-gray-100 transform hover:scale-110 transition-all"
                  >
                    <ExternalLink className="w-6 h-6 text-gray-900" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white hover:bg-gray-100 transform hover:scale-110 transition-all"
                  >
                    <Github className="w-6 h-6 text-gray-900" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${project.gradient} text-white`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
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
