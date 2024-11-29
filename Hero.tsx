import React from 'react';
import { Car } from 'lucide-react';
import SearchForm from './SearchForm';
import type { SearchFilters } from '../types';

export default function Hero() {
  const handleSearch = (filters: SearchFilters) => {
    console.log('Search filters:', filters);
    // TODO: Implement search functionality
  };

  return (
    <div className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Car className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Location de Voitures au Maroc
          </h1>
          <p className="text-xl text-white mb-8">
            Trouvez la voiture idéale pour votre séjour parmi notre large sélection
          </p>
        </div>

        <SearchForm onSearch={handleSearch} />
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
          <div>
            <h3 className="text-lg font-semibold mb-2">Large Choix de Véhicules</h3>
            <p>Des centaines de voitures disponibles dans tout le Maroc</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Prix Compétitifs</h3>
            <p>Comparez les meilleures offres des agences locales</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Réservation Simple</h3>
            <p>Processus de réservation rapide et sécurisé</p>
          </div>
        </div>
      </div>
    </div>
  );
}