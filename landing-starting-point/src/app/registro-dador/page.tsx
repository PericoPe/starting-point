"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegistroDador() {
  const router = useRouter();
  const [form, setForm] = useState({
    empresa: '',
    cuit: '',
    email: '',
    telefono: '',
    direccion: '',
    responsable: '',
    password: '',
    password2: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    // Validación de campos
    if (!form.empresa || !form.cuit || !form.email || !form.telefono || !form.direccion || !form.responsable || !form.password || !form.password2) {
      setError('Por favor completa todos los campos.');
      setLoading(false);
      return;
    }
    if (form.password !== form.password2) {
      setError('Las contraseñas no coinciden.');
      setLoading(false);
      return;
    }
    // Aquí iría lógica real de registro
    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard-dador');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-lg w-full flex flex-col items-center">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-4 text-center">Registro de Empresa - Dador de Carga</h1>
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="empresa" placeholder="Razón social de la empresa" value={form.empresa} onChange={handleChange} required />
          <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="cuit" placeholder="CUIT" value={form.cuit} onChange={handleChange} required />
          <input className="border border-gray-300 rounded-lg px-4 py-2" type="email" name="email" placeholder="Email de contacto" value={form.email} onChange={handleChange} required />
          <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="telefono" placeholder="Teléfono de contacto" value={form.telefono} onChange={handleChange} required />
          <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="direccion" placeholder="Dirección fiscal" value={form.direccion} onChange={handleChange} required />
          <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="responsable" placeholder="Responsable de contacto" value={form.responsable} onChange={handleChange} required />
          <input className="border border-gray-300 rounded-lg px-4 py-2" type="password" name="password" placeholder="Contraseña" value={form.password} onChange={handleChange} required />
          <input className="border border-gray-300 rounded-lg px-4 py-2" type="password" name="password2" placeholder="Repetir contraseña" value={form.password2} onChange={handleChange} required />
          {error && <span className="text-red-500 text-xs">{error}</span>}
          <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow mt-2" disabled={loading}>
            {loading ? "Registrando..." : "Registrarse"}
          </button>
        </form>
      </div>
    </div>
  );
}
