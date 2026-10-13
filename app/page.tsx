import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { connection } from "next/server";
import CopyEmailButton from "./components/CopyEmailButton";

async function CurrentYear() {
  await connection();
  return <>{new Date().getFullYear()}</>;
}

export default function Home() {
  const whatsappUrl =
    "https://wa.me/6281291807225?text=Halo%20Suara%20Nova,%20saya%20ingin%20berkonsultasi%20atau%20berkolaborasi.";
  const emailUrl =
    "mailto:novaliacitra675@gmail.com?subject=Inquiry%20Suara%20Nova&body=Halo%20Suara%20Nova,%0A%0ASaya%20tertarik%20dengan%20layanan/kolaborasi...";

  return (
    <main className="min-h-screen bg-[#FDFEFE] text-slate-800 antialiased relative overflow-x-hidden">
      {/* ========================================================= */}
      {/* FLOATING WHATSAPP BUBBLE (Bottom Right)                   */}
      {/* ========================================================= */}
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp Suara Nova"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1fa951] text-white px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group text-xs sm:text-sm"
      >
        {/* WhatsApp SVG Icon */}
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 fill-current transition-transform group-hover:rotate-6 flex-shrink-0"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.507 14.307l-.009.075c-.244-.122-1.442-.712-1.666-.793-.223-.082-.386-.122-.549.122-.162.245-.631.794-.773.957-.143.163-.285.184-.529.061-.244-.122-1.03-.38-1.963-1.212-.724-.647-1.214-1.447-1.356-1.691-.143-.245-.015-.377.107-.499.11-.11.245-.285.367-.428.122-.143.163-.245.245-.408.082-.163.041-.306-.02-.428-.062-.122-.549-1.326-.753-1.816-.198-.478-.4-.413-.549-.42-.142-.008-.305-.01-.468-.01s-.428.061-.652.306c-.224.245-.856.836-.856 2.039s.876 2.366.998 2.529c.122.163 1.724 2.632 4.177 3.69.583.252 1.038.403 1.393.516.586.186 1.12.16 1.542.097.471-.07 1.442-.59 1.645-1.162.204-.571.204-1.06.143-1.162-.062-.102-.224-.163-.468-.285zM12.02 2C6.497 2 2.02 6.478 2.02 12c0 1.986.58 3.834 1.583 5.397L2 22l4.745-1.545A9.945 9.945 0 0012.02 22c5.523 0 10-4.478 10-10s-4.477-10-10-10z" />
        </svg>

        <span className="font-semibold tracking-wide">
          Konsultasi Sekarang
        </span>

        {/* Pulsing indicator */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
      </Link>

      {/* 1. Header / Navbar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <Image
              src="/images/logo.png"
              alt="Logo Suara Nova"
              width={44}
              height={44}
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover shadow-sm border border-slate-200/80 flex-shrink-0"
            />
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-nova-navy">
                Suara<span className="text-nova-teal">Nova</span>
              </span>
              <p className="text-xs text-slate-500 hidden sm:block">
                Media Konseling & Dukungan Psikologis
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-nova-teal hover:bg-nova-navy transition rounded-full shadow-sm whitespace-nowrap"
            >
              Hubungi via WhatsApp
            </Link>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-12 sm:pb-16 text-center">
        <span className="inline-block px-3.5 py-1.5 mb-5 text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-nova-peach/20 text-nova-navy rounded-full border border-nova-peach/50">
          Ruang Aman untuk Didengar & Bertumbuh
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-nova-navy tracking-tight leading-tight mb-5 sm:mb-6">
          Setiap Suara Layak Didengar. <br className="hidden sm:inline" />
          <span className="text-nova-teal">Setiap Cerita Layak Dipahami.</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Suara Nova hadir sebagai jembatan empati untuk kesehatan mental
          generasi muda. Kami siap menemani setiap langkah pemulihan Anda.
        </p>

        {/* Hero Quick CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none mx-auto">
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto justify-center px-6 sm:px-7 py-3.5 bg-nova-navy hover:bg-nova-teal text-white font-medium rounded-xl shadow-md transition flex items-center gap-2"
          >
            <span>💬 Chat Konselor (WhatsApp)</span>
          </Link>
          <CopyEmailButton />
        </div>

        {/* Hero Brand Banner Showcase */}
        <div className="mt-10 sm:mt-14 max-w-2xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-white">
          <Image
            src="/images/banner.png"
            alt="Suara Nova — Dengarkan. Pahami. Dukung. Tumbuhkan."
            width={900}
            height={560}
            priority
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* 3. Empat Pilar Pendekatan */}
      <section className="bg-slate-50/70 py-14 sm:py-20 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-nova-navy">
              Pendekatan Empat Pilar
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Alur pendampingan yang kami bawa dari mendengar hingga bertumbuh.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                step: "01",
                title: "Dengarkan",
                desc: "Memberi ruang aman untuk bercerita tanpa rasa takut dihakimi.",
                accent: "border-nova-navy",
              },
              {
                step: "02",
                title: "Pahami",
                desc: "Asesmen kebutuhan dan edukasi psikologis secara utuh.",
                accent: "border-nova-teal",
              },
              {
                step: "03",
                title: "Dukung",
                desc: "Pendampingan hangat bersama konselor dan komunitas sebaya.",
                accent: "border-nova-koral",
              },
              {
                step: "04",
                title: "Tumbuhkan",
                desc: "Workshop pengembangan diri, daya lenting, dan harapan baru.",
                accent: "border-nova-mint",
              },
            ].map((pilar) => (
              <div
                key={pilar.step}
                className={`bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl border-t-4 ${pilar.accent} shadow-sm flex flex-col justify-between`}
              >
                <div>
                  <span className="text-xs font-bold text-slate-400">
                    Pilar {pilar.step}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-nova-navy mt-1 mb-2">
                    {pilar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pilar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. Profil Praktisi (With Next.js <Image />)               */}
      {/* ========================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-6 sm:space-y-10">
        <div className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-12 shadow-sm flex flex-col md:flex-row items-center text-center md:text-left gap-6 sm:gap-8">
          <Image
            src="/practitioner.png"
            alt="Novalia Citra, S.Pd"
            width={176}
            height={176}
            priority
            className="w-32 h-32 sm:w-44 sm:h-44 rounded-2xl object-cover shadow-md border-2 border-slate-100 flex-shrink-0"
          />
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-nova-koral">
              Praktisi Kesehatan Mental
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-nova-navy mt-1">
              Novalia Citra, S.Pd
            </h3>
            <p className="text-xs text-slate-500 mb-3 sm:mb-4">
              Latar pendidikan: S.Pd | Sedang menempuh Psikologi S2
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Berfokus pada pendampingan generasi muda melalui konseling,
              edukasi, dan kegiatan akademik, serta pernah menjadi narasumber di
              Universitas Pembangunan Nasional Veteran Jakarta.
            </p>
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs sm:text-sm font-semibold text-nova-teal hover:text-nova-navy transition"
            >
              Jadwalkan Konsultasi →
            </Link>
          </div>
        </div>

        {/* Dokumentasi Kegiatan / Kuliah Tamu */}
        <figure className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
          <div className="relative">
            <Image
              src="/images/upn-activity.png"
              alt="Sesi foto bersama peserta dan narasumber di Fakultas Ilmu Sosial dan Ilmu Politik UPN Veteran Jakarta"
              width={1200}
              height={675}
              className="w-full h-auto object-cover"
            />
            <span className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs font-semibold tracking-wide bg-nova-navy/85 text-white backdrop-blur-sm rounded-full shadow-sm">
              Dokumentasi Kegiatan & Kuliah Tamu
            </span>
          </div>
          <figcaption className="px-4 sm:px-6 py-3.5 sm:py-4 bg-slate-50/80 border-t border-slate-100 text-xs sm:text-sm text-slate-600 text-center font-medium">
            Sesi foto bersama peserta dan narasumber di Fakultas Ilmu Sosial dan
            Ilmu Politik UPN Veteran Jakarta
          </figcaption>
        </figure>
      </section>

      {/* 5. Contact Section / Final CTA */}
      <section className="bg-nova-navy text-white py-14 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="/images/logo.png"
            alt="Logo Suara Nova"
            width={64}
            height={64}
            className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-5 rounded-full object-cover shadow-md border-2 border-white/20"
          />
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 sm:mb-4">
            Mari Bersuara Bersama
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-6 sm:mb-8 text-xs sm:text-sm md:text-base">
            Kami terbuka untuk kolaborasi dengan kampus, sekolah, komunitas,
            maupun sesi konseling privat.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none mx-auto">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center px-6 py-3 bg-nova-mint hover:bg-nova-teal text-nova-navy hover:text-white font-semibold rounded-xl transition flex items-center"
            >
              WhatsApp: 081291807225
            </Link>
            <CopyEmailButton variant="footer" />
          </div>

          <div className="mt-10 sm:mt-12 pt-6 border-t border-white/10 text-xs text-slate-400">
            ©{" "}
            <Suspense fallback={<span className="inline-block w-7" />}>
              <CurrentYear />
            </Suspense>{" "}
            Suara Nova. Tagline: Suara Anda, Perubahan Kita.
          </div>
        </div>
      </section>
    </main>
  );
}
