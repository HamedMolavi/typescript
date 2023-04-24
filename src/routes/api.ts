import { Router } from 'express'
import { userGetHandler, userPostHandler } from './user';userGetHandler

export const router = function () {
    const router = Router()
    router.get('/user', userGetHandler);
    router.post('/user', userPostHandler);
    return router;
}()

