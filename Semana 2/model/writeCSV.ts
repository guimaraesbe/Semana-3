import fs from 'fs';
import { createObjectCsvWriter } from 'csv-writer';
import { Data } from './interfaceData';

const writeCSV = async (filePath: string, data: Data[]): Promise<void> => {
  const fileExists = fs.existsSync(filePath);

  const csvWriter = createObjectCsvWriter({
    path: filePath,
    header: [
      { id: 'nome', title: 'nome' },
      { id: 'peso', title: 'peso' },
      { id: 'valor', title: 'valor' },
      { id: 'quantidade', title: 'quantidade' }
    ],
    append: fileExists // só escreve cabeçalho se o arquivo ainda não existir
  });

  await csvWriter.writeRecords(data);
};

export default writeCSV;
