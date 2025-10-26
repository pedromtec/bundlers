export const NewTaskForm = ({ onAdd }) => {
    const [taskName, setTaskName] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskName.trim()) return;
        onAdd(taskName);
        setTaskName('');
    };

    return (
      <form onSubmit={handleSubmit} className='new-task-form'>
        <input
            type='text'
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder='Enter new task'
            className='task-input'
        />
        <button type='submit' className='add-task-button'>Add Task</button>
    </form>
   );
};