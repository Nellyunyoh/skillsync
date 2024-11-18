import intern from "../model/userModel.js";

export const createIntern = async (req, res) => {
    try {
        const internData = req.body;
        const { email } = internData;

        const internExist = await Intern.findOne({ email });

        if (internExist) {
            return res.status(400).json({ message: "Intern already exists" });
        }

        const newIntern = new intern(internData);
        await newIntern.save();
        res.status(200).json(newIntern);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const fetchInterns = async (req, res) => {
    try {
        const Interns = await intern.find();
        if (Interns.length === 0) {
            return res.status(404).json({ message: "No Interns found." });
        }
        res.status(200).json(Interns);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const updateIntern = async (req, res) => {
    try {
        const id = req.params.id;
        const internExist = await intern.findById(id);
        if (!internExist) {
            return res.status(404).json({ message: "intern not found" });
        }
        const updatedIntern = await intern.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedIntern);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const deleteIntern = async (req, res) => {
    try {
        const id = req.params.id;
        const internExist = await intern.findById(id);
        if (!internExist) {
            return res.status(404).json({ message: "intern not found" });
        }
        await intern.findByIdAndDelete(id);
        res.status(200).json({ message: "intern deleted" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

