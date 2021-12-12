import {connection} from "../connection"
import { Empresa } from "../types"

export const dadosEmpresas = async ():Promise <any> => {
    const empresas:Empresa[] = await connection("hackathon_cadastroEmpresas")
    .select("*")
    return empresas
}