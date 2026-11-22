import type {Metadata} from 'next';
import {Manrope} from 'next/font/google';
import './globals.css';
const manrope=Manrope({subsets:['latin'],display:'swap',variable:'--font-manrope'});
export const metadata:Metadata={title:'FAWAHAN Retail Partner — Une nouvelle perspective pour votre boutique',description:'Découvrez le partenariat professionnel FAWAHAN : une collection de parfums marocains premium accessibles, une sélection adaptée et un accompagnement commercial.',robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body className={manrope.variable}><a className="skip-link" href="#contenu">Aller au contenu</a>{children}</body></html>}
