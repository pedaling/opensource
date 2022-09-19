import fs from 'fs';
import path from 'path';
import glob from 'glob';

function getLcovFiles(src: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    glob(src, (error, result) => {
      if (error) {
        reject(error);

        return;
      }

      resolve(result);
    });
  });
}

(async () => {
  const files = await getLcovFiles('coverage/**/lcov.info');
  const mergedReport = files.reduce((prevContent, currentFile) => prevContent + fs.readFileSync(currentFile), '');

  fs.writeFile(path.resolve('coverage/lcov.info'), mergedReport, error => {
    if (error) {
      throw error;
    }
  });
})();
