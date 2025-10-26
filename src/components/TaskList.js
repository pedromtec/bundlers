import { TaskItem } from "./TaskItem";

export const TaskList = ({ tasks, onDelete }) => {
    if(tasks.length === 0) {
        return <p>No tasks available</p>;
    }

    return (
        <ul className='task-list'>
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} onDelete={onDelete} />
            ))}
        </ul>
    );
}

