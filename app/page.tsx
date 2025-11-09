import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const accentColor = "#8c6ec8";

  return (
    // 'overflow-hidden' verhindert Scrollbalken durch das Video
    <main className={`flex min-h-screen flex-col items-center justify-center w-full text-white overflow-hidden relative ${inter.className}`} style={{ backgroundColor: '#0a0015' }}>
      
      {/* --- HINTERGRUND VIDEO BEREICH --- */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
         {/* Das Video läuft im Hintergrund über den ganzen Screen */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="object-cover w-full h-full opacity-30" // Opacity steuert wie stark das Video zu sehen ist
          src="/glitch.mp4" 
        />
        {/* Ein Overlay, damit der Text besser lesbar bleibt */}
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>

      {/* --- HAUPTINHALT (liegt über dem Video dank z-10) --- */}
      <div className="relative z-10 flex flex-col items-center px-4">
        
        {/* 1. ÜBERSCHRIFT: Viel größer und enger zusammen (leading-none) */}
        {/* lg:text-[10rem] ist ein manueller Wert für riesigen Text auf großen Screens */}
        <h1
          className="text-7xl md:text-9xl lg:text-[11rem] font-extrabold tracking-tighter leading-none text-center text-transparent bg-clip-text" 
          style={{ 
             backgroundImage: 'linear-gradient(to bottom right, #8c6ec8, #fff, #8c6ec8)',
             filter: 'drop-shadow(0 0 20px rgba(140, 110, 200, 0.4))'
          }}
        >
          QUALITÄT &gt;<br /> QUANTITÄT
        </h1>

        {/* 2. BESCHREIBUNG: Schmaler (max-w-md) damit es mehr Zeilen werden */}
        <p className="max-w-md text-center mt-12 mb-16 text-xl text-gray-300 leading-relaxed">
          Die einzige Plattform, die wirklich versteht, dass Qualität &gt; Quantität steht.
          <br className="hidden md:block" /> {/* Optionaler Zeilenumbruch für mittlere Screens */}
          Der Ort, an dem die wahre Statistik über die letzten Niederlagen sicher verwahrt ist.
        </p>

        {/* 3. LOGIN BUTTON */}
        <Link href="/login" passHref legacyBehavior>
            <a className="group relative px-14 py-5 font-bold text-2xl rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
               style={{
                   color: '#fff',
                   border: `3px solid ${accentColor}`,
                   boxShadow: `0 0 20px ${accentColor}40` // 40 am Ende ist für Transparenz
               }}>
                {/* Button Hintergrund-Animation */}
                <div className="absolute inset-0 w-full h-full bg-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <span className="relative z-10 drop-shadow-[0_0_10px_rgba(140,110,200,0.8)]">
                  Login
                </span>
            </a>
        </Link>
      </div>
    </main>
  );
}