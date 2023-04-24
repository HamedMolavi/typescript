import { Request, Response, RequestHandler } from 'express'
import { User } from '../models/user';


export const userGetHandler: RequestHandler = function (req: Request, res: Response) {
    res.send({ succes: true, result: User.users });
};

export const userPostHandler: RequestHandler = function (req: Request, res: Response) {
    const username: string = req.body['username'];
    try {
        const user = new User(username);
        res.send({ succes: true, result: 'OK' });
    } catch {
        res.send({ succes: true, result: 'failed!' });
    }
};

