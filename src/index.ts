import {app} from "./app";
import { buscarEmpresas } from "./endpoints/empresas/buscarEmpresasCadastradas";
import { cadastrarEmpresa } from "./endpoints/empresas/cadastrarEmpresa";
import { buscarEstudante } from "./endpoints/estudantes/buscarEstudantesCadastrados";
import { cadastrarEstudante } from "./endpoints/estudantes/cadastrarEstudante";
import { testeInicial } from "./endpoints/testeInicial";

app.get("/", testeInicial)
//endpoints para Turma


//endpoint para cadastrar estudante
app.post("/cadastro/estudante", cadastrarEstudante )

//endpoint para cadastrar empresa

app.post("/cadastro/empresa", cadastrarEmpresa)

// endpoint para buscar empresas

app.get("/cadastro/empresa", buscarEmpresas)

// endpoint para buscar estudantes

app.get("/cadastro/estudante", buscarEstudante)