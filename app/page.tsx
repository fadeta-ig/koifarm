import Image from "next/image";
import Link from "next/link";

const WHATSAPP_NUMBER = "6281298765432";
const WHATSAPP_TEMPLATE =
  "Halo Asyifa Koi Farm, saya tertarik dengan koleksi koi premium. Mohon bantu rekomendasinya.";

const heroStats = [
  { label: "Koi Siap Kirim", value: "120+" },
  { label: "Bloodline Juara", value: "18" },
  { label: "Tingkat Survival", value: "99%" },
];

const varietyHighlights = [
  {
    name: "Kohaku",
    description: "Kontras merah-putih dengan grade show.",
    preset: "?variety=Kohaku&grade=Show",
  },
  {
    name: "Taisho Sanke",
    description: "Motif tiga warna dengan sumi teratur.",
    preset: "?variety=Taisho%20Sanke&size_cm=45-60",
  },
  {
    name: "Showa Sanshoku",
    description: "Pattern dinamis untuk kontes.",
    preset: "?variety=Showa&grade=High",
  },
  {
    name: "Tancho",
    description: "Mahkota merah solid, simbol keberuntungan.",
    preset: "?variety=Tancho&availability=Ready",
  },
];

const farmAdvantages = [
  {
    title: "Water Quality Monitoring",
    description:
      "Parameter kolam dipantau IoT, pH stabil 7.2–7.4 dengan pergantian air harian 5%.",
  },
  {
    title: "Karantina & Health Check",
    description:
      "Setiap koi melewati 21 hari karantina, dilengkapi laporan kesehatan dan scraping mikroskopis.",
  },
  {
    title: "Bloodline Tersertifikasi",
    description:
      "Kemitraan breeder Jepang ternama memastikan kualitas genetik dan sertifikat resmi.",
  },
  {
    title: "Pendampingan After Sales",
    description:
      "Tim ahli siap memandu adaptasi kolam dan nutrisi pakan untuk menjaga performa warna.",
  },
];

const purchaseSteps = [
  {
    title: "Jelajahi & Filter",
    detail: "Gunakan filter varietas, grade, dan ukuran untuk menemukan kandidat terbaik.",
  },
  {
    title: "Konsultasi Cepat",
    detail:
      "Klik WhatsApp dengan template otomatis, sertakan minat Anda dan dapatkan kurasi personal.",
  },
  {
    title: "Reservasi Aman",
    detail:
      "Kami tandai koi sebagai Reserved setelah DP diterima. Update status realtime di katalog.",
  },
  {
    title: "Pengiriman Terkontrol",
    detail:
      "Packing oksigen 3 lapis, suhu dijaga 24 °C, update lokasi hingga tiba di kolam Anda.",
  },
];

const testimonials = [
  {
    name: "Hendra S.",
    title: "Juara Koi Show Surabaya 2024",
    message:
      "Varietas Showa dari Asyifa Koi Farm tampil maksimal di kontes. Tim memberi panduan grooming yang detail.",
  },
  {
    name: "Maya & Riko",
    title: "Collector Jakarta",
    message:
      "Suka sekali dengan transparansi data kesehatan dan update video rutin sebelum pengiriman.",
  },
];

const galleryItems = [
  { title: "Tosai Kohaku 32cm", tag: "Ready", accent: "from-orange-400 to-red-500" },
  { title: "Nisai Showa 58cm", tag: "Reserved", accent: "from-blue-400 to-cyan-500" },
  { title: "Tancho 45cm", tag: "Ready", accent: "from-rose-400 to-amber-500" },
  { title: "Shiro Utsuri 63cm", tag: "Sold", accent: "from-slate-500 to-slate-800" },
];

const visitInfo = {
  address: "Jl. Raya Parung KM 24, Bogor, Jawa Barat",
  schedule: "Kunjungan by appointment, Senin–Sabtu 09.00–16.00 WIB",
  mapUrl: "https://maps.google.com/?q=Asyifa+Koi+Farm",
};

function encodeWhatsAppMessage(message: string) {
  return encodeURIComponent(message);
}

