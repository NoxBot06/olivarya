import { Inter } from 'next/font/google';
import Link from 'next/link';

// Inter für den Fließtext (wie auf der Startseite)
const inter = Inter({ subsets: ['latin'] });

export default function LoginPage() {
  const accentColor = "#8c6ec8"; // Ihr gewählter HEX-Code

  return (
    <main className={`flex min-h-screen flex-col items-center justify-center p-4 ${inter.className}`}>
      
      {/* Login-Box: Mittig und abgerundet */}
      <div 
        className="w-full max-w-md p-8 rounded-xl backdrop-blur-sm"
        style={{ backgroundColor: 'rgba(25, 10, 35, 0.4)', border: `1px solid ${accentColor}` }}
      >
        
        {/* Überschrift */}
        <h2 
          className="text-3xl font-bold text-center mb-8"
          style={{ 
            color: 'white', 
            textShadow: `0 0 5px ${accentColor}, 0 0 10px ${accentColor}` 
          }}
        >
          ANMELDUNG
        </h2>

        <form className="space-y-6">
          {/* Benutzername/E-Mail-Feld */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
              Benutzername / E-Mail
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg bg-transparent border text-white focus:ring-2 focus:ring-offset-0 transition duration-200"
              style={{ borderColor: accentColor, boxShadow: `0 0 5px rgba(140, 110, 200, 0.5)` }}
            />
          </div>

          {/* Passwort-Feld */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Passwort
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-4 py-3 rounded-lg bg-transparent border text-white focus:ring-2 focus:ring-offset-0 transition duration-200"
              style={{ borderColor: accentColor, boxShadow: `0 0 5px rgba(140, 110, 200, 0.5)` }}
            />
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="login-button w-full mt-4" // Nutzt die bereits definierte Klasse
              style={{ 
                boxShadow: `0 0 10px ${accentColor}, 0 0 20px ${accentColor}, 0 0 40px rgba(140, 110, 200, 0.6)` 
              }}
            >
              Einloggen
            </button>
          </div>
        </form>

        {/* Link zur Registrierung/Passwort vergessen */}
        <div className="mt-8 text-center text-sm">
          <Link href="/register" passHref className="text-gray-400 hover:text-white transition duration-200" style={{ textShadow: `0 0 2px ${accentColor}` }}>
            Noch keinen Account? Registrieren
          </Link>
        </div>
        
      </div>
      
    </main>
  );
}