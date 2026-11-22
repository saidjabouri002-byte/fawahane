/** Official photographs from fawahan.store, isolated as transparent PNGs. */
export const assets = {
  'hero-perfume': {src:'/images/fawahan-bottle.png', file:'fawahan-bottle.png', alt:'Flacon FAWAHAN avec bouchon en cristal et col doré', fit:'contain'},
  'hero-retail-display': {src:'/images/fawahan-trio.png',file:'fawahan-trio.png',alt:'Trois flacons FAWAHAN de la collection Empreinte',fit:'contain'},
  'collection-bottles': {src:'/images/fawahan-bottle.png',file:'fawahan-bottle.png',alt:'Flacon de parfum FAWAHAN détouré',fit:'contain'},
  'product-detail': {src:'/images/fawahan-bottle.png',file:'fawahan-bottle.png',alt:'Détail du flacon FAWAHAN et de son bouchon facetté',fit:'contain'},
  'packaging-detail': {src:'/images/fawahan-trio.png',file:'fawahan-trio.png',alt:'Les trois silhouettes de flacons FAWAHAN',fit:'contain'},
  'retail-display': {src:'/images/fawahan-trio.png',file:'fawahan-trio.png',alt:'Sélection de trois parfums FAWAHAN',fit:'contain'},
  'starter-kit': {src:'/images/fawahan-trio.png',file:'fawahan-trio.png',alt:'Collection de flacons FAWAHAN',fit:'contain'},
} satisfies Record<string,{src:string|null,file:string,alt:string,fit:string}>;
export type AssetKey = keyof typeof assets;
