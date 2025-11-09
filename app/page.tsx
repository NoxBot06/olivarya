// page.tsx
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const accentColor = "#8c6ec8";

  return (
    <main className={`flex min-h-screen flex-col items-center justify-center w-full text-white overflow-hidden relative ${inter.className}`} style={{ backgroundColor: '#0a0015' }}> {/* Dunkler Hintergrund falls Video nicht lädt */}
      
      {/* Container für Video und Text */}
      <div className="relative flex flex-col items-center justify-center w-full">
        
        {/* Das Video - Absolut positioniert hinter dem Text */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute z-0 w-full max-w-none"
          style={{ 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            minWidth: '100%', 
            minHeight: '100%',
            objectFit: 'cover',
            opacity: 0.8 // Leicht transparent für besseren Effekt
          }}
          src="/glitch.mp4" 
        />

        {/* Dunkles Overlay über dem Video, damit nur der Text "leuchtet" */}
         <div className="absolute z-10 inset-0 bg-black opacity-90"></div>

        {/* Der Text Container - muss über dem Video und Overlay liegen (z-20) */}
        <div className="relative z-20 text-center p-8 mix-blend-screen"> 
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500" 
             // Alternativ für Video-Durchschein-Effekt (komplexer):
             // Wir nutzen hier erstmal einen Gradienten als Fallback, 
             // echte Video-Maskierung braucht SVG oder canvas für saubere Ergebnisse in allen Browsern.
             // Für den "Glitch" Effekt im Bild 1 ist ein animiertes GIF/Video als Hintergrund des Textes am besten.
             // Lass uns den einfachen Weg zuerst probieren:
            style={{ 
               backgroundImage: 'linear-gradient(45deg, #8c6ec8, #fff)',
               WebkitBackgroundClip: 'text',
               WebkitTextFillColor: 'transparent',
               filter: 'drop-shadow(0 0 15px rgba(140, 110, 200, 0.8))'
            }}
          >
            QUALITÄT &gt; QUANTITÄT
          </h1>
        </div>
      </div>

      {/* Restlicher Content muss auch über dem Video liegen */}
      <div className="relative z-20 flex flex-col items-center">
        <p className="max-w-xl text-center mt-8 mb-12 text-lg text-gray-300">
          Die einzige Plattform, die wirklich versteht, dass Qualität &gt; Quantität steht – und der Ort, an dem die wahre Statistik über die letzten Niederlagen sicher verwahrt ist.
        </p>

        <Link href="/login" passHref legacyBehavior>
            <a className="login-button px-12 py-4 rounded-full font-bold text-xl transition-all duration-300 ease-in-out cursor-pointer relative overflow-hidden group"
               style={{
                   backgroundColor: 'transparent',
                   color: '#fff',
                   border: `2px solid ${accentColor}`,
                   boxShadow: `0 0 15px ${accentColor}, inset 0 0 15px ${accentColor}`
               }}>
                <span className="relative z-10">Login</span>
                <div className="absolute inset-0 h-full w-full bg-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
        </Link>
      </div>
    </main>
  );
}