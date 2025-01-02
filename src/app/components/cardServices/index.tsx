import { Search, CodeXml, Pencil, Wrench } from "lucide-react";

export function CardServices() {
  return (
    <div className="grid grid-cols-4 gap-6 mt-8 max-md:grid-cols-1">
      {/* Serviço 1 */}
      <div className="flex border-2 border-purple-500 flex-col items-center justify-center p-6 rounded-lg text-white hover:scale-105 transition-all duration-200">
        <CodeXml size={40} className="text-purple-500" />
        <p className="mt-4 text-center font-medium  max-w-xs">
          Desenvolvimento de aplicações web personalizadas e otimizadas.
        </p>
      </div>

      {/* Serviço 2 */}
      <div className="flex border-2 border-purple-500 flex-col items-center justify-center p-6 rounded-lg text-white hover:scale-105 transition-all duration-200">
        <Pencil size={40} className="text-purple-500" />
        <p className="mt-4 text-center font-medium  max-w-xs">
          Criação de interfaces intuitivas e envolventes para uma ótima experiência.
        </p>
      </div>

      {/* Serviço 3 */}
      <div className="flex border-2 border-purple-500 flex-col items-center justify-center p-6 rounded-lg text-white hover:scale-105 transition-all duration-200">
        <Search size={40} className="text-purple-500" />
        <p className="mt-4 text-center font-medium  max-w-xs">
        Otimização de sites para motores de busca, aumentando a visibilidade.
        </p>
      </div>

      {/* Serviço 4 - Manutenção e Suporte */}
      <div className="flex border-2 border-purple-500 flex-col items-center justify-center p-6 rounded-lg text-white hover:scale-105 transition-all duration-200">
        <Wrench size={40} className="text-purple-500" />
        <p className="mt-4 text-center font-medium  max-w-xs">
          Manutenção e suporte técnico contínuo para garantir a performance do seu site.
        </p>
      </div>
    </div>
  );
}
