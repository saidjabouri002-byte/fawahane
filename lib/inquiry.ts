export const establishmentTypes=['Parapharmacie','Parfumerie','Boutique beauté','Institut ou centre de beauté','Barbershop','Autre'];
export type Inquiry={name:string;establishment:string;type:string;city:string;phone:string;email:string;message:string};
export function validateInquiry(v:Inquiry){const errors:Partial<Record<keyof Inquiry,string>>={};
for(const key of ['name','establishment','city'] as const)if(!v[key]?.trim()||v[key].length>150)errors[key]='Renseignez ce champ (150 caractères maximum).';
if(!establishmentTypes.includes(v.type))errors.type='Sélectionnez votre type d’établissement.';
if(!/^[+\d\s().-]{8,25}$/.test(v.phone)||v.phone.replace(/\D/g,'').length<8)errors.phone='Indiquez un numéro de téléphone valide.';
if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)||v.email.length>254)errors.email='Indiquez une adresse e-mail valide.';
if(v.message.length>3000)errors.message='Votre message doit contenir au maximum 3 000 caractères.';
return errors;}
