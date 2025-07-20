import {Data } from "../model/interfaceData";
import estoqueService from '../model/service/serviceEstoque';

export async function adicionarProduto (data:Data) {
    try {
        await estoqueService.criar(data)
        console.log("Produto adicionado com sucesso.");
    }
    catch
}