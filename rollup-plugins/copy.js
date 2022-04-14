import fs from 'fs-extra';
import path from 'path';

const resolve = filePath => path.join(__dirname, filePath);

export default function copy(options) {
  return {
    name: 'copy',
    buildStart() {
      const { src, dest } = options;
      const srcPath = resolve(src);
      const destPath = resolve(dest);
      fs.copySync(srcPath, destPath);
    },
  };
}
