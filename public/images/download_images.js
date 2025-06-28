// Script pour télécharger les images Unsplash

/*
Instructions pour télécharger les images:
1. Ouvrez un terminal dans le dossier du projet
2. Exécutez: node public/images/download_images.js
3. Les images seront téléchargées dans le dossier public/images
*/

const fs = require('fs');
const https = require('https');
const path = require('path');

const imagesToDownload = [
  // Images pour la galerie
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
  // Images pour la section équipe (nouvelle section)
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