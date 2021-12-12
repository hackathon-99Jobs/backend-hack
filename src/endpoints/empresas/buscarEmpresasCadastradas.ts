import {Request, Response} from "express";
import { dadosEmpresas } from "../../data/dadosEmpresas";

export const buscarEmpresas = async (req:Request, res: Response) => {
    try {
        const empresas = await dadosEmpresas()
        res.status(200) .send(empresas)
        
    } catch (error:any) {
        res.status(400).send(error.message || error.sqlMessage)

    }
}