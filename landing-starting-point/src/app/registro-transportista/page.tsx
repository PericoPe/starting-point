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
  const provinciasArgentinas = [
  "Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán"
];

const [form, setForm] = useState({
  nombre: '',
  dni: '',
  fechaNacimiento: '',
  cuit: '',
  condicionFiscal: '',
  telefono: '',
  email: '',
  domicilio: '',
  barrio: '',
  localidad: '',
  provincia: '',
  codigoPostal: '',
  licencia: '',
  vtoLicencia: '',
  fotosDNI: [] as File[], // para subir frente y dorso del DNI
  fotosLicencia: [] as File[], // para subir frente y dorso de la licencia
  provinciasEntrega: [] as string[], // <-- Nuevo campo para preferencias de provincias
  banco: '',
  cbu: '',
  alias: '',
  marca: '', modelo: '', anio: '', patente: '', patenteChasis: '', tipoCamion: '', tipoCarga: '', capacidad: '', numChasis: '', numMotor: '',
  // CAMPOS VTV OPCIONALES
  vtvNumero: '',
  vtvVencimiento: '',
  vtvArchivo: [] as File[],
  seguro: '', otraSeguro: '', poliza: '', vtoSeguro: ''
});
  const [loading, setLoading] = useState(false);
const [modelosDisponibles, setModelosDisponibles] = useState<string[]>([]);
  const [error, setError] = useState('');
  const [step, setStep] = useState(1);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "marca") {
      setForm({ ...form, marca: value, modelo: "" });
      setModelosDisponibles(marcasModelosCamion[value as keyof typeof marcasModelosCamion] || []);
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
  const [showThanks, setShowThanks] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setTimeout(() => {
      setLoading(false);
      setShowThanks(true);
      setTimeout(() => {
        router.push('/dashboard');
      }, 200);
    }, 100);
  };



  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-2xl w-full flex flex-col items-center">
        {showThanks ? (
          <div className="flex flex-col items-center justify-center py-12">
            <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">¡Gracias por registrarte!</h2>
            <p className="text-lg text-gray-700 mb-2 text-center">Bienvenido/a a la comunidad de <span className="font-bold text-orange-500">Starting Point</span>.</p>
            <p className="text-gray-500 text-center">En breve serás redirigido a tu panel.</p>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">Formulario de alta de transportista</h1>
            <div className="flex gap-2 mb-6">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${step===1?'bg-orange-500':'bg-gray-300'}`}>1</div>
              <div className="h-1 w-10 bg-gray-300 mt-4"></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${step===2?'bg-orange-500':'bg-gray-300'}`}>2</div>
              <div className="h-1 w-10 bg-gray-300 mt-4"></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${step===3?'bg-orange-500':'bg-gray-300'}`}>3</div>
              <div className="h-1 w-10 bg-gray-300 mt-4"></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${step===4?'bg-orange-500':'bg-gray-300'}`}>4</div>
            </div>
            <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>

          {step === 1 && (
            <>
              <h2 className="text-xl font-bold text-gray-800 mb-2 mt-2">Datos personales</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="nombre" placeholder="Nombre y Apellido" value={form.nombre} onChange={handleChange} />
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="dni" placeholder="DNI" value={form.dni} onChange={handleChange} />
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="date" name="fechaNacimiento" placeholder="Fecha de Nacimiento" value={form.fechaNacimiento || ''} onChange={handleChange} />
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="cuit" placeholder="CUIT / CUIL" value={form.cuit || ''} onChange={handleChange} />
                <select className="border border-gray-300 rounded-lg px-4 py-2" name="condicionFiscal" value={form.condicionFiscal || ''} onChange={handleChange}>
                  <option value="">Condición Fiscal</option>
                  <option value="Monotributista">Monotributista</option>
                  <option value="Responsable Inscripto">Responsable Inscripto</option>
                </select>
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="telefono" placeholder="Teléfono" value={form.telefono} onChange={handleChange} />
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="domicilio" placeholder="Dirección" value={form.domicilio} onChange={handleChange} />
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="barrio" placeholder="Barrio" value={form.barrio} onChange={handleChange} />
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="localidad" placeholder="Localidad" value={form.localidad} onChange={handleChange} />
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="provincia" placeholder="Provincia" value={form.provincia} onChange={handleChange} />
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="codigoPostal" placeholder="Código Postal" value={form.codigoPostal} onChange={handleChange} />
              </div>
              <div className="mt-4">
                <label className="block font-semibold text-gray-700 mb-1">Subí la imagen de frente y dorso de tu DNI:</label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                  name="fotosDNI"
                  // onChange={handleFileChange}
                />
                <span className="text-xs text-gray-500">Podés subir ambas imágenes (frente y dorso) o tomar las fotos con el celular.</span>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <h2 className="text-xl font-bold text-gray-800 mb-2 mt-2">Licencia de conducir</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="licencia" placeholder="Número de licencia" value={form.licencia} onChange={handleChange} />
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="date" name="vtoLicencia" placeholder="Fecha de vencimiento" value={form.vtoLicencia} onChange={handleChange} pattern="\\d{4}-\\d{2}-\\d{2}" />
              </div>
              <div className="mt-4">
                <label className="block font-semibold text-gray-700 mb-1">Subí la imagen de frente y dorso de tu licencia de conducir:</label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                  name="fotosLicencia"
                  // onChange={handleFileChange}
                />
                <span className="text-xs text-gray-500">Podés subir ambas imágenes (frente y dorso) o tomar las fotos con el celular.</span>
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
                  {marcasModelosCamion[form.marca as keyof typeof marcasModelosCamion] && marcasModelosCamion[form.marca as keyof typeof marcasModelosCamion].map((modelo, idx) => (
                    <option key={idx} value={modelo}>{modelo}</option>
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
                {/* VTV OPCIONAL */}
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="text" name="vtvNumero" placeholder="N° de certificado VTV (opcional)" value={form.vtvNumero || ''} onChange={handleChange} />
                <input className="border border-gray-300 rounded-lg px-4 py-2" type="date" name="vtvVencimiento" placeholder="Fecha vencimiento VTV (opcional)" value={form.vtvVencimiento || ''} onChange={handleChange} />
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="block font-semibold text-gray-700 mb-1">Subí una foto del comprobante de póliza:</label>
                  <input
                    type="file"
                    accept="image/*,application/pdf"
                    className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                    name="fotoPoliza"
                    // onChange={handleFileChange}
                  />
                  <span className="text-xs text-gray-500">Podés subir una foto o pdf del comprobante de póliza.</span>
                </div>
                <div className="flex flex-col">
                  <label className="block font-semibold text-gray-700 mb-1">Subí una foto del comprobante de VTV (opcional):</label>
                  <input
                    type="file"
                    accept="image/*,application/pdf"
                    className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                    name="vtvArchivo"
                    onChange={e => setForm(f => ({ ...f, vtvArchivo: e.target.files ? Array.from(e.target.files) : [] }))}
                    multiple={false}
                  />
                  <span className="text-xs text-gray-500">Podés subir una foto o pdf del comprobante. Si no lo hacés ahora, podrás cargarlo luego desde tu perfil.</span>
                </div>
              </div>
            </>
          )}
          {step === 4 && (
            <>
              <h2 className="text-xl font-bold text-gray-800 mb-2 mt-2">Datos bancarios y preferencias de entrega</h2>
              <div className="mb-2 text-gray-700">Por favor, completá los datos bancarios para que puedas cobrar tus viajes y seleccioná en qué provincias podés realizar entregas:</div>
              <select
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                name="banco"
                value={form.banco}
                onChange={handleChange}
                required
              >
                <option value="">Seleccioná tu banco</option>
                <option value="Banco Nación">Banco Nación</option>
                <option value="Banco Provincia">Banco Provincia</option>
                <option value="Banco Galicia">Banco Galicia</option>
                <option value="Banco Santander Río">Banco Santander Río</option>
                <option value="Banco BBVA">Banco BBVA</option>
                <option value="Banco Macro">Banco Macro</option>
                <option value="Banco HSBC">Banco HSBC</option>
                <option value="Banco Patagonia">Banco Patagonia</option>
                <option value="Banco Supervielle">Banco Supervielle</option>
                <option value="Banco Itaú">Banco Itaú</option>
                <option value="Banco Ciudad">Banco Ciudad</option>
                <option value="Banco Credicoop">Banco Credicoop</option>
                <option value="Banco Comafi">Banco Comafi</option>
                <option value="Banco Columbia">Banco Columbia</option>
                <option value="Banco Industrial">Banco Industrial</option>
                <option value="Banco Hipotecario">Banco Hipotecario</option>
                <option value="Banco Municipal de Rosario">Banco Municipal de Rosario</option>
                <option value="Banco de La Pampa">Banco de La Pampa</option>
                <option value="Banco de Corrientes">Banco de Corrientes</option>
                <option value="Banco de San Juan">Banco de San Juan</option>
                <option value="Banco de Santa Fe">Banco de Santa Fe</option>
                <option value="Banco de Entre Ríos">Banco de Entre Ríos</option>
                <option value="Banco de Formosa">Banco de Formosa</option>
                <option value="Banco de Santiago del Estero">Banco de Santiago del Estero</option>
                <option value="Banco del Chubut">Banco del Chubut</option>
                <option value="Banco del Sol">Banco del Sol</option>
                <option value="Banco Roela">Banco Roela</option>
                <option value="Banco Saenz">Banco Saenz</option>
                <option value="Banco Bica">Banco Bica</option>
                <option value="Otro">Otro</option>
              </select>
              <input
                className="border border-gray-300 rounded-lg px-4 py-2 mt-2"
                type="text"
                name="cbu"
                placeholder="CBU (22 dígitos)"
                value={form.cbu}
                onChange={handleChange}
                required
                maxLength={22}
              />
              <input
                className="border border-gray-300 rounded-lg px-4 py-2 mt-2"
                type="text"
                name="alias"
                placeholder="Alias bancario (opcional)"
                value={form.alias}
                onChange={handleChange}
                maxLength={20}
              />
              <span className="text-xs text-gray-500 block mt-1 mb-2">El CBU y Alias serán utilizados para transferirte el pago por tus viajes.</span>

              <label className="block font-semibold text-gray-700 mt-4 mb-1">¿En qué provincias podés realizar entregas?</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-64 overflow-y-auto border border-gray-200 rounded-lg p-2 bg-gray-50">
                {provinciasArgentinas.map((prov, idx) => (
                  <label key={prov} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={prov}
                      checked={form.provinciasEntrega.includes(prov)}
                      onChange={e => {
                        if (e.target.checked) {
                          setForm({ ...form, provinciasEntrega: [...form.provinciasEntrega, prov] });
                        } else {
                          setForm({ ...form, provinciasEntrega: form.provinciasEntrega.filter(p => p !== prov) });
                        }
                      }}
                      className="accent-orange-500 h-4 w-4"
                    />
                    <span className="text-sm text-gray-700">{prov}</span>
                  </label>
                ))}
              </div>
              <span className="text-xs text-gray-500 block mt-1">Seleccioná todas las provincias donde tengas disponibilidad para entregar.</span>
              <span className="text-xs text-gray-500">Podés seleccionar una o varias provincias manteniendo presionada la tecla Ctrl (Windows) o Cmd (Mac).</span>
            </>
          )}
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
           <div className="flex gap-2 mt-4 justify-center">
             {step > 1 && (
               <button type="button" onClick={prevStep} className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold">Anterior</button>
             )}
             {step < 4 && (
               <button type="button" onClick={nextStep} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold">Siguiente</button>
             )}
             {step === 4 && (
               <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold" disabled={loading}>
                 {loading ? "Guardando..." : "Guardar datos"}
               </button>
             )}
           </div>
        </form>
        <p className="text-xs text-gray-400 mt-4 text-center">Tus datos serán protegidos y solo usados para la plataforma.</p>
          </>
        )}
      </div>
    </div>
  );
}
