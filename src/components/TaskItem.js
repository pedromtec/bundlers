export const TaskItem = ({ task, onDelete }) => {
    return (
        <li className='task-item'>
            <span>{task.name}</span>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
    );
}
    