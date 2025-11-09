import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const accentColor = "#8c6ec8";

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
        <div className="absolute inset-0 bg-black opacity-85"></div>
      </div>

      {/* --- HAUPTINHALT --- */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        
        {/* RIESIGE ÜBERSCHRIFT: Jetzt mit normaler Line-Height, damit Ä passt */}
        <h1
          // 'leading-normal' oder gar nichts statt 'leading-none' gibt dem Ä Platz
          className="text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] xl:text-[13rem] font-extrabold tracking-tighter leading-tight pb-4 text-transparent bg-clip-text whitespace-nowrap" 
          style={{ 
             backgroundImage: 'linear-gradient(to bottom right, #fff, #8c6ec8)',
             filter: 'drop-shadow(0 0 25px rgba(140, 110, 200, 0.5))'
             // lineHeight hier entfernt, wir verlassen uns auf Tailwind 'leading-tight' + 'pb-4'
          }}
        >
          QUALITÄT &gt; QUANTITÄT
        </h1>

        {/* BESCHREIBUNGSTEXT */}
        <p className="max-w-[40rem] mt-8 mb-16 text-xl md:text-2xl text-gray-300 leading-relaxed">
          Die einzige Plattform, die Qualität über Quantität stellt. 
          Hier ist die wahre Statistik deiner letzten Niederlagen sicher.
        </p>

        {/* LOGIN BUTTON: Rechteckig, größer */}
        <Link href="/login" passHref legacyBehavior>
            <a className="group relative inline-flex items-center justify-center px-20 py-5 text-2xl font-bold rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
               style={{
                   color: '#fff',
                   backgroundColor: 'transparent',
                   border: `3px solid ${accentColor}`,
                   boxShadow: `0 0 25px ${accentColor}80, inset 0 0 10px ${accentColor}40`,
                   // 'rounded-lg' macht es rechteckig mit leicht abgerundeten Ecken. 
                   // Für KOMPLETT eckig nutze 'rounded-none' statt 'rounded-lg' im className oben.
               }}>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></span>
                <span className="relative z-10 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] tracking-wider">
                  LOGIN
                </span>
            </a>
        </Link>
      </div>
    </main>
  );
}