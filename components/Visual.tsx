import Image from 'next/image';
import { assets, type AssetKey } from '@/lib/assets';
export function Bottle({tone='amber',small=false}:{tone?:string;small?:boolean}) {
 return <div className={`bottle ${tone} ${small?'small':''}`}><div className="bottle-cap"/><div className="bottle-neck"/><div className="bottle-glass"><div className="bottle-label"><span>PARFUM</span><i/><small>Collection</small></div></div></div>
}
export default function Visual({asset,kind='single',className=''}:{asset:AssetKey;kind?:string;className?:string}) {
 const config=assets[asset];
 return <div className={`visual ${kind} ${className}`}>
 {config.src ? <Image src={config.src} alt={config.alt} fill sizes="(max-width:768px) 90vw, 45vw" style={{objectFit:config.fit as 'cover'|'contain'}}/> : <div className="composition" aria-label="Composition illustrative de flacons neutres, visuels produits à venir" role="img">
 {(kind==='kit'||kind==='catalogue')&&<div className="catalogue"><span>LA COLLECTION</span><div className="catalogue-line"/><strong>Le parfum,<br/>une nouvelle<br/>perspective.</strong><small>SÉLECTION PROFESSIONNELLE</small></div>}
 {(kind==='single'||kind==='detail'||kind==='packaging')&&<div className="pack"><span>COLLECTION</span><i/><small>PARFUM</small></div>}
 <div className="bottles"><Bottle tone="amber"/>{['display','collection','retail','kit'].includes(kind)&&<><Bottle tone="smoke"/><Bottle tone="blush"/></>}</div>
 {['retail','display','collection'].includes(kind)&&<div className="plinth"/>}
 </div>}
 </div>
}
