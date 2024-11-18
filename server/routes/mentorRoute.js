import express from 'express';
import { createMentor, fetchMentors, updateMentors, deleteMentor } from "../controller/userController.js";

const router = express.Router();

router.post ("/", createMentors);
router.get("/", fetchMentors);
router.put("/:id", updateMentors);
router.delete("/:id", deleteMentors);

export default router;