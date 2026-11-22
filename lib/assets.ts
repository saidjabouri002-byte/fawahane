/** Set src to /images/<filename> once an approved product photograph is available. */
export const assets = {
  'hero-perfume': {src:null, file:'hero-perfume.webp', alt:'Flacon de parfum et son coffret FAWAHAN', fit:'contain'},
  'hero-retail-display': {src:null,file:'hero-retail-display.webp',alt:'Une sélection de parfums FAWAHAN sur un présentoir',fit:'contain'},
  'collection-bottles': {src:null,file:'collection-bottles.webp',alt:'La collection de parfums FAWAHAN',fit:'contain'},
  'product-detail': {src:null,file:'product-detail.webp',alt:'Détail d’un flacon de parfum FAWAHAN',fit:'cover'},
  'packaging-detail': {src:null,file:'packaging-detail.webp',alt:'Détail du coffret FAWAHAN',fit:'cover'},
  'retail-display': {src:null,file:'retail-display.webp',alt:'Les parfums FAWAHAN dans un espace de vente',fit:'cover'},
  'starter-kit': {src:null,file:'starter-kit.webp',alt:'Catalogue et ressources de présentation FAWAHAN',fit:'contain'},
} satisfies Record<string,{src:string|null,file:string,alt:string,fit:string}>;
export type AssetKey = keyof typeof assets;
