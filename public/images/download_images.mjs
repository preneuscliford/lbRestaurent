// Script pour télécharger les images Unsplash (version ESM)

/*
Instructions pour télécharger les images:
1. Ouvrez un terminal dans le dossier du projet
2. Exécutez: node public/images/download_images.mjs
3. Les images seront téléchargées dans le dossier public/images
*/

import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesToDownload = [
  // Images pour la galerie
  {
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
    filename: 'gallery-1.jpg',
    description: 'Intérieur du restaurant'
  },
  {
    url: 'https://images.unsplash.com/photo-1555126634-323283e090fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
    filename: 'gallery-2.jpg',
    description: 'Plat signature'
  },
  {
    url: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1677&q=80',
    filename: 'gallery-3.jpg',
    description: 'Préparation du chef'
  },
  {
    url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
    filename: 'gallery-4.jpg',
    description: 'Événement spécial'
  },
  {
    url: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&auto=format&fit=crop&w=1769&q=80',
    filename: 'gallery-5.jpg',
    description: 'Bar élégant'
  },
  {
    url: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
    filename: 'gallery-6.jpg',
    description: 'Dessert appétissant'
  },
  // Images pour les plats
  {
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1769&q=80',
    filename: 'griot.jpg',
    description: 'Griot & Bananes pesées'
  },
  {
    url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
    filename: 'poisson.jpg',
    description: 'Poisson à l\'haïtienne'
  },
  {
    url: 'https://images.unsplash.com/photo-1596797038530-2c107aa4e1f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1675&q=80',
    filename: 'riz-djon-djon.jpg',
    description: 'Riz Djon-Djon'
  },
  {
    url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=1631&q=80',
    filename: 'legumes.jpg',
    description: 'Légumes Haïtiens'
  },
  // Images pour les témoignages
  {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1769&q=80',
    filename: 'testimonial-1.jpg',
    description: 'Portrait homme critique gastronomique'
  },
  {
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1769&q=80',
    filename: 'testimonial-2.jpg',
    description: 'Portrait femme cliente régulière'
  },
  {
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1769&q=80',
    filename: 'testimonial-3.jpg',
    description: 'Portrait homme chef et influenceur'
  },
  // Images pour la section équipe
  {
    url: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1769&q=80',
    filename: 'chef-1.jpg',
    description: 'Chef principal'
  },
  {
    url: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&auto=format&fit=crop&w=1769&q=80',
    filename: 'chef-2.jpg',
    description: 'Chef pâtissier'
  },
  {
    url: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1677&q=80',
    filename: 'chef-3.jpg',
    description: 'Chef en action'
  }
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, filename);
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✅ Image téléchargée: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Supprimer le fichier en cas d'erreur
      console.error(`❌ Erreur lors du téléchargement de ${filename}:`, err.message);
      reject(err);
    });
  });
};

const downloadAllImages = async () => {
  console.log('🔄 Début du téléchargement des images...');
  
  for (const image of imagesToDownload) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.error(`Impossible de télécharger ${image.filename}`);
    }
  }
  
  console.log('✨ Téléchargement des images terminé!');
  console.log('📝 N\'oubliez pas de mettre à jour les composants pour utiliser ces nouvelles images.');
};

downloadAllImages();