import {Request, Response} from "express";
import { connection } from "../../connection";
import { Empresa } from "../../types"

export const cadastrarEmpresa = async (req: Request, res: Response) => {
    try {

        const {nomeEmpresa, email, telefone, cnpj} = req.body;

        if(!nomeEmpresa || !email || !telefone || !cnpj){
            throw new Error("Está faltando informações")
        }
        const empresa: Empresa = {
            id: Date.now().toString(),
            nomeEmpresa,
            email,
            telefone,
            cnpj
        }

        await connection("hackathon_cadastroEmpresas").insert(empresa)
        res.status(200) .send("Empresa cadastrada com sucesso!")

    } catch (error:any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}