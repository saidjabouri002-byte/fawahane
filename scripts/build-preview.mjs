import {rename,mkdir} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
await mkdir('work',{recursive:true});
await rename('app/api','work/api-preview');
try{const r=spawnSync(process.execPath,['node_modules/next/dist/bin/next','build'],{stdio:'inherit',env:{...process.env,STATIC_PREVIEW:'1'}});if(r.status!==0)process.exitCode=r.status||1;}finally{await rename('work/api-preview','app/api');}
