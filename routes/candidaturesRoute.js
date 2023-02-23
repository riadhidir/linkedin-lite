import  express   from 'express';
import {auth} from '../middlewares/auth.js';
import multer from 'multer';
import { getCandidature ,editCandidature} from '../controllers/candidatureController.js';

export  const candidatureRouter = express.Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+".pdf")
    },
  });
const upload = multer({ storage: storage });
//get a specific 'candidature' | roles : [recruteur]
candidatureRouter.get('/:id',auth(['Recruteur','Candidat']), getCandidature);
candidatureRouter.put('/:id/edit',[auth(['Candidat']),upload.single('cv')], editCandidature);