import {Request, Response} from "express"

export const testeInicial = (req: Request, res: Response) => {

    res.status(200) .send("Funcionou")
}