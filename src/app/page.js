"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";
export default function Home() {

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="bg-black min-h-screen text-white">
      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-20 py-6 backdrop-blur-md bg-black/20 border-b border-white/10">

  <div className="flex justify-between items-center">

    {/* Logo */}
    <h1
     className="text-lg md:text-2xl font-semibold tracking-[3px]">
      COFFEE PARTY
    </h1>

    {/* Links */}
    <div
    data-aos="fade-up"data-aos-delay="200"
     className="hidden md:flex gap-10 text-sm tracking-[2px] text-gray-300">

      <a
        href="#inicio"
        className="hover:text-white transition"
      >
        Inicio
      </a>

      <a
        href="#galeria"
        className="hover:text-white transition"
      >
        Galería
      </a>

      <a
        href="#video"
        className="hover:text-white transition"
      >
        Video
      </a>

      <a
        href="#descargas"
        className="hover:text-white transition"
      >
        Descargas
      </a>

    </div>

  </div>

</nav>

      <section
      id="inicio"
        className="relative h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      >

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Contenido */}
        <div className="relative z-10">

          <p
          data-aos="fade-up"
          data-aos-delay="300"
           className="text-sm tracking-[6px] text-gray-300 mb-6">
            EVENT GALLERY
          </p>

          <h1
          data-aos="fade-up"
          data-aos-delay="100"
           className="text-5xl md:text-7xl font-bold mb-6">
            Coffee Party 2026
          </h1>

          <p 
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-gray-200 max-w-2xl text-lg leading-relaxed mb-10">
            Cultura cafetera, música en vivo, coctelería y talento barista
            reunidos en una experiencia única.
          </p>

          <a
  href="#galeria"
  className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-500"
>
  Explorar Galería
</a>

        </div>

      </section>
<section
  id="galeria"
  className="min-h-screen bg-black px-6 md:px-20 py-24"
>

  <div className="mb-20">

    <p 
    data-aos="fade-up"
    data-aos-delay="200"
    className="text-sm tracking-[5px] text-gray-500 mb-4">
      EXPERIENCE
    </p>

    <h2 
    data-aos="fade-up"
    data-aos-delay="300"
    className="text-4xl md:text-6xl font-bold mb-6">
      Degustación de Café
    </h2>

    <p 
    data-aos="fade-up"
    data-aos-delay="100"
    className="text-gray-400 max-w-3xl leading-relaxed text-lg">
      Cuatro estaciones especializadas ofrecieron experiencias únicas
      alrededor del café artesanal, permitiendo a los asistentes
      descubrir nuevos perfiles y métodos de preparación.
    </p>

  </div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

  {Array.from({ length: 7 }, (_, i) => (
    <div
      key={i}
      data-aos="fade-up"
      data-aos-delay={i * 100}
      className="overflow-hidden rounded-3xl"
    >
      <img
        src={`/images/cafe${i + 1}.JPG`}
        alt="Cafe"
        onClick={() =>
          setSelectedImage(`/images/cafe${i + 1}.jpg`)
        }
        loading="lazy"
        className="w-full h-auto object-cover rounded-2xl hover:scale-[1.02] transition duration-700 cursor-pointer"
      />
    </div>
  ))}

