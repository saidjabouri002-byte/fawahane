# FAWAHAN Retail Partner

Landing page française Next.js App Router, TypeScript, Tailwind CSS, Manrope, Lucide et Motion.

## Démarrage

Node.js 22 ou plus récent.

```sh
npm install
npm run dev
```

Ouvrir http://localhost:3000. Pour la production serveur : `npm run build` puis `npm start`.

## Photographies

Les visuels produits et le logo transparents sont intégrés dans `public/images/`. Le portrait de Mehdi utilise `mehdi-enhanced.webp`, optimisé pour le web. Les références des produits sont centralisées dans `lib/assets.ts`.

## Activer le formulaire

Copier `.env.example` vers `.env.local`. Configurer `PARTNERSHIP_WEBHOOK_URL` avec un endpoint HTTPS acceptant du JSON et, si nécessaire, `PARTNERSHIP_WEBHOOK_TOKEN`. Le token reste côté serveur. L’endpoint doit renvoyer un code 2xx uniquement une fois la demande réellement prise en charge. Champs : name, establishment, type, city, phone, email, message, source. Redémarrer ou reconstruire le serveur après configuration. Sans destination, l’envoi est désactivé et explicitement signalé.

La route `/api/partenariat` valide les données, vérifie l’origine et applique un délai d’attente. Configurer une limitation de débit au niveau de l’hébergeur avant ouverture du formulaire public. Aucun contact, tarif ou engagement commercial n’a été inventé.

## Aperçu Sites

`npm run build:preview` produit une version statique dans `out/`. Le script retire temporairement la route serveur pendant l’export et la restaure dans un bloc finally. Dans cet aperçu statique, le formulaire est toujours explicitement désactivé. L’activation du formulaire nécessite le déploiement Next.js serveur décrit ci-dessus ; une variable Sites seule ne l’active pas.

## Vérifications

`npm run typecheck` et `npm run build`. Vérifier les formats 1440, 1024, 768 et 390 px, les ancres, le menu mobile, la FAQ et les états d’envoi. Les composants essentiels et la FAQ restent utilisables sans JavaScript. Les animations respectent la réduction des mouvements.

## Vidéo VSL du hero

Le bloc vidéo se trouve immédiatement sous le titre principal. Configurer `lib/video.ts` : `src` reçoit le lien MP4 et `type: 'video'`, ou une URL d’intégration YouTube/Vimeo et `type: 'embed'`. `poster` et `captions` permettent d’ajouter une couverture et des sous-titres français à un MP4. Sans source, un emplacement non interactif indique « Vidéo de présentation à venir ». Aucun média fictif ni lecture automatique. Reconstruire l’aperçu après modification.

## Visuels officiels intégrés

Logo et photographies source : https://fawahan.store/ (logo, fiche Comme une Evidence et Pack Trio). Fichiers intégrés : `public/images/fawahan-logo.png`, `fawahan-bottle.png`, `fawahan-trio.png`. Détourage effectué avec l’outil Imagegen intégré, fond transparent conservé. Prompt : « Isoler uniquement les bouteilles / le logo d’origine ; retirer le décor, les textes publicitaires et les marges ; conserver les formes, couleurs, étiquettes et proportions ; produire un PNG à canal alpha transparent. » Les trois silhouettes des miniatures utilisent le trio détouré. Les ressources commerciales ne sont pas présentées comme des produits garantis inclus.

## Déploiement Vercel

Importer le dépôt GitHub dans Vercel avec le framework Next.js, le dossier racine `./` et les commandes par défaut. La branche de production est `main`. Configurer les variables du formulaire dans Vercel avant de l’activer.
