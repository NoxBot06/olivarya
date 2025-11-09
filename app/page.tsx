import { Inter } from 'next/font/google';
import Link from 'next/link';

// Inter für den Fließtext
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const accentColor = "#8c6ec8"; // Ihr gewählter HEX-Code

  return (
    <main className={`flex min-h-screen flex-col items-center justify-center p-8 bg-black text-white ${inter.className}`}>
      
      {/* Container für den Titel mit Video-Maskierung
        Die Animation wird über CSS in globals.css gesteuert
      */}
      <div className="relative z-10 text-center">
        {/* Das Video-Element für die Maskierung */}
        {/* WICHTIG: Die Quelle (src) zeigt auf /glitch.mp4 im public-Ordner */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="video-background"
          src="/glitch.mp4" 
        />

        {/* Die Überschrift, die den Inhalt des Videos als Maske nutzt.
          Die Klasse 'video-masked-text' definiert diesen Effekt in globals.css.
        */}
        <h1
          /*
            Kombiniert den Video-Masken-Effekt mit den gewünschten Tailwind-
            Schriftgrößen. Die Klassen werden im HTML angegeben, um `@apply`
            im CSS zu vermeiden.
          */
          className="video-masked-text text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight"
          // Setzt den Text-Glow direkt als Inline-Style für die einfache Farbkontrolle
          style={{ textShadow: `0 0 10px ${accentColor}, 0 0 20px ${accentColor}, 0 0 30px #fff` }}
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
          /*
            Die Utility-Klassen sorgen für Abstände, Rundung, Font-Stil und
            Transition. Der Farbstil wird über die CSS-Klasse `login-button`
            definiert und der Glow über Inline-Styles.
          */
          className="login-button px-10 py-3 rounded-full font-bold text-lg transition-all duration-300 ease-in-out cursor-pointer"
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