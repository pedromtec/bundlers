import { TaskItem } from "./TaskItem.js";

export const TaskList = ({ tasks, onDelete }) => {

    if(tasks.length === 0) {
        return React.createElement('p', null, 'No tasks available.');
    }
    
    return React.createElement('ul', { className: 'task-list' },
        tasks.map(t =>
            React.createElement(TaskItem, { key: t.id, task: t, onDelete: onDelete })
        )
    );
}
