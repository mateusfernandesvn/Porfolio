import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center text-white justify-center bg-neutral-950">
      <h2 className="font-bold text-7xl text-purple-700 mb-4">404 :( </h2>
      <h3 className="font-semibold text-2xl mb-6">Ops !Esta Página não foi encontrada</h3>
      <Link href="/" className="bg-purple-600 text-white font-medium py-2 px-4 rounded-md ">
        Voltar para o home
      </Link>
    </div>
  );
}