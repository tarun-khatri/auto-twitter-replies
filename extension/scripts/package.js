const fs = require('fs');
const path = require('path');

// Create extension package directory
const packageDir = 'extension-package';
const sourceDir = '.';

// Files and directories to include in the extension
const includeFiles = [
  'manifest.json',
  'index.html',
  'icon16.png',
  'icon48.png',
  'icon128.png',
  'dist/'
];

// Files and directories to exclude
const excludePatterns = [
  'node_modules',
  'src',
  'scripts',
  'package.json',
  'package-lock.json',
  'vite.config.*.js',
  '.env',
  'extension-package'
];

function shouldExclude(filePath) {
  return excludePatterns.some(pattern => filePath.includes(pattern));
}

function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const items = fs.readdirSync(src);
  
  for (const item of items) {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    
    if (shouldExclude(srcPath)) {
      continue;
    }

    const stat = fs.statSync(srcPath);
    
    if (stat.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function cleanPackage() {
  // Remove existing package directory
  if (fs.existsSync(packageDir)) {
    fs.rmSync(packageDir, { recursive: true, force: true });
  }
  
  // Create new package directory
  fs.mkdirSync(packageDir, { recursive: true });
  
  // Copy only necessary files
  for (const file of includeFiles) {
    const srcPath = path.join(sourceDir, file);
    const destPath = path.join(packageDir, file);
    
    if (fs.existsSync(srcPath)) {
      const stat = fs.statSync(srcPath);
      
      if (stat.isDirectory()) {
        copyDirectory(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
  
  console.log('✅ Extension package created successfully!');
  console.log(`📁 Package location: ${path.resolve(packageDir)}`);
  
  // Calculate package size
  const packageSize = getDirectorySize(packageDir);
  console.log(`📦 Package size: ${(packageSize / 1024 / 1024).toFixed(2)} MB`);
}

function getDirectorySize(dirPath) {
  let totalSize = 0;
  
  function calculateSize(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const itemPath = path.join(currentPath, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        calculateSize(itemPath);
      } else {
        totalSize += stat.size;
      }
    }
  }
  
  calculateSize(dirPath);
  return totalSize;
}

// Run the packaging
cleanPackage(); 