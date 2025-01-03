import Image from "next/image";
import img from "../../../../public/barber.png";

export function CardProject() {
  return (
    <div className="grid grid-cols-2 gap-14 mt-8">
      <div className=" text-white text-center border border-purple-600 p-2 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        <div className="w-full h-56 overflow-hidden relative">
          <Image
            width={300}
            height={300}
            quality={100}
            src={img}
            alt="Imagem representando o serviço de barbearia, mostrando um barbeiro em ação"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <h2 className="text-xl font-semibold capitalize mt-4 mb-2 ">Barber</h2>
        <p className="text-sm text-gray-300 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
          consequatur officiis omnis facere in corrupti fugit, quasi eaque
          reiciendis beatae iste doloremque repudiandae dolorum recusandae
          sapiente soluta, pariatur ab excepturi?
        </p>
      </div>
    </div>
  );
}
