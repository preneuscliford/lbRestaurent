// Script pour télécharger les images des plats du menu

/*
Instructions pour télécharger les images:
1. Ouvrez un terminal dans le dossier du projet
2. Exécutez: node public/images/download_menu_images.js
3. Les images seront téléchargées dans le dossier public/images
*/

const fs = require('fs');
const https = require('https');
const path = require('path');

// Liste des plats du menu avec leurs images correspondantes
const menuImages = [
  // Entrées
  {
    name: "akra-de-malanga",
    url: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "starters"
  },
  {
    name: "marinades",
    url: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "starters"
  },
  {
    name: "salade-de-betteraves",
    url: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "starters"
  },
  {
    name: "bouillon-de-boeuf",
    url: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "starters"
  },
  
  // Plats principaux
  {
    name: "griot-bananes-pesees",
    url: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "main-dishes"
  },
  {
    name: "poisson-a-lhaitienne",
    url: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "main-dishes"
  },
  {
    name: "tassot-de-cabri",
    url: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "main-dishes"
  },
  {
    name: "legumes-haitiens",
    url: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "main-dishes"
  },
  {
    name: "lambi-en-sauce",
    url: "https://images.unsplash.com/photo-1599161146640-8d60bd2c0c9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "main-dishes"
  },
  {
    name: "poulet-creole",
    url: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "main-dishes"
  },
  
  // Accompagnements
  {
    name: "riz-djon-djon",
    url: "https://images.unsplash.com/photo-1596797038530-2c107aa4e1f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "side-dishes"
  },
  {
    name: "riz-colle-aux-haricots",
    url: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "side-dishes"
  },
  {
    name: "bananes-pesees",
    url: "https://images.unsplash.com/photo-1526399232581-2ab5608b6336?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "side-dishes"
  },
  {
    name: "pikliz",
    url: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "side-dishes"
  },
  
  // Desserts
  {
    name: "pain-patate",
    url: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "desserts"
  },
  {
    name: "blanc-manger",
    url: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "desserts"
  },
  {
    name: "tablette-noix",
    url: "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "desserts"
  },
  {
    name: "sorbet-de-fruits-tropicaux",
    url: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "desserts"
  },
  
  // Boissons
  {
    name: "jus-de-grenadine",
    url: "https://images.unsplash.com/photo-1622597467836-f3e6707e1fd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "drinks"
  },
  {
    name: "rhum-barbancourt",
    url: "https://images.unsplash.com/photo-1514218698632-ef079aaafdb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "drinks"
  },
  {
    name: "cremas",
    url: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "drinks"
  },
  {
    name: "jus-de-corossol",
    url: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "drinks"
  },
  {
    name: "cocktail-haitien",
    url: "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "drinks"
  },
  
  // Image de remplacement par défaut
  {
    name: "placeholder-dish",
    url: "https://images.unsplash.com/photo-1546241072-48010ad2862c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "placeholder"
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

const downloadAllMenuImages = async () => {
  console.log('🔄 Début du téléchargement des images du menu...');
  
  // Créer un dossier pour chaque catégorie si nécessaire
  const categories = ['starters', 'main-dishes', 'side-dishes', 'desserts', 'drinks', 'placeholder'];
  
  for (const image of menuImages) {
    try {
      const filename = `${image.name}.jpg`;
      await downloadImage(image.url, filename);
    } catch (error) {
      console.error(`Impossible de télécharger l'image pour ${image.name}`);
    }
  }
  
  console.log('✨ Téléchargement des images du menu terminé!');
  console.log('📝 Les images sont prêtes à être utilisées dans le composant MenuCategory.');
};

downloadAllMenuImages();