import { useDispatch } from 'react-redux';
import style from './Filter.module.css';
import { setFilter } from 'reduxTodo/todoSlice';

export const Filter = () => {
  const disPatch = useDispatch()
  const hendelCange = (e) => {
  const g1 = e.target.value 
  disPatch(setFilter(g1))
  }
  return <input onChange={hendelCange} className={style.input} placeholder="Find it" name="filter" />;
};
