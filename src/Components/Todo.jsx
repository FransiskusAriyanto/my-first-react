import { useState } from 'react';
import Button from './Button';
import Card from './Card';
import Input from './Input';

export default function Todo() {
    const [newTask, setNewTask] = useState('');
    const [task, setTask] = useState([]);

    function handleAddTask(e) {
        e.preventDefault();
        setTask((prevTasks) => [
            ...prevTasks,
            {
                id: Math.floor(Math.random() * Date.now()),
                name: newTask,
                completed: false,
            },
        ]);

        setNewTask('');
    }

    function handleCompleteTask(id) {
        const updateTask = task.map((task) => {
            if (id === task.id) {
                return {
                    ...task,
                    completed: !task.completed,
                };
            }

            return task;
        });
        setTask(updateTask);
    }

    function handleRemoveTask(id) {
        const removeTask = task.filter((task) => task.id !== id);
        setTask(removeTask);
    }

    return (
        <Card>
            <Card.Title>Todo</Card.Title>
            <Card.Body>
                <form>
                    <div className='flex items-center gap-x-2'>
                        <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                        <Button onClick={handleAddTask} text={'Add task'} />
                    </div>
                </form>
                {task.length > 0 ? (
                    <ol className={'space-y-2 mt-4'}>
                        {task.map((task) => (
                            <li key={task.id} className={'flex items-center justify-between'}>
                                <span>
                                    {task.name} {task.completed ? 'Complete' : 'Incomplete'}{' '}
                                </span>
                                <div className={'flex items-center gap-2'}>
                                    <button onClick={() => handleCompleteTask(task.id)} className={'px-2 py-1 border text-xs'}>
                                        Mark as {task.completed ? 'incomplete' : 'complete'}
                                    </button>
                                    <button onClick={() => handleRemoveTask(task.id)} className={'px-2 py-1 border text-xs'}>
                                        remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ol>
                ) : null}
            </Card.Body>
            <Card.Footer>You have {task.length} task.</Card.Footer>
        </Card>
    );
}
