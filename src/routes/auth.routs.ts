import express from 'express'
import type {   Request   ,Response} from "express";
import { getUser, loginUser, registerUser } from '../controllers/auth.controlle.js';
import { verifyToken } from '../middleweare/auth.middleweare.js';
import { checkRole } from '../middleweare/role.middelwere.js';
import User from '../models/user.model.js';

const router = express.Router();
interface AuthRequest extends Request {
    user?: any;
}

router.post('/register', registerUser)
router.post('/login', loginUser)

router.get('/protected', verifyToken, (req, res) => {
    res.json({ message: "Protected route Hello" })
})


router.get('/admin', verifyToken, checkRole(['admin', 'user']), (req :AuthRequest, res:Response) => {
    if (req.user?.role === "admin") {

        return res.json({ message: "admin route Hello" })
    }
    else {
        return res.json({ message: "user route Hello" })

    }
})

router.get('/me',verifyToken,getUser)

export default router;