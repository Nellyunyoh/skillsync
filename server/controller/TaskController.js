import Task from "../model/taskModel.js";

export const createTask = async (req, res) => {
    try {
        const taskData = req.body;
        const { name } = taskData;
        
        const taskExist = await Task.findOne({ name });
        
        if (taskExist) {
            return res.status(400).json({ message: "Task already exists" });
        }
        
        const newTask = new Task(taskData);
        await newTask.save();
        res.status(200).json(newTask);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const fetchTask = async (req, res) => {
    try {
        const task = await Task.find();
        if (task.length === 0) {
            return res.status(404).json({ message: "No tasks found" });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const updateTask = async (req, res) => {
    try {
        const id = req.params.id;
        const taskExist = await Task.findById(id);
        
        if (!taskExist) {
            return res.status(404).json({ message: "Task not found" });
        }
        
        const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        const taskExist = await Task.findById(id);
        
        if (!taskExist) {
            return res.status(404).json({ message: "Task not found" });
        }
        
        await Task.findByIdAndDelete(id);
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
