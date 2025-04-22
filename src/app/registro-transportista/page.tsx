"use client";
import { signIn } from "next-auth/react";

export default function RegistroTransportista() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-md w-full flex flex-col items-center">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">Registro para Transportistas</h1>
        <p className="text-gray-600 mb-8 text-center">Accedé rápidamente con tu cuenta de Google para comenzar a optimizar tus viajes y encontrar nuevas oportunidades.</p>
        <button
          onClick={() => signIn("google", { callbackUrl: "/alta-transportista" })}
          className="w-full flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-lg font-semibold text-lg shadow focus:outline-none focus:ring-2 focus:ring-orange-300 mb-2"
        >
          <svg className="w-6 h-6" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.9 33.1 30.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 6 .9 8.3 2.7l6.2-6.2C34.2 6.4 29.4 4.5 24 4.5 12.7 4.5 3.5 13.7 3.5 25S12.7 45.5 24 45.5c11.3 0 20.5-9.2 20.5-20.5 0-1.4-.1-2.5-.3-3.5z"/><path fill="#34A853" d="M6.3 14.7l7 5.1C15.1 17 18.3 14.5 24 14.5c3.1 0 6 .9 8.3 2.7l6.2-6.2C34.2 6.4 29.4 4.5 24 4.5c-7.2 0-13.2 4.2-16.1 10.2z"/><path fill="#FBBC05" d="M24 45.5c5.8 0 10.7-1.9 14.3-5.2l-6.6-5.4c-2 1.4-4.6 2.1-7.7 2.1-6.2 0-11.5-4.2-13.4-10l-7 5.4C8.7 41.3 15.8 45.5 24 45.5z"/><path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-1.1 3.1-4.2 5.5-7.7 5.5-4.4 0-8-3.6-8-8s3.6-8 8-8c2.5 0 4.7.9 6.2 2.4l6.3-6.3C37.7 13.7 31.5 10.5 24 10.5c-8.3 0-15 6.7-15 15s6.7 15 15 15c7.6 0 14-5.4 15.7-12.5.1-.5.3-1 .3-1.5 0-.6-.1-1.3-.2-2z"/></g></svg>
          Acceder con Google
        </button>
        <p className="text-xs text-gray-400 mt-4 text-center">Nunca compartiremos tus datos sin tu consentimiento.</p>
      </div>
    </div>
  );
}
