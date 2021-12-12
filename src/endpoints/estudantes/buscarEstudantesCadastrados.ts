import {Request, Response} from "express";
import { dadosEstudante } from "../../data/dadosEstudante";

export const buscarEstudante = async (req:Request, res: Response) => {
    try {
        const estudantes = await dadosEstudante()
        res.status(200) .send(estudantes)
        
    } catch (error:any) {
        res.status(400).send(error.message || error.sqlMessage)

    }
}