function buildWhatsAppLink(template: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeWhatsAppMessage(template)}`;
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="mx-auto flex max-w-3xl flex-col gap-2 text-center">
      <span className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-500">
        {eyebrow}
      </span>
      <h2 className="text-balance text-3xl font-semibold text-slate-900 sm:text-4xl">
        {title}
      </h2>
      <p className="text-base text-slate-600 sm:text-lg">{description}</p>
    </header>
  );
}

function WhatsAppButton({ label, variant = "primary" }: { label: string; variant?: "primary" | "secondary" }) {
  const baseStyle =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-[transform,box-shadow] motion-safe:hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500";
  const variants = {
    primary:
      "bg-orange-500 text-white shadow-[0_18px_45px_-18px_rgba(234,88,12,0.65)] hover:shadow-[0_22px_55px_-18px_rgba(234,88,12,0.75)]",
    secondary:
      "bg-white text-orange-600 ring-1 ring-orange-200 hover:ring-orange-300",
  } as const;

  return (
    <Link
      href={buildWhatsAppLink(WHATSAPP_TEMPLATE)}
      className={`${baseStyle} ${variants[variant]}`}
      aria-label="Hubungi Asyifa Koi Farm via WhatsApp"
    >
      <span aria-hidden>💬</span>
      {label}
    </Link>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl border border-orange-100 bg-white px-6 py-12 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.2)] sm:px-12 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:items-center lg:gap-16">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Asyifa Koi Farm
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Koi premium siap kirim dengan pendampingan ahli end-to-end
          </h1>
          <p className="max-w-xl text-lg text-slate-600">
            Temukan koi unggulan dari bloodline juara, lengkap dengan data kesehatan, video berenang, dan template konsultasi WhatsApp instan.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <WhatsAppButton label="Konsultasi via WhatsApp" />
          <Link
            href="/katalog"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-orange-200 hover:text-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            Jelajah katalog
            <span aria-hidden>→</span>
          </Link>
        </div>
        <dl className="grid grid-cols-1 gap-4 text-sm text-slate-600 sm:grid-cols-3">
          {heroStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {stat.label}
              </dt>
              <dd className="text-2xl font-semibold text-slate-900">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="mt-12 lg:mt-0">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-900/5">
          <Image
            src="/images/hero-koi.svg"
            alt="Ilustrasi dua ikan koi berenang di kolam"
            fill
            priority
            sizes="(min-width: 1024px) 400px, 100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-4 text-xs text-slate-500">
          Preferensi motion diikuti — animasi lembut hanya aktif bila diizinkan.
        </p>
      </div>
    </section>
  );
}

function FeaturedVarietiesSection() {
  return (
    <section className="flex flex-col gap-10 rounded-3xl border border-slate-100 bg-white p-8">
      <SectionHeading
        eyebrow="Varietas Unggulan"
        title="Filter cepat untuk varietas favorit"
        description="Mulai dari Kohaku klasik hingga Tancho yang elegan, pilih preset filter dan lanjutkan eksplorasi detail di katalog."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {varietyHighlights.map((variety) => (
          <Link
            key={variety.name}
            href={`/katalog${variety.preset}`}
            className="group flex flex-col gap-3 rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50/50 p-6 text-left transition hover:border-orange-200 hover:shadow-[0_25px_60px_-40px_rgba(15,23,42,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-slate-900">{variety.name}</h3>
              <span aria-hidden className="text-lg text-orange-500 transition-transform group-hover:translate-x-1">
                →
              </span>
            </div>
            <p className="text-sm text-slate-600">{variety.description}</p>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
              Terapkan filter
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function AdvantagesSection() {
  return (
    <section className="flex flex-col gap-10 rounded-3xl border border-slate-100 bg-white p-8">
      <SectionHeading
        eyebrow="Keunggulan Farm"
        title="Proses terstandar untuk koi sehat dan stabil"
        description="Kami menggabungkan monitoring digital, tim kesehatan ikan, dan pendampingan after sales agar koi adaptif di kolam Anda."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {farmAdvantages.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-slate-100 bg-slate-50/70 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
          >
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-sm text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="flex flex-col gap-10 rounded-3xl border border-slate-100 bg-white p-8">
      <SectionHeading
        eyebrow="Cara Beli"
        title="Pengalaman reservasi koi yang ringkas"
        description="Ikuti empat langkah sederhana untuk memastikan koi pilihan Anda aman sampai kolam."
      />
      <ol className="grid gap-6 md:grid-cols-2">
        {purchaseSteps.map((step, index) => (
          <li
            key={step.title}
            className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50/60 p-6"
          >
            <span className="h-10 w-10 rounded-full bg-orange-500/10 text-center text-sm font-semibold leading-10 text-orange-500">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
            <p className="text-sm text-slate-600">{step.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="flex flex-col gap-10 rounded-3xl border border-slate-100 bg-white p-8">
      <SectionHeading
        eyebrow="Testimoni"
        title="Dipercaya kolektor dan juara kontes"
        description="Suara langsung dari pelanggan mengenai kualitas koi dan layanan pendampingan kami."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="flex h-full flex-col justify-between gap-4 rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50/60 p-6"
          >
            <blockquote className="text-sm text-slate-600">“{testimonial.message}”</blockquote>
            <figcaption className="text-sm font-semibold text-slate-900">
              {testimonial.name}
              <span className="block text-xs font-normal text-slate-500">
                {testimonial.title}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="flex flex-col gap-10 rounded-3xl border border-slate-100 bg-white p-8">
      <SectionHeading
        eyebrow="Galeri Kolam"
        title="Cuplikan video & foto terbaru"
        description="Lihat variasi warna dan kondisi koi langsung dari kolam display kami."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {galleryItems.map((item) => (
          <article
            key={item.title}
            className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${item.accent} p-6 text-white shadow-[0_30px_70px_-45px_rgba(15,23,42,0.65)]`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_60%)] transition-opacity group-hover:opacity-70" aria-hidden />
            <div className="relative flex h-full flex-col justify-between gap-8">
              <span className="self-start rounded-full bg-white/25 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90">
                {item.tag}
              </span>
              <h3 className="text-lg font-semibold drop-shadow-sm">{item.title}</h3>
              <p className="text-xs text-white/80">
                Video 30 detik tersedia di halaman detail produk.
              </p>
            </div>
          </article>
        ))}
      </div>
      <p className="text-center text-xs text-slate-500">
        Permintaan akses video resolusi penuh tersedia untuk pelanggan terverifikasi.
      </p>
    </section>
  );
}

