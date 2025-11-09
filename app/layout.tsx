import './globals.css'; 
import { ReactNode } from 'react';

// 1. METADATEN (Für Browser-Tab und Suchmaschinen)
export const metadata = {
  // Hier den Titel für den Browser-Tab anpassen
  title: 'Kardiashumi | Deine Next.js Startseite', 
  description: 'Das ist die professionelle Next.js-Website von NoxBot06/Fabian Motten.',
}

// 2. ROOT LAYOUT KOMPONENTE
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      {/* Body behält die Flex-Eigenschaften bei, um den Inhalt (children)
        korrekt in der Mitte zu zentrieren und den Full-Screen-Hintergrund zu erhalten.
        Header und Footer sind entfernt.
      */}
      <body className="flex flex-col min-h-screen">
        
        {children} {/* Hier wird der Inhalt von page.js oder register/page.js eingefügt */}
        
      </body>
    </html>
  )
}