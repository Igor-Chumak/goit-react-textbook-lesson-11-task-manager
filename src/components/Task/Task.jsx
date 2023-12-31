import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
// import { deleteTask, toggleCompleted } from 'redux/actions';
import css from './Task.module.css';
import { deleteTask, toggleCompleted } from 'redux/taskSlice';
// import { deleteTask, toggleCompleted } from 'redux/reducer';

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToggle = () => dispatch(toggleCompleted(task.id));
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        onChange={handleToggle}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn}>
        <MdClose size={24} onClick={handleDelete} />
      </button>
    </div>
  );
};
