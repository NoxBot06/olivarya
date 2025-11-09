import { Inter } from 'next/font/google';
import Link from 'next/link';

// Inter für den Fließtext
const inter = Inter({ subsets: ['latin'] });

export default function RegisterPage() {
  // Dieselbe Akzentfarbe wie auf der Start- und Login-Seite
  const accentColor = "#8c6ec8"; 

  return (
    <main className={`flex min-h-screen flex-col items-center justify-center p-4 ${inter.className}`}>
      
      {/* Registrierungs-Box: Etwas breiter als Login-Box, da mehr Felder */}
      <div 
        className="w-full max-w-lg p-10 rounded-xl backdrop-blur-sm"
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
          ACCOUNT ERSTELLEN
        </h2>

        <form className="space-y-6">
          
          {/* 1. Benutzername-Feld */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
              Benutzername
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
          
          {/* 2. E-Mail-Feld */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              E-Mail Adresse
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg bg-transparent border text-white focus:ring-2 focus:ring-offset-0 transition duration-200"
              style={{ borderColor: accentColor, boxShadow: `0 0 5px rgba(140, 110, 200, 0.5)` }}
            />
          </div>

          {/* 3. Passwort-Feld */}
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

          {/* 4. Passwort-Wiederholung-Feld */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
              Passwort bestätigen
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              className="w-full px-4 py-3 rounded-lg bg-transparent border text-white focus:ring-2 focus:ring-offset-0 transition duration-200"
              style={{ borderColor: accentColor, boxShadow: `0 0 5px rgba(140, 110, 200, 0.5)` }}
            />
          </div>

          {/* Registrierungs-Button */}
          <div>
            <button
              type="submit"
              className="login-button w-full mt-4" // Nutzt die bereits definierte, nun korrigierte, Klasse
              style={{ 
                boxShadow: `0 0 10px ${accentColor}, 0 0 20px ${accentColor}, 0 0 40px rgba(140, 110, 200, 0.6)` 
              }}
            >
              Registrieren
            </button>
          </div>
        </form>

        {/* Link zurück zum Login */}
        <div className="mt-8 text-center text-sm">
          <Link href="/login" passHref className="text-gray-400 hover:text-white transition duration-200" style={{ textShadow: `0 0 2px ${accentColor}` }}>
            Zurück zur Anmeldung
          </Link>
        </div>
        
      </div>
      
    </main>
  );
}