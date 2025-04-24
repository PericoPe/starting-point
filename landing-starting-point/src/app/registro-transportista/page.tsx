"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';

// Marcas y modelos de camiones
const marcasModelosCamion = {
  "Mercedes-Benz": ["Atego", "Axor", "Actros", "Accelo", "L-series", "Sprinter Chasis"],
  "Scania": ["R Series", "G Series", "P Series", "S Series", "L Series", "T Series"],
  "Volvo": ["FH", "FM", "FMX", "FL", "FE", "VM"],
  "Iveco": ["Stralis", "Eurocargo", "Daily Chasis", "Tector", "Trakker"],
  "Ford": ["Cargo 1722", "Cargo 1932", "Cargo 2422", "F-4000", "F-350", "F-12000"],
  "Volkswagen": ["Constellation", "Delivery", "Worker", "Meteor"],
  "Renault": ["Premium", "Kerax", "T-Series", "C-Series", "D-Series"],
  "MAN": ["TGS", "TGX", "TGM", "TGL"],
  "International": ["9800", "7600", "4400", "LT Series", "ProStar"],
  "Freightliner": ["Cascadia", "Columbia", "FLD", "M2"],
  "Mack": ["Granite", "Anthem", "Pinnacle", "Vision"],
  "Hino": ["500 Series", "700 Series", "300 Series"],
  "Isuzu": ["N-Series", "F-Series", "C-Series"],
  "Chevrolet": ["NKR", "NPR", "FRR", "FVR"],
  "Toyota": ["Dyna", "Toyotruck"],
  "Hyundai": ["HD78", "HD65", "Mighty"],
  "Kenworth": ["T800", "T680", "W900"],
  "DAF": ["XF", "CF", "LF"],
  "FIAT": ["Iveco Daily", "Iveco Eurocargo"],
  "Otros": ["Otro modelo"]
};

