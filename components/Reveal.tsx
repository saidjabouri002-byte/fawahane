'use client';
import {motion,useReducedMotion} from 'motion/react';
export default function Reveal({children,className=''}:{children:React.ReactNode;className?:string}){const reduced=useReducedMotion();return <motion.div className={className} initial={false} whileInView={reduced?{}:{y:[16,0],opacity:[0.75,1]}} viewport={{once:true,amount:.1}} transition={{duration:.55,ease:'easeOut'}}>{children}</motion.div>}
