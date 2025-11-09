import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const accentColor = "#8c6ec8"; // Dein Lila Farbton

  return (
    <main className={`flex min-h-screen flex-col items-center justify-center w-full text-white overflow-hidden relative ${inter.className}`} style={{ backgroundColor: '#0a0015' }}>
      
      {/* --- HINTERGRUND VIDEO --- */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="object-cover w-full h-full opacity-30" 
          src="/glitch.mp4" 
        />
        {/* Dunkles Overlay über dem Video für besseren Kontrast */}
        <div className="absolute inset-0 bg-black opacity-85"></div>
      </div>

      {/* --- HAUPTINHALT --- */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        
        {/* RIESIGE ÜBERSCHRIFT: Line-Height angepasst, damit Ä nicht abgeschnitten wird */}
        <h1
          className="text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] xl:text-[13rem] font-extrabold tracking-tighter text-transparent bg-clip-text whitespace-nowrap" 
          style={{ 
             backgroundImage: 'linear-gradient(to bottom right, #fff, #8c6ec8)',
             filter: 'drop-shadow(0 0 25px rgba(140, 110, 200, 0.5))',
             lineHeight: '0.9' // Etwas mehr Platz nach oben/unten für Akzente wie Ä
          }}
        >
          QUALITÄT &gt; QUANTITÄT
        </h1>

        {/* BESCHREIBUNGSTEXT */}
        <p className="max-w-[40rem] mt-8 md:mt-12 mb-12 md:mb-16 text-xl md:text-2xl text-gray-300 leading-relaxed">
          Die einzige Plattform, die Qualität über Quantität stellt. 
          Hier ist die wahre Statistik deiner letzten Niederlagen sicher.
        </p>

        {/* LOGIN BUTTON: Komplett überarbeitet für besseres Aussehen */}
        <Link href="/login" passHref legacyBehavior>
            <a className="group relative inline-flex items-center justify-center px-12 py-4 md:px-16 md:py-6 text-xl md:text-2xl font-bold rounded-full overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
               style={{
                   color: '#fff',
                   backgroundColor: 'transparent', // Kein direkter Hintergrund
                   border: `3px solid ${accentColor}`, // Leuchtender Rand
                   boxShadow: `0 0 25px ${accentColor}80, inset 0 0 10px ${accentColor}40` // Mehrschichtiger Glow
               }}>
                {/* Inneres Glühen bei Hover (simuliert Lichteffekt) */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></span>
                {/* Text mit eigenem Shadow für mehr Tiefe */}
                <span className="relative z-10 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
                  Login
                </span>
                {/* Kleine Glanz-Animation bei Hover */}
                <span className="absolute w-0 h-0.5 bg-white opacity-0 transition-all duration-500 ease-out group-hover:w-full group-hover:opacity-100 top-1/2 left-0 -translate-y-1/2 transform rotate-6 scale-x-0 group-hover:scale-x-100"></span>
            </a>
        </Link>
      </div>
    </main>
  );
}