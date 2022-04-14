import fs from 'fs-extra';
import path from 'path';

const resolve = filePath => path.join(__dirname, filePath);

export default function clear(target) {
  return {
    name: 'clear',
    buildStart() {
      if (!target) {
        console.log('缺少目标路径 target');
        return null;
      }
      const absolutePath = resolve(target);
      fs.removeSync(absolutePath);
    },
  };
}
