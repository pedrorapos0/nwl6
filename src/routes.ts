import {Router} from 'express';
import UserController from './controllers/UserController';
import TagController from './controllers/TagController';
import SessionController from './controllers/SessionController';
import ComplimentController from './controllers/ComplimentController';
import ensureAdmin from './middlewares/ensureAdmin';


export const router = Router();
const userController = new UserController();
const tagController = new TagController();
const sessionController = new SessionController();
const complimentController = new ComplimentController();

router.post('/users', userController.create);

router.post('/tags', ensureAdmin, tagController.create);

router.post('/session', sessionController.create);

router.post('/compliments', complimentController.create);




