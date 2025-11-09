import './globals.css'; // Wichtig: Importiert deine Tailwind CSS Basis-Styles

// 1. METADATEN (Für Browser-Tab und Suchmaschinen)
export const metadata = {
  // Hier den Titel für den Browser-Tab anpassen
  title: 'Kardiashumi | Deine Next.js Startseite', 
  description: 'Das ist die professionelle Next.js-Website von NoxBot06/Fabian Motten.',
}

// 2. ROOT LAYOUT KOMPONENTE
export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="flex flex-col min-h-screen">
        
        {/* === HEADER / NAVIGATIONSLEISTE === */}
        {/* bg-gray-900 für dunklen Hintergrund, sticky top-0 für Fixierung beim Scrollen */}
        <header className="bg-gray-900 text-white p-4 shadow-xl sticky top-0 z-10">
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            
            {/* Logo/Marke */}
            <div className="font-extrabold text-2xl tracking-wider hover:text-blue-400 transition-colors">
              <a href="/">KARDIASHUMI</a>
            </div>
            
            {/* Navigationslinks */}
            <div className="space-x-6 text-lg">
              {/* Wir nutzen <a href> anstelle von Next.js <Link>, um es einfach zu halten */}
              <a href="/" className="hover:text-blue-400">Home</a>
              <a href="/about" className="hover:text-blue-400">Über mich</a>
              <a href="/projects" className="hover:text-blue-400">Projekte</a>
              <a href="/contact" className="hover:text-blue-400 border border-blue-400 px-3 py-1 rounded transition-colors hover:bg-blue-400 hover:text-gray-900">Kontakt</a>
            </div>
          </nav>
        </header>

        {/* === HAUPTINHALT === */}
        {/* Flex-grow füllt den Raum zwischen Header und Footer aus */}
        <main className="flex-grow max-w-7xl mx-auto w-full p-8">
          {children} {/* Hier wird der Inhalt von page.js (deine Home-Seite) eingefügt */}
        </main>

        {/* === FOOTER === */}
        <footer className="bg-gray-800 text-center p-4 text-gray-400 border-t border-gray-700">
          &copy; {new Date().getFullYear()} Kardiashumi | Code by <a href="https://github.com/NoxBot06" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">NoxBot06</a> | All rights reserved.
        </footer>
        
      </body>
    </html>
  )
}