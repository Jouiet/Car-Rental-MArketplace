import React from 'react';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-blue-600">CarRental.ma</div>
          <div className="flex gap-4">
            <button className="text-gray-600 hover:text-blue-600">FR</button>
            <button className="text-gray-600 hover:text-blue-600">عربي</button>
            <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md">
              Connexion
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              S'inscrire
            </button>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">À propos</h3>
              <ul className="space-y-2">
                <li>Qui sommes-nous</li>
                <li>Comment ça marche</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Locations</h3>
              <ul className="space-y-2">
                <li>Rechercher une voiture</li>
                <li>Devenir partenaire</li>
                <li>Assurance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>Centre d'aide</li>
                <li>Nous contacter</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Légal</h3>
              <ul className="space-y-2">
                <li>Conditions d'utilisation</li>
                <li>Politique de confidentialité</li>
                <li>Mentions légales</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 CarRental.ma - Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;