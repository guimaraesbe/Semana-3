import fs from 'fs';
import csv from 'csv-parser';
import { Data } from './interfaceData';

const readCSV = (filePath: string): Promise<Data[]> => {
  return new Promise((resolve, reject) => {
    const results: Data[] = [];

    if (!fs.existsSync(filePath)) {
      // Arquivo ainda não existe → retorna lista vazia
      return resolve([]);
    }

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        results.push({
          nome: row.nome,
          peso: parseFloat(row.peso),
          valor: parseFloat(row.valor),
          quantidade: parseInt(row.quantidade)
        });
      })
      .on('end', () => {
        resolve(results);
      })
      .on('error', (err) => {
        reject(err);
      });
  });
};

export default readCSV;
