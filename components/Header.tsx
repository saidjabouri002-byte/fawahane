'use client';
import {useState} from 'react';
import Image from 'next/image';
import {ArrowUpRight,Menu,X,Sparkles} from 'lucide-react';
const links=[['Le partenariat','#partenariat'],['La collection','#collection'],['Notre méthode','#methode'],['FAQ','#faq']];
export default function Header(){const [open,setOpen]=useState(false);return <header className="header container"><a href="#" className="wordmark" aria-label="FAWAHAN — accueil"><Image className="official-logo" src="/images/fawahan-logo.png" alt="FAWAHAN" width={170} height={70} priority/></a><nav aria-label="Navigation principale" className="desktop-nav">{links.map(([t,l])=><a key={l} href={l}>{t}</a>)}</nav><a className="button header-cta" href="#contact">Devenir partenaire <ArrowUpRight size={15}/></a><button className="menu-toggle" aria-label={open?'Fermer le menu':'Ouvrir le menu'} aria-expanded={open} aria-controls="mobile-nav" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>{open&&<nav id="mobile-nav" aria-label="Navigation mobile" className="mobile-nav">{[...links,['Devenir partenaire','#contact']].map(([t,l])=><a href={l} key={l} onClick={()=>setOpen(false)}>{t}</a>)}</nav>}</header>}
