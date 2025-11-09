import { Inter } from 'next/font/google';
import Link from 'next/link';

// Inter Schriftart laden
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const accentColor = "#8c6ec8";

  return (
    // Hauptcontainer: Dunkler Hintergrund, fixiert auf Bildschirmhöhe, kein Scrollen durch übergroße Elemente
    <main className={`flex min-h-screen flex-col items-center justify-center w-full text-white overflow-hidden relative ${inter.className}`} style={{ backgroundColor: '#0a0015' }}>
      
      {/* --- HINTERGRUND VIDEO --- */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          // 'object-cover' sorgt dafür, dass das Video immer den ganzen Screen füllt ohne Verzerrung
          className="object-cover w-full h-full opacity-30" 
          src="/glitch.mp4" 
        />
        {/* Dunkles Overlay über dem Video für besseren Kontrast */}
        <div className="absolute inset-0 bg-black opacity-85"></div>
      </div>

      {/* --- HAUPTINHALT --- */}
      {/* z-10 hebt diesen Container über das Video */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        
        {/* RIESIGE ÜBERSCHRIFT */}
        <h1
          // Responsive Textgrößen: Klein auf Handy (text-5xl), riesig auf Desktop (xl:text-[13rem])
          // 'whitespace-nowrap' zwingt den Text in eine Zeile
          className="text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] xl:text-[13rem] font-extrabold tracking-tighter leading-none text-transparent bg-clip-text whitespace-nowrap" 
          style={{ 
             // Verlauf von Weiß zu deinem Lila
             backgroundImage: 'linear-gradient(to bottom right, #fff, #8c6ec8)',
             // Leuchtender Drop-Shadow Effekt
             filter: 'drop-shadow(0 0 25px rgba(140, 110, 200, 0.5))'
          }}
        >
          QUALITÄT &gt; QUANTITÄT
        </h1>

        {/* BESCHREIBUNGSTEXT */}
        {/* Kürzer und kompakter, max-w-[40rem] sorgt für den schönen Umbruch */}
        <p className="max-w-[40rem] mt-8 md:mt-12 mb-12 md:mb-16 text-xl md:text-2xl text-gray-300 leading-relaxed">
          Die einzige Plattform, die Qualität über Quantität stellt. 
          Hier ist die wahre Statistik deiner letzten Niederlagen sicher.
        </p>

        {/* LOGIN BUTTON */}
        <Link href="/login" passHref legacyBehavior>
            <a className="group relative px-12 py-4 md:px-16 md:py-6 font-bold text-xl md:text-2xl rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95"
               style={{
                   color: '#fff',
                   border: `3px solid ${accentColor}`,
                   // Glow-Effekt um den Button
                   boxShadow: `0 0 30px ${accentColor}50`
               }}>
                {/* Hover-Effekt Füllung */}
                <div className="absolute inset-0 w-full h-full bg-purple-600 opacity-0 group-hover:opacity-25 transition-opacity duration-500"></div>
                {/* Button Text */}
                <span className="relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
                  Login
                </span>
            </a>
        </Link>
      </div>
    </main>
  );
}