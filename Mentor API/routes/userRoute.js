import express from 'express';
import { createMentor, fetchMentors, updateMentors, deleteMentor } from "../controller/userController.js";

const router = express.Router();

router.post ("/createMentors", createMentors);
router.get("/fetchMentors", fetchMentors);
router.put("/updateMentors/:id", updateMentors);
router.delete("/deleteMentors/:id", deleteMentors);

export default router;