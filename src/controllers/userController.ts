import { Request, Response } from 'express';

export const nome = (req: Request, res: Response) => {
    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string; // todo dado de formulário é enviado como string
    res.render('nome', {
        nome, 
        idade
    });
};

export const idadeForm = (req: Request, res: Response) => {
    res.render('idade');
};

export const idadeAction = (req: Request, res: Response) => {
    let mostrarIdade: boolean = false;
    let idade: number = 0;

    if (req.body.ano) {  // se req.query.idade for enviado
        let anoNascimento: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }
    
    res.render('idade', {
        idade,
        mostrarIdade
    });
};