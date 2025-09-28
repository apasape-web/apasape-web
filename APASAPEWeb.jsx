import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="text-center py-16">
      <motion.img
        src="/LOGO APASAPE-.png"
        alt="Logo APASAPE"
        className="mx-auto mb-6 w-40 h-40 rounded-full bg-white p-2 shadow-md"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      <h1 className="text-4xl font-bold text-green-800 uppercase">
        Asociación de Productores Agrícolas de Sabalito
      </h1>
      <p className="italic mt-4 text-lg">“Sembrando futuro, cultivando bienestar”</p>
      <div className="max-w-3xl mx-auto mt-8 text-left px-4">
        <p>
          Bienvenidos a la página institucional de APASAPE. Somos una asociación sin ánimo de lucro dedicada
          a apoyar a pequeños productores en la producción y comercialización de plátano, maíz, yuca, ñame y
          actividades piscícolas. Nuestra misión es impulsar el desarrollo sostenible y el bienestar de las comunidades rurales.
        </p>
      </div>
    </div>
  );
}

function QuienesSomos() {
  return (
    <section className="max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-green-800 mb-4">Quiénes Somos</h2>
      <p>
        La Asociación de Productores Agrícolas de Sabalito del Municipio de Puerto Escondido (APASAPE)
        es una organización sin ánimo de lucro que agrupa a pequeños productores agrícolas dedicados al
        cultivo de maíz, yuca, ñame, plátano y piscicultura. Promovemos la producción sostenible y el
        bienestar de nuestras comunidades rurales en Córdoba.
      </p>
      <h3 className="mt-6 font-semibold">Objeto social</h3>
      <p>
        Promover, agremiar y representar a los productores agrícolas asociados, impulsando la comercialización,
        capacitación, acceso a insumos y la adopción de prácticas sostenibles, de acuerdo con el certificado
        de existencia y representación legal inscrito en la Cámara de Comercio de Montería.
      </p>
    </section>
  );
}

function MisionVision() {
  return (
    <section className="max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-green-800 mb-4">Misión</h2>
      <p className="mb-8">
        Promover y fortalecer el desarrollo agropecuario de nuestros asociados mediante la producción,
        transformación y comercialización sostenible de productos agrícolas y piscícolas.
      </p>
      <h2 className="text-3xl font-bold text-green-800 mb-4">Visión</h2>
      <p>
        Ser en el año 2030 una asociación reconocida a nivel regional y nacional como ejemplo de unidad
        campesina, innovación agrícola y sostenibilidad, contribuyendo al desarrollo económico y social
        de Puerto Escondido y Córdoba.
      </p>
    </section>
  );
}

function Valores() {
  const lista = [
    { titulo: "Solidaridad", desc: "El progreso es colectivo, no individual." },
    { titulo: "Trabajo en equipo", desc: "Cada productor es parte esencial de la asociación." },
    { titulo: "Transparencia", desc: "Confianza en cada gestión y decisión." },
    { titulo: "Innovación", desc: "Uso de tecnologías y prácticas sostenibles." },
    { titulo: "Respeto por la naturaleza", desc: "Compromiso con la agricultura limpia y sostenible." },
  ];

  return (
    <section className="max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-green-800 mb-6">Valores</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {lista.map((v, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-green-700 mb-2">{v.titulo}</h3>
            <p>{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Noticias() {
  // Ejemplos de noticias. En producción, se puede conectar a CMS o archivos JSON.
  const items = [
    { title: "Capacitación en Agricultura Orgánica", date: "2025-07-10", summary: "Formación para asociados sobre técnicas de manejo orgánico." },
    { title: "Alianza con entidad local", date: "2025-06-20", summary: "Convenio para acceso a insumos y mercados." }
  ];

  return (
    <section className="max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-green-800 mb-4">Noticias y Proyectos</h2>
      <div className="grid gap-6">
        {items.map((n, i) => (
          <article key={i} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-green-800">{n.title}</h3>
            <small className="text-gray-600">{n.date}</small>
            <p className="mt-2">{n.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Galeria() {
  // Imágenes de ejemplo; reemplaza por las tuyas en /public/imagenes/
  return (
    <section className="max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-green-800 mb-4">Galería</h2>
      <p className="mb-4">Imágenes de cosechas, reuniones y proyectos.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="h-40 bg-gray-200 rounded" />
        <div className="h-40 bg-gray-200 rounded" />
        <div className="h-40 bg-gray-200 rounded" />
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section className="bg-green-800 text-white py-12 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Contacto</h2>
      <p>📍 Corregimiento Morindo Las Mujeres, Vereda Sabalito Central, Puerto Escondido – Córdoba</p>
      <p>📧 <a href="mailto:wicovi2309@gmail.com" className="underline">wicovi2309@gmail.com</a></p>
      <p>📞 3106355571 – 3216185492</p>
      <div className="mt-6 max-w-md mx-auto text-left bg-white text-gray-800 p-4 rounded">
        <h3 className="font-semibold mb-2">Formulario de contacto (ejemplo)</h3>
        <form onSubmit={(e)=>{e.preventDefault(); alert('Formulario enviado (simulado)')}}>
          <input className="w-full p-2 mb-2 border rounded" placeholder="Nombre" required />
          <input className="w-full p-2 mb-2 border rounded" placeholder="Correo" type="email" required />
          <textarea className="w-full p-2 mb-2 border rounded" placeholder="Mensaje" rows="4" required />
          <button className="bg-green-700 text-white px-4 py-2 rounded">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default function APASAPEWeb() {
  return (
    <Router>
      <div className="font-sans bg-green-50 min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="bg-green-700 text-white py-4 shadow-md sticky top-0 z-50">
          <ul className="flex justify-center space-x-6">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/quienes">Quiénes Somos</Link></li>
            <li><Link to="/mision-vision">Misión y Visión</Link></li>
            <li><Link to="/valores">Valores</Link></li>
            <li><Link to="/noticias">Noticias</Link></li>
            <li><Link to="/galeria">Galería</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes" element={<QuienesSomos />} />
            <Route path="/mision-vision" element={<MisionVision />} />
            <Route path="/valores" element={<Valores />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-green-900 text-white py-6 text-center mt-8">
          <p>
            © 2025 APASAPE - Asociación de Productores Agrícolas de Sabalito. NIT 901035460-4. Todos los derechos reservados.
          </p>
        </footer>
      </div>
    </Router>
  );
}
