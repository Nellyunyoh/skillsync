import express from 'express';
import { createIntern, fetchInterns, updateIntern, deleteIntern } from "../controller/InternController.js";

const router = express.Router();
router.post("/", createIntern);
router.get("/", fetchInterns);
router.put("/:id", updateIntern);
router.delete("/:id", deleteIntern);

export default router;