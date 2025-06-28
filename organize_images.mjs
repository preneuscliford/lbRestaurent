// Script pour organiser les images WhatsApp et intégrer le branding du restaurant L.B
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemins des dossiers
const publicDir = path.join(__dirname, 'public');
const imagesDir = path.join(publicDir, 'images');

// Fonction pour déplacer et renommer les images WhatsApp
function organizeWhatsAppImages() {
    console.log('🍽️ Organisation des images du Restaurant L.B...');
    
    // Lire tous les fichiers du dossier public
    const files = fs.readdirSync(publicDir);
    
    // Filtrer les images WhatsApp
    const whatsappImages = files.filter(file => 
        file.startsWith('WhatsApp Image') && file.endsWith('.jpg')
    );
    
    console.log(`📸 ${whatsappImages.length} images WhatsApp trouvées`);
    
    // Suggestions de noms basées sur le logo et le contexte du restaurant
    const suggestedNames = [
        'restaurant-lb-facade.jpg',
        'plat-signature-lb.jpg', 
        'riz-haricots-poulet-frit.jpg',
        'ambiance-restaurant-lb.jpg',
        'chef-lb-cuisine.jpg',
        'specialite-haitienne-lb.jpg',
        'interieur-restaurant-lb.jpg',
        'equipe-lb-restaurant.jpg',
        'plat-traditionnel-lb.jpg',
        'service-lb-cayenne.jpg'
    ];
    
    // Déplacer et renommer les images
    whatsappImages.forEach((file, index) => {
        const oldPath = path.join(publicDir, file);
        const newName = suggestedNames[index] || `image-lb-${index + 1}.jpg`;
        const newPath = path.join(imagesDir, newName);
        
        try {
            fs.renameSync(oldPath, newPath);
            console.log(`✅ ${file} → ${newName}`);
        } catch (error) {
            console.error(`❌ Erreur pour ${file}:`, error.message);
        }
    });
    
    // Déplacer le logo
    const logoPath = path.join(publicDir, 'logo.jpg');
    const newLogoPath = path.join(imagesDir, 'logo-lb-restaurant.jpg');
    
    if (fs.existsSync(logoPath)) {
        try {
            fs.renameSync(logoPath, newLogoPath);
            console.log('✅ logo.jpg → logo-lb-restaurant.jpg');
        } catch (error) {
            console.error('❌ Erreur pour le logo:', error.message);
        }
    }
    
    console.log('🎉 Organisation terminée!');
    console.log('\n📋 Informations extraites du logo:');
    console.log('- Nom du restaurant: L.B Restaurant');
    console.log('- Spécialité: Cuisine haïtienne');
    console.log('- Localisation: 15 AV de L\'AMIRAL JEAN DESTREE, 97300 CAYENNE');
    console.log('- Téléphone: 0694 41 06 70');
    console.log('- Couleurs: Orange/jaune (chaleureux)');
    console.log('- Style: Élégant avec toque de chef');
}

// Exécuter le script
organizeWhatsAppImages();