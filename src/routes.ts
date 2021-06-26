import {Router} from 'express';
import UserController from './controllers/UserController';
import TagController from './controllers/TagController';
import SessionController from './controllers/SessionController';
import ComplimentController from './controllers/ComplimentController';
import ensureAdmin from './middlewares/ensureAdmin';
import ensureAuthenticated from './middlewares/ensureAuthenticated';


export const router = Router();
const userController = new UserController();
const tagController = new TagController();
const sessionController = new SessionController();
const complimentController = new ComplimentController();

router.post('/users', userController.create);

router.get('/users', ensureAuthenticated, userController.index);

router.post('/tags',ensureAuthenticated, ensureAdmin, tagController.create);

router.get('/tags', ensureAuthenticated, ensureAdmin, tagController.index);

router.post('/session', sessionController.create);

router.post('/compliments', ensureAuthenticated, complimentController.create);

router.get('/compliments/received',ensureAuthenticated,complimentController.showReceiveCompliment);

router.get('/compliments/sent',ensureAuthenticated, complimentController.ShowSenderCompliment);




