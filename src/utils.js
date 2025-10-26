export const buildTask = (taskName) => {
    return { id: Date.now(), name: taskName, completed: false };
}