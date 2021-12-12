import {Request, Response} from "express";
import {connection} from "../../connection";
import { Estudante } from "../../types";

export const cadastrarEstudante = async (req:Request, res:Response) => {
    try {
        const {nome, email, cpf, redacao, senha} = req.body;

        if(!nome || !email || !cpf || !redacao || !senha){
            throw new Error("Está faltando informações!")
        }
        const estudante:Estudante = {
            id: Date.now().toString(),
            nome,
            email,
            cpf,
            redacao,
            senha
        }

        await connection("hackathon_cadastroEstudante"). insert(estudante)
        res.status(200).send("Estudante cadastrado com sucesso!")
        
    } catch (error:any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}