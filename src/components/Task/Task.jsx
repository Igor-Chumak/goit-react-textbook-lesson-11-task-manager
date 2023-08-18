import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { deleteTask } from 'redux/actions';
import css from './Task.module.css';

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(task.id));
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn}>
        <MdClose size={24} onClick={handleDelete} />
      </button>
    </div>
  );
};