</div>
</section>
<section className="min-h-screen bg-black px-6 md:px-20 py-24">

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

    {/* Texto */}
    <div>
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-sm tracking-[5px] text-gray-500 mb-4">
        LIVE EXPERIENCE
      </p>

      <h2
        data-aos="fade-up"
        data-aos-delay="300"
        className="text-4xl md:text-6xl font-bold mb-6">
        Música en Vivo & Coctelería
      </h2>

      <p
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-gray-400 leading-relaxed text-lg mb-8">
        La experiencia continuó con música en vivo, cocteles cítricos
        y un ambiente diseñado para conectar alrededor del café,
        la creatividad y la celebración.
      </p>
    </div>

    {/* Imagen grande */}
    <div className="overflow-hidden rounded-3xl">
      <img
        src="/images/music1.jpg"
        alt="Music"
        onClick={() => setSelectedImage("/images/music1.jpg")}
        className="w-full h-auto object-cover rounded-2xl hover:scale-[1.03] transition duration-700 cursor-pointer"
      />
    </div>

  </div>

  {/* Grid secundario */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

    {Array.from({ length: 6 }, (_, i) => (
      <div key={i} className="overflow-hidden rounded-3xl">
        <img
          src={`/images/music${i + 2}.jpg`}
          alt="Music"
          onClick={() =>
            setSelectedImage(`/images/music${i + 2}.jpg`)
          }
          loading="lazy"
          className="w-full h-auto object-cover rounded-2xl hover:scale-[1.03] transition duration-700 cursor-pointer"
        />
      </div>
    ))}

  </div>

</section>
<section className="min-h-screen bg-black px-6 md:px-20 py-24">

  <div className="mb-20">

    <p 
    data-aos="fade-up"
    data-aos-delay="300"
    className="text-sm tracking-[5px] text-gray-500 mb-4">
      BARISTA COMPETITION
    </p>

    <h2 
    data-aos="fade-up"
    data-aos-delay="100"
    className="text-4xl md:text-6xl font-bold mb-6">
      Concurso de Baristas
    </h2>

    <p 
    data-aos="fade-up"
    data-aos-delay="200"
    className="text-gray-400 max-w-3xl leading-relaxed text-lg">
      Baristas de distintos restaurantes de la ciudad participaron
      en una competencia enfocada en técnica, creatividad y precisión
      en el arte latte.
    </p>

  </div>

  <div className="columns-1 md:columns-3 gap-6 space-y-6">

    {Array.from({ length: 23 }, (_, i) => (
      <div
        key={i}
        className="overflow-hidden rounded-3xl break-inside-avoid"
      >

        <img
          src={`/images/barista${i + 1}.jpg`}
          alt="Barista"
          onClick={() =>
            setSelectedImage(`/images/barista${i + 1}.jpg`)
          }
          className="w-full object-cover rounded-3xl hover:scale-[1.03] transition duration-700 cursor-pointer"
        />

      </div>
    ))}

  </div>

</section>
<section
  id="video"
  className="bg-gradient-to-b from-black via-[#0a0a0a] to-black"
>

  <div className="mb-16">

    <p 
    data-aos="fade-up"
    data-aos-delay="200"
    className="text-sm tracking-[5px] text-gray-500 mb-4">
      EVENT FILM
    </p>

    <h2
    data-aos="fade-up"
    data-aos-delay="300"
     className="text-4xl md:text-6xl font-bold mb-6">
      Coffee Party Recap
    </h2>

    <p 
    data-aos="fade-up"
    data-aos-delay="1009"
    className="text-gray-400 max-w-3xl leading-relaxed text-lg">
      Un resumen visual de los momentos más importantes del evento,
      capturando la energía, la música, la competencia y la experiencia
      alrededor de la cultura cafetera.
    </p>

  </div>

  <div className="flex justify-center">

  <video
  controls
  preload="metadata"
  className="w-full max-w-[450px] rounded-[40px] border border-white/10"
>

  <source
    src="/videos/coffee-video-fixed.mp4"
    type="video/mp4"
  />

</video>

</div>

</section>
{selectedImage && (
  <div
    className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 p-6"
    onClick={() => setSelectedImage(null)}
  >

    <img
      src={selectedImage}
      alt="Preview"
      className="max-w-full max-h-full rounded-2xl"
    />

  </div>
)}
<section
  id="descargas"
  className="bg-black px-6 md:px-20 py-32"
>

  <div className="border border-white/10 rounded-[40px] p-10 md:p-20 text-center bg-white/[0.03] backdrop-blur-sm">

    <p className="text-sm tracking-[5px] text-gray-500 mb-4">
      DOWNLOADS
    </p>

    <h2 className="text-4xl md:text-6xl font-bold mb-8">
      Fotografías Completas
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg mb-12">
      Accede a la galería completa del evento en alta resolución
      organizada por categorías y momentos principales.
    </p>

    <a
      href="https://drive.google.com/drive/folders/1mmYZjnOALY6yUBvaR0MosPLXyOlW01ut?usp=sharing"
      target="_blank"
      className="inline-block border border-white px-10 py-5 rounded-full hover:bg-white hover:text-black transition duration-500"
    >
      Descargar Fotografías
    </a>

  </div>

</section>
<footer className="relative border-t border-white/10 bg-black px-6 md:px-20 py-12">

  {/* Línea decorativa superior */}
  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

  <div className="flex flex-col md:flex-row justify-between items-center gap-8">

    {/* Marca */}
    <div className="text-center md:text-left">

      <h3 className="text-2xl md:text-3xl font-semibold tracking-[4px] mb-3">
        NEXA
      </h3>

      <p className="text-gray-500 text-sm tracking-[2px]">
        Visual Experiences
      </p>

    </div>

    {/* Separador */}
    <div className="hidden md:block w-[1px] h-16 bg-white/10" />

    {/* Info */}
    <div className="text-center md:text-right">

      <p className="text-gray-400 text-sm mb-2 tracking-[2px]">
        Coffee Party 2026
      </p>

      <p className="text-gray-500 text-sm mb-4">
        Photography & Visual Coverage
      </p>

      <a
        href="https://instagram.com/nexa_visuales"
        target="_blank"
        className="text-white text-sm tracking-[2px] hover:text-gray-300 transition"
      >
        @nexa_visuales
      </a>

    </div>

  </div>

  {/* Línea inferior */}
  <div className="mt-10 text-center text-gray-600 text-xs tracking-[2px]">
    © 2026 NEXA Visuales — All Rights Reserved
  </div>

</footer>
    </main>
  );
}