import { userRegistration } from '../Controller/userController';
import express, { Request, Response, Router } from 'express';
const router = Router();

router.get('/userRegister', async (req: Request, res: Response) => { res.status(200).send(await userRegistration(req, res)) })

export default router;