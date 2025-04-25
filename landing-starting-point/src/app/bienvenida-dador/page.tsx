"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BienvenidaDador() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/dashboard-dador");
    }, 1000); // 1 segundo de espera
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="bg-white rounded-xl shadow-lg p-10 max-w-lg w-full flex flex-col items-center">
        <svg className="w-16 h-16 text-orange-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 4v5c0 5.25-3.5 10-8 12-4.5-2-8-6.75-8-12V7l8-4z" />
        </svg>
        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">¡Gracias por registrarte!</h1>
        <p className="text-gray-600 mb-4 text-center">
          Tu perfil de dador fue creado exitosamente.<br />
          Pronto podrás publicar nuevas cargas y oportunidades.
        </p>
        <span className="text-orange-500 font-semibold">Redirigiendo a tu panel...</span>
        <button
          className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow focus:outline-none focus:ring-2 focus:ring-orange-300"
          onClick={() => router.push("/dashboard-dador")}
        >
          Ir al Dashboard ahora
        </button>
      </div>
    </div>
  );
}
