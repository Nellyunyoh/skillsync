import Project from "../model/projectModel.js";

export const createProject = async (req, res) => {
    try {
        const projectData = req.body;
        const { name } = projectData;

        const projectExist = await Project.findOne({ name });

        if (projectExist) {
            return res.status(400).json({ message: "Project already exists" });
        }

        const newProject = new project(projectData);
        await newProject.save();
        res.status(200), json(newProject);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const fetchProject = async (req, res) => {
    try {
        const project = await Project.find();
        if (project.length === 0) {
            return res.status(404).json({ message: "No project found" });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const updateProject = async (req, res) => {
    try {
        const id = req.params.id;
        const projectExist = await Project.findById(id);
        if (!projectExist) {
            return res.status(404).json({ message: "Project not found" });
        }
        const updatedProject = await Project.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const deleteProject = async (req, res) => {
    try {
        const id = req.params.id;
        const projectExist = await Project.findById(id);
        if (!projectExist) {
            return res.status(404).json({ message: "Project not found" });
        }
        await Project.findByIdAndDelete(id);
        res.status(200).json({ message: "Project deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