export default function RegistroTransportista() {
  const [form, setForm] = useState({
    nombre: '', dni: '', telefono: '', email: '',
    domicilio: '', barrio: '', localidad: '', provincia: '', codigoPostal: '', aliasMP: '',
    licencia: '', vtoLicencia: '',
    marca: '', modelo: '', anio: '', patente: '', patenteChasis: '', tipoCamion: '', tipoCarga: '', capacidad: '', numChasis: '', numMotor: '', seguro: '', otraSeguro: '', poliza: '', vtoSeguro: ''
  });
  const [loading, setLoading] = useState(false);
const [modelosDisponibles, setModelosDisponibles] = useState([]);
  const [error, setError] = useState('');
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "marca") {
      setForm({ ...form, marca: value, modelo: "" });
      setModelosDisponibles(marcasModelosCamion[value] || []);
    } else {
      setForm({ ...form, [name]: value });
    }
  };


  const nextStep = () => {
    // Validación mínima por paso
    if (step === 1 && (!form.nombre || !form.dni || !form.telefono || !form.email || !form.domicilio || !form.barrio || !form.localidad || !form.provincia || !form.codigoPostal)) {
      setError('Por favor completá todos los campos obligatorios.');
      return;
    }
    if (step === 2 && (!form.licencia || !form.vtoLicencia)) {
      setError('Completá los datos de la licencia.');
      return;
    }
    setError('');
    setStep(step + 1);
  };
  const prevStep = () => {
    setError('');
    setStep(step - 1);
  };

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard');
    }, 1200);
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-2xl w-full flex flex-col items-center">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">Formulario de alta de transportista</h1>
        <div className="flex gap-2 mb-6">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${step===1?'bg-orange-500':'bg-gray-300'}`}>1</div>
          <div className="h-1 w-10 bg-gray-300 mt-4"></div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${step===2?'bg-orange-500':'bg-gray-300'}`}>2</div>
          <div className="h-1 w-10 bg-gray-300 mt-4"></div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${step===3?'bg-orange-500':'bg-gray-300'}`}>3</div>
        </div>
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <h2 className="text-xl font-bold text-gray-800 mb-2 mt-2">Datos personales</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="nombre" placeholder="Nombre completo" value={form.nombre} onChange={handleChange}  />
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="dni" placeholder="DNI / CUIT" value={form.dni} onChange={handleChange}  />
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="telefono" placeholder="Teléfono" value={form.telefono} onChange={handleChange}  />
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange}  />
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="domicilio" placeholder="Domicilio" value={form.domicilio} onChange={handleChange}  />
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="barrio" placeholder="Barrio" value={form.barrio} onChange={handleChange}  />
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="localidad" placeholder="Localidad" value={form.localidad} onChange={handleChange}  />
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="provincia" placeholder="Provincia" value={form.provincia} onChange={handleChange}  />
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="codigoPostal" placeholder="Código Postal" value={form.codigoPostal} onChange={handleChange}  />
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="aliasMP" placeholder="Alias Mercado Pago (opcional)" value={form.aliasMP} onChange={handleChange} />
              </div>
              <div className="mt-4">
                <label className="block font-semibold text-gray-700 mb-1">Subí una foto de la licencia (frente):</label>
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                  name="fotoLicencia"
                  // onChange={handleFileChange}
                  
                />
                <span className="text-xs text-gray-500">Podés tomar la foto con el celular.</span>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <h2 className="text-xl font-bold text-gray-800 mb-2 mt-2">Licencia de conducir</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="licencia" placeholder="Número de licencia" value={form.licencia} onChange={handleChange}  />
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="date" name="vtoLicencia" placeholder="Vencimiento de licencia" value={form.vtoLicencia} onChange={handleChange}  />
              </div>
              <div className="mt-4">
                <label className="block font-semibold text-gray-700 mb-1">Subí una foto de la licencia (frente):</label>
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                  name="fotoLicencia"
                  // onChange={handleFileChange}
                  
                />
                <span className="text-xs text-gray-500">Podés tomar la foto con el celular.</span>
              </div>
            </>
          )}
          {step === 3 && (
            <>
              <h2 className="text-xl font-bold text-gray-800 mb-2 mt-2">Datos del camión</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  className="border border-gray-300 rounded-lg px-4 py-2"
                  name="marca"
                  value={form.marca}
                  onChange={handleChange}
                  
                >
                  <option value="">Marca</option>
                  {Object.keys(marcasModelosCamion).map((marca, index) => (
                    <option key={index} value={marca}>{marca}</option>
                  ))}
                </select>
                <select
                  className="border border-gray-300 rounded-lg px-4 py-2"
                  name="modelo"
                  value={form.modelo}
                  onChange={handleChange}
                  
                >
                  <option value="">Modelo</option>
                  {modelosDisponibles.map((modelo, index) => (
                    <option key={index} value={modelo}>{modelo}</option>
                  ))}
                </select>
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="number" name="anio" placeholder="Año" value={form.anio} onChange={handleChange}  min="1900" max="2100" />
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="patente" placeholder="Patente" value={form.patente} onChange={handleChange}  />
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="patenteChasis" placeholder="Patente chasis" value={form.patenteChasis} onChange={handleChange}  />
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="tipoCamion" placeholder="Tipo de camión (chasis, acoplado, etc.)" value={form.tipoCamion} onChange={handleChange}  />
                <select
                  className="border border-gray-300 rounded-lg px-4 py-2"
                  name="tipoCarga"
                  value={form.tipoCarga}
                  onChange={handleChange}
                  
                >
                  <option value="">Tipo de carga</option>
                  <option value="SECA">SECA</option>
                  <option value="REFRIGERADA">REFRIGERADA</option>
                  <option value="CONGELADA">CONGELADA</option>
                  <option value="OTRAS">Otras</option>
                </select>
                <select
                  className="border border-gray-300 rounded-lg px-4 py-2"
                  name="capacidad"
                  value={form.capacidad}
                  onChange={handleChange}
                  
                >
                  <option value="">Capacidad (toneladas)</option>
                  {Array.from({ length: 45 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="numChasis" placeholder="N° de chasis" value={form.numChasis} onChange={handleChange}  />
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="numMotor" placeholder="N° de motor" value={form.numMotor} onChange={handleChange}  />
                <select
  className="border border-gray-300 rounded-lg px-4 py-2"
  name="seguro"
  value={form.seguro}
  onChange={handleChange}
>
  <option value="">Seleccioná una aseguradora</option>
  <option value="Sancor Seguros">Sancor Seguros</option>
  <option value="Federación Patronal">Federación Patronal</option>
  <option value="La Segunda">La Segunda</option>
  <option value="San Cristóbal">San Cristóbal</option>
  <option value="Provincia Seguros">Provincia Seguros</option>
  <option value="Zurich">Zurich</option>
  <option value="Mapfre">Mapfre</option>
  <option value="Seguros Rivadavia">Seguros Rivadavia</option>
  <option value="Allianz">Allianz</option>
  <option value="Mercantil Andina">Mercantil Andina</option>
  <option value="Boston Seguros">Boston Seguros</option>
  <option value="Nación Seguros">Nación Seguros</option>
  <option value="Orbis Seguros">Orbis Seguros</option>
  <option value="Libra Seguros">Libra Seguros</option>
  <option value="Triunfo Seguros">Triunfo Seguros</option>
  <option value="SMG Seguros">SMG Seguros</option>
  <option value="Galeno Seguros">Galeno Seguros</option>
  <option value="QBE Seguros">QBE Seguros</option>
  <option value="HDI Seguros">HDI Seguros</option>
  <option value="La Holando">La Holando</option>
  <option value="Cooperación Seguros">Cooperación Seguros</option>
  <option value="Seguros Bernardino Rivadavia">Seguros Bernardino Rivadavia</option>
  <option value="Otra">Otra</option>
</select>
{form.seguro === 'Otra' && (
  <input
    className="border border-gray-300 rounded-lg px-4 py-2 mt-2"
    type="text"
    name="otraSeguro"
    placeholder="Ingresá el nombre de la aseguradora"
    value={form.otraSeguro || ''}
    onChange={e => setForm({ ...form, otraSeguro: e.target.value })}
    required
  />
)}
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="poliza" placeholder="N° de póliza" value={form.poliza} onChange={handleChange}  />
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="date" name="vtoSeguro" placeholder="Vencimiento del seguro" value={form.vtoSeguro} onChange={handleChange}  />
              </div>
              <div className="mt-4">
                <label className="block font-semibold text-gray-700 mb-1">Subí una foto de la licencia (frente):</label>
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                  name="fotoLicencia"
                  // onChange={handleFileChange}
                  
                />
                <span className="text-xs text-gray-500">Podés tomar la foto con el celular.</span>
              </div>
            </>
          )}
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
          <div className="flex gap-2 mt-4 justify-center">
            {step > 1 && (
              <button type="button" onClick={prevStep} className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold">Anterior</button>
            )}
            {step < 3 && (
              <button type="button" onClick={nextStep} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold">Siguiente</button>
            )}
            {step === 3 && (
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-2 rounded-lg font-semibold"
                disabled={loading}
              >
                {loading ? "Guardando..." : "Guardar datos"}
              </button>
            )}
          </div>
        </form>
        <p className="text-xs text-gray-400 mt-4 text-center">Tus datos serán protegidos y solo usados para la plataforma.</p>
      </div>
    </div>
  );
}

