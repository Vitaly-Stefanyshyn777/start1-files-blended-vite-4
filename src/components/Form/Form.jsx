import { FiSearch } from 'react-icons/fi';

import { Formik, Form as FormWrap, Field } from 'formik';
import { addTodo } from 'reduxTodo/todoSlice';

import style from './Form.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values,actions) => {
    const newTodo = {
      ...values,
      id: nanoid(),
    };
    dispatch(addTodo(newTodo));
    actions.resetForm();
  };
  return (
    <Formik onSubmit={handleSubmit} initialValues={{ text: '' }}>
      <FormWrap className={style.form}>
        <button className={style.button} type="submit">
          <FiSearch size="16px" />
        </button>

        <Field
          name="text"
          className={style.input}
          placeholder="What do you want to write?"
          required
          autoFocus
        />
      </FormWrap>
    </Formik>
  );
};
