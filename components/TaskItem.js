export const TaskItem = ({ task, onDelete }) => {
    return React.createElement('li', {className: 'task-item'},
        React.createElement('span', null, task.name),
        React.createElement('button', { onClick: () => onDelete(task.id) }, 'Delete')
    );
}
