import { NewTaskForm } from './NewTaskForm.js';   
import { buildTask } from '../utils.js';
import { TaskList } from './TaskList.js';

export const TaskApp = () => {
    const [task, setTask] = React.useState([]);

    const handleDelete = (id) => {
        setTask(task.filter(t => t.id !== id));
    }

    const handleCreateNewTask = (taskName) => {
        const newTask = buildTask(taskName);
        setTask([...task, newTask]);
    }
    
    return React.createElement('div', { className: 'task-app' },
        React.createElement('h2', null, 'Task List'),
        React.createElement(NewTaskForm, { onAdd: handleCreateNewTask }),
        React.createElement(TaskList, { tasks: task, onDelete: handleDelete }),
    );
};
    