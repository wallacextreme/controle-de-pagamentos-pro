const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dist = path.resolve(root, 'dist');

if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist, { recursive: true });
}

// Arquivos frontend necessários
const files = ['index.html', 'tailwind.js', 'manifest.json', 'service-worker.js'];
files.forEach(file => {
  const src = path.join(root, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(dist, file));
  }
});

// Diretório de ícones frontend
const srcIcons = path.join(root, 'icons');
const distIcons = path.join(dist, 'icons');
if (fs.existsSync(srcIcons)) {
  fs.cpSync(srcIcons, distIcons, { recursive: true, force: true });
}

console.log('Frontend assets copiados com sucesso para dist/');
