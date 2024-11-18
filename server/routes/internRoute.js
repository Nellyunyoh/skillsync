import express from 'express';
import { createIntern, fetchInterns, updateInterns, deleteIntern } from "../controller/InternController.js";

const router = express.Router();

router.post ("/", createIntern);
router.get("/", fetchInterns);
router.put("/:id", updateInterns);
router.delete("/:id", deleteIntern);

export default router;