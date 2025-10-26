import { NewTaskForm } from './NewTaskForm';   
import { buildTask } from '../utils';
import { TaskList } from './TaskList';

export const TaskApp = () => {
    const [task, setTask] = React.useState([]);

    const handleDelete = (id) => {
        setTask(task.filter(t => t.id !== id));
    }

    const handleCreateNewTask = (taskName) => {
        const newTask = buildTask(taskName);
        setTask([...task, newTask]);
    }
  
    return (
        <div className='task-app'>
            <h2>Task List</h2>
            <NewTaskForm onAdd={handleCreateNewTask} />
            <TaskList tasks={task} onDelete={handleDelete} />
        </div>
    );
};
    