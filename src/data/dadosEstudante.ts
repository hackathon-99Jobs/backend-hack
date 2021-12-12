import {connection} from "../connection"
import { Estudante } from "../types"

export const dadosEstudante = async ():Promise <any> => {
    const estudantes:Estudante[] = await connection("hackathon_cadastroEstudante")
    .select("*")
    return estudantes
}