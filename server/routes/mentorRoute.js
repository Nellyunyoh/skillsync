import express from 'express';
import { createMentor, fetchMentor, updateMentor, deleteMentor } from "../controller/MentorController.js";

const router = express.Router();

router.post ("/", createMentor);
router.get("/", fetchMentor);
router.put("/:id", updateMentor);
router.delete("/:id", deleteMentor);

export default router;