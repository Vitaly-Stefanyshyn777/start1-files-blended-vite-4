import { GridItem, Text } from 'components';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './Todo.module.css'
import { useDispatch } from 'react-redux';
import { deleteTodo } from 'reduxTodo/todoSlice';

export const Todo = ({ todoData, idx }) => {
  const dispatch = useDispatch();
  const handleDelete = () => { 
    dispatch(deleteTodo(todoData.id))
  };
  return (
    <GridItem>
  <div className={style.box}>
    <Text textAlign="center" marginBottom="20">
      TODO {idx +1}
    </Text>

        <Text>{todoData.text }</Text>
        <button onClick={handleDelete} className={style.deleteButton} type="button">
          <RiDeleteBinLine size={24} />
    </button>
    <button className={style.editButton} type="button">
      <RiEdit2Line size={24} />
    </button>
  </div>
</GridItem>
  );
};
