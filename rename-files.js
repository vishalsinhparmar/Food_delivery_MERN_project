import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

// Define __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'src/assets');

function renameFilesInDir(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) throw err;

    files.forEach((file) => {
      const oldPath = path.join(dir, file);
      const newFileName = file.replace(/ /g, '_'); // Replace spaces with underscores
      const newPath = path.join(dir, newFileName);

      if (fs.statSync(oldPath).isDirectory()) {
        // Recursively handle subdirectories
        renameFilesInDir(oldPath);
      } else {
        fs.rename(oldPath, newPath, (err) => {
          if (err) throw err;
          console.log(`Renamed: ${file} -> ${newFileName}`);
        });
      }
    });
  });
}

// Run the script
renameFilesInDir(assetsDir);
