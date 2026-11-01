// Monta a pasta www/ usada pelo app Android: copia o jogo e troca o three.js da internet por cópias locais (funciona offline).
import fs from 'fs';import path from 'path';
const root=process.cwd(),out=path.join(root,'www');
fs.rmSync(out,{recursive:true,force:true});fs.mkdirSync(out,{recursive:true});
const cp=(a,b)=>fs.cpSync(path.join(root,a),path.join(out,b||a),{recursive:true});
cp('assets');cp('models');
let html=fs.readFileSync(path.join(root,'index.html'),'utf8');
html=html.replace('https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js','./vendor/three/build/three.module.js')
         .replace('https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/','./vendor/three/examples/jsm/');
html=html.replace("const TEST_MODE=HASH.includes('teste');",'const TEST_MODE=false; // desativado no app (Play Store)');
fs.writeFileSync(path.join(out,'index.html'),html);
// copia só os módulos do three.js que o jogo usa (e o que eles importam)
const T=path.join(root,'node_modules/three');
const seen=new Set();
function copyMod(rel){if(seen.has(rel))return;seen.add(rel);
  const src=path.join(T,rel),dst=path.join(out,'vendor/three',rel);fs.mkdirSync(path.dirname(dst),{recursive:true});fs.copyFileSync(src,dst);
  const code=fs.readFileSync(src,'utf8');for(const m of code.matchAll(/from\s+['"](\.{1,2}\/[^'"]+)['"]/g))copyMod(path.join(path.dirname(rel),m[1]));}
copyMod('build/three.module.js');
for(const m of html.matchAll(/from\s+'three\/addons\/([^']+)'/g))copyMod('examples/jsm/'+m[1]);
console.log('www pronto:',seen.size,'módulos do three.js copiados');
