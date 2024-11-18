import Mentor from "../model/mentorModel.js";

export const createMentor = async (req, res) => {
    try {
        const mentorData = req.body;
        const { email } = mentorData;

        const mentorExist = await Mentor.findOne({ email });

        if (mentorExist) {
            return res.status(400).json({ message: "Mentor already exists" });
        }

        const newMentor = new Mentor(mentorData);
        await newMentor.save();
        res.status(200).json(newMentor);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const fetchMentors = async (req, res) => {
    try {
        const mentors = await Mentor.find();
        if (mentors.length === 0) {
            return res.status(404).json({ message: "No mentors found." });
        }
        res.status(200).json(mentors);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const updateMentor = async (req, res) => {
    try {
        const id = req.params.id;
        const mentorExist = await Mentor.findById(id);
        if (!mentorExist) {
            return res.status(404).json({ message: "Mentor not found" });
        }
        const updatedMentor = await Mentor.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedMentor);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const deleteMentor = async (req, res) => {
    try {
        const id = req.params.id;
        const mentorExist = await Mentor.findById(id);
        if (!mentorExist) {
            return res.status(404).json({ message: "Mentor not found" });
        }
        await Mentor.findByIdAndDelete(id);
        res.status(200).json({ message: "Mentor deleted" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};