function VisitSection() {
  return (
    <section className="flex flex-col gap-10 rounded-3xl border border-slate-100 bg-white p-8">
      <SectionHeading
        eyebrow="Kunjungi Farm"
        title="Rasakan pengalaman memilih koi langsung"
        description="Jadwalkan kunjungan ke farm untuk melihat proses grooming dan kualitas air kolam."
      />
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)] lg:items-center">
        <div className="space-y-4 text-sm text-slate-600">
          <p>
            <strong className="text-slate-900">Alamat:</strong> {visitInfo.address}
          </p>
          <p>
            <strong className="text-slate-900">Jadwal:</strong> {visitInfo.schedule}
          </p>
          <p>
            Kami membatasi maksimal 3 sesi per hari untuk menjaga kenyamanan koi. Silakan isi template kunjungan saat menghubungi kami.
          </p>
          <WhatsAppButton label="Atur jadwal kunjungan" variant="secondary" />
        </div>
        <Link
          href={visitInfo.mapUrl}
          rel="noopener noreferrer"
          target="_blank"
          className="relative isolate flex aspect-[4/5] items-end overflow-hidden rounded-3xl border border-slate-100 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.5),transparent_60%)] p-6 text-left transition hover:border-orange-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(234,88,12,0.35),rgba(14,116,144,0.35))] opacity-70" aria-hidden />
          <div className="relative text-white">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">Open Map</p>
            <p className="mt-2 text-lg font-semibold">Google Maps</p>
            <p className="text-xs text-white/80">Lihat rute tercepat ke Asyifa Koi Farm</p>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-4 py-12 sm:px-8 lg:px-12">
      <HeroSection />
      <FeaturedVarietiesSection />
      <AdvantagesSection />
      <ProcessSection />
      <TestimonialsSection />
      <GallerySection />
      <VisitSection />
      <footer className="rounded-3xl border border-slate-100 bg-white px-6 py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Asyifa Koi Farm. Data produk diperbarui setiap 6 jam. Klik WhatsApp untuk konsultasi langsung.
      </footer>
    </main>
  );
}
