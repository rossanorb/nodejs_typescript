import { Request, Response } from 'express';

const myMiddleware = (req: Request, res: Response, next: any) => {
    console.log(req.url);
    next();
}

export default myMiddleware;
