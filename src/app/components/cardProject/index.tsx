interface Project {
  title: string;
  description: string;
  siteUrl: string;
}

export function CardProject() {
  const projects: Project[] = [
    {
      title: "Barber",
      description:
        " Landing page responsiva para barbearia, com design elegante, navegação intuitiva e apresentação clara de serviços e informações.",
      siteUrl: "https://barberanavalha.vercel.app/",
    },
    {
      title: "Cineverse",
      description:
        "Cineverse é uma aplicação inovadora para amantes de cinema, que oferece uma interface intuitiva e moderna para explorar filmes e séries. ",
      siteUrl: "https://cineverseofc.vercel.app/",
    },
    {
      title: "Dev Currency",
      description:
        "Dev Currency é uma aplicação prática e eficiente para monitorar o valor das criptomoedas em tempo real. Com uma interface limpa e intuitiva. ",
      siteUrl: "https://criptomoedas-topaz.vercel.app/",
    },
    {
      title: "SenaiBot",
      description:
        "O projeto tem como objetivo otimizar o processo de consulta de patentes no INPI (Instituto Nacional da Propriedade Industrial) por meio da automação. ",
      siteUrl: "https://www.youtube.com/watch?v=GSzvVvewhI4",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {projects.map((project, index) => (
        <div
          key={index}
          className="text-white text-center border border-purple-600 p-6 rounded-lg shadow-lg  "
        >
          <h2 className="text-3xl text-white text-center font-semibold capitalize mt-4 mb-2 ">
            {project.title}
          </h2>
          <p className="text-sm text-gray-300 mb-4 group-hover:text-gray-100 transition-colors duration-300">
            {project.description}
          </p>

          <span className="flex items-center justify-center ">
            <a
              href={project.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-purple-600 text-lg font-medium flex items-center hover:text-xl duration-200 transition-all  hover:text-white"
            >
              Visualizar
            </a>
          </span>
        </div>
      ))}
    </div>
  );
}
