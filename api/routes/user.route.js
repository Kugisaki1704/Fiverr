import express from "express";
<<<<<<< HEAD
import { deleteUser, getUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.delete("/:id", verifyToken, deleteUser);
router.get("/:id", getUser);
=======
import {deleteUser} from "../controller/user.controller.js";

const router = express.Router();

router.delete("/:id", deleteUser);

>>>>>>> aff9519910aa01923830c111f93764e4f3f9054a

export default router;
