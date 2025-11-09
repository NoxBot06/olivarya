import { Inter } from 'next/font/google';
import Link from 'next/link';

// Inter für den Fließtext
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const accentColor = "#8c6ec8"; // Ihr gewählter HEX-Code

  return (
    <main className={`flex min-h-screen flex-col items-center justify-center w-full bg-black text-white ${inter.className}`}>
      
      {/* Container für den Titel mit Video-Maskierung */}
      <div className="relative z-10 text-center p-8"> 
        {/* Das Video-Element für die Maskierung */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="video-background"
          src="/glitch.mp4" 
        />

        {/* Die Überschrift. Die Klasse 'video-masked-text' enthält nun 
          alle Text-Styles und den Neon-Glow.
        */}
        <h1
          className="video-masked-text" 
          // Optional: Filter, um die Video-Helligkeit im Text zu erhöhen 
          style={{ filter: 'brightness(1.5)' }} 
        >
          QUALITÄT &gt; QUANTITÄT
        </h1>
      </div>

      {/* Fließtext */}
      <p className="max-w-xl text-center mt-8 mb-12 text-lg text-gray-300">
        Die einzige Plattform, die wirklich versteht, dass Qualität &gt; Quantität steht – und der Ort, an dem die wahre Statistik über die letzten Niederlagen sicher verwahrt ist.
      </p>

      {/* Login Button mit Neon-Glow */}
      <Link href="/login" passHref legacyBehavior>
        <button
          className="login-button" // Nutzt die korrigierte Klasse, die alle Abstände enthält
          // Setzt den Box-Glow für den Button
          style={{
            boxShadow: `0 0 10px ${accentColor}, 0 0 20px ${accentColor}, 0 0 40px rgba(140, 110, 200, 0.6)`
          }}
        >
          Login
        </button>
      </Link>
    </main>
  );
}