import  express   from 'express';
import {auth} from '../middlewares/auth.js';
import {addCategorie, deleteCategorie,editCategorie,getAllCategories} from '../controllers/Categoriecontroller.js'
export  const categorieRouter = express.Router();
categorieRouter.post('/',auth(['Admin']),(addCategorie));
categorieRouter.get('/',auth(['Admin']),getAllCategories);
categorieRouter.delete('/:id',auth(['Admin']),deleteCategorie);
categorieRouter.put('/:id',auth(['Admin']),editCategorie);