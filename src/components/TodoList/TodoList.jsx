import { Grid, Text, Todo } from 'components';
import { useSelector } from 'react-redux';

export const TodoList = () => {
    const todos = useSelector(state => state.todos.items);

  return (
    <>
      {/* <Text textAlign="center">We did not find any todo😯</Text> */}
      <Grid>
        {todos.map((todo, idx) => (
          <Todo key={todo.id}
            todoData={todo}
            idx={idx } />
       ))} 
</Grid>
    </>
  );
};
