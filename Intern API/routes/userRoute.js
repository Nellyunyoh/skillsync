import express from 'express';
import { createIntern, fetchInterns, updateInterns, deleteIntern } from "../controller/userController.js";

const router = express.Router();

router.post ("/createInterns", createIntern);
router.get("/fetchInterns", fetchInterns);
router.put("/updateInterns/:id", updateInterns);
router.delete("/deleteInterns/:id", deleteIntern);

export default router;