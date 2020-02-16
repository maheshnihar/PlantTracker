import { Request, Response } from 'express';


export const healthCheck = (_req: Request, res: Response) => {
    return res.send('API is working 🤓');
};