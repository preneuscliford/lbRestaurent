# Guide d'Utilisation des Images pour le Site Restaurant Haïtien

## Nouvelles Fonctionnalités Ajoutées

1. **Script de téléchargement d'images** - Un script Node.js pour télécharger automatiquement toutes les images nécessaires depuis Unsplash
2. **Nouvelle section Équipe** - Un composant pour présenter l'équipe du restaurant avec des images professionnelles
3. **Images améliorées** - Nouvelles images pour la galerie et les témoignages

## Comment Télécharger les Images

Pour télécharger toutes les images nécessaires, suivez ces étapes simples :

1. Ouvrez un terminal dans le dossier principal du projet
2. Exécutez la commande suivante :
   ```
   node public/images/download_images.js
   ```
3. Attendez que le script termine le téléchargement de toutes les images

Le script téléchargera automatiquement :
- Les images manquantes pour la galerie (gallery-5.jpg, gallery-6.jpg)
- Les images pour les témoignages (testimonial-1.jpg, testimonial-2.jpg, testimonial-3.jpg)
- Les images pour la nouvelle section équipe (chef-1.jpg, chef-2.jpg, chef-3.jpg)

## Structure des Nouvelles Images

### Images de la Galerie
- **gallery-5.jpg** - Bar élégant du restaurant
- **gallery-6.jpg** - Dessert traditionnel haïtien

### Images des Témoignages
- **testimonial-1.jpg** - Portrait du critique gastronomique
- **testimonial-2.jpg** - Portrait de la cliente régulière
- **testimonial-3.jpg** - Portrait du chef et influenceur

### Images de l'Équipe
- **chef-1.jpg** - Chef Principal
- **chef-2.jpg** - Chef Pâtissière
- **chef-3.jpg** - Chef de Cuisine

## Modifications Apportées

1. **Nouveau Composant Team.astro** - Ajout d'une section pour présenter l'équipe du restaurant
2. **Mise à jour de index.astro** - Intégration du composant Team entre les témoignages et la galerie
3. **Mise à jour des composants existants** - Ajout de commentaires pour indiquer comment télécharger les images

## Remarques Importantes

- Toutes les images sont libres de droits et proviennent d'Unsplash
- Le script de téléchargement nécessite Node.js installé sur votre machine
- Si vous préférez télécharger manuellement les images, consultez le fichier `public/images/IMAGES_UNSPLASH.md` pour les liens directs