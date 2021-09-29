import { Request, Response } from 'express';

export default {
    async auth(req: Request, res: Response) {
        return res.json({'ok': 122})
    }
}