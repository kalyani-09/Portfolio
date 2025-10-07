import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
   
    {
      title: 'WELTH',
      description:
        'An AI Powered financial management platform that helps you track , analyze, and optimize your spending with real-time insights',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next JS','Tailwind CSS','Gemini AI','Prisma','Shadcn UI'],
      liveUrl: 'https://welth-ai-finance-app-eight.vercel.app/',
      githubUrl: 'https://github.com/kalyani-09/WELTH---AI-Finance-APP.git',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      title: 'PostPal',
      description:
        'MERN stack social media platform with full functionalit including sign up, sign in , profile picture updates, creating posts, exploring user profiles, following users,liking and commneting on posts',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Node JS','React JS','Express JS','MongoDB'],
      liveUrl: 'https://postpal-11-frontend.onrender.com/',
      githubUrl: 'https://github.com/kalyani-09/PostPal.git',
      gradient: 'from-green-600 to-teal-600',
    },
    {
      title: 'Smart- Land',
      description:
        'Automated legal document generator converting Excel data into formatted Word docs using templates, improving land acquisition workflows',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'Streamlit', 'Pandas', 'docxptl','Zipfile','BytesIO'],
      liveUrl: 'https://drive.google.com/file/d/1aFcYR6obJZcntweheck4n4QvkQHR24Bg/view?usp=sharing',
      githubUrl: 'https://github.com/kalyani-09',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'AirBnB Clone',
      description:
        'Full-stack AirBnB clone with listings, authentication , reservations and reviews using MERN stack and styled with Bootstrap',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['MongoDB', 'Express JS', 'React JS', 'Node JS','Bootstrap'],
      liveUrl: 'https://github.com/kalyani-09/Air_BnB.git',
      githubUrl: 'https://github.com/kalyani-09/Air_BnB.git',
      gradient: 'from-orange-600 to-red-600',
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
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

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
