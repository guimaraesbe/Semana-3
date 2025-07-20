import readCSV from "../model/readCSV";
import writeCSV from "../model/writeCSV";
import { Data } from "../model/interfaceData";
import fs from 'fs';

const filePath = './model/estoque.csv';

class estoqueService {
    async criar(data: Data)
    {
        if(typeof data.nome !== 'string' || typeof data.valor !== 'number' || typeof data.peso !== 'number'||typeof data.quantidade !=='number') {
            throw new Error ('Dados inválidos para o produto');
        } else {
            await writeCSV(filePath, [data]);
        }
    }
}

export default new estoqueService()
