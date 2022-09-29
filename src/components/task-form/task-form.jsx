import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  useDispatch,
} from 'react-redux';
// import dayjs from 'dayjs';

import {
  editTask,
} from '../../store/actions/data';
import {
  changeTaskFormAction,
} from '../../store/actions/page';
import {
  task as taskPropTypes,
} from '../../prop-types';

const initialState = {
  heading: '',
  description: '',
  // deadline: '',
};

const TaskForm = ({
  task,
}) => {
  const [
    localState,
    setLocalState,
  ] = useState({
    ...initialState,
    ...task,
  });

  const dispatch = useDispatch();

  const onFormChange = (evt) => {
    const {
      name,
      value,
    } = evt.target;

    setLocalState(() => ({
      ...localState,
      [name]: value,
    }));
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    dispatch(editTask(localState));
    dispatch(changeTaskFormAction(null));
  };

  return (
    <form className='task-form' onChange={onFormChange} onSubmit={onFormSubmit}>
      <div className='task-form__input-wrapper'>
        <label className='task-form__input-label' htmlFor="heading">Заголовок:</label>
        <input className='task-form__input' type="text" name="heading" id="heading" value={localState.heading} onChange={() => { }} />
      </div>
      <div className='task-form__input-wrapper'>
        <label className='task-form__input-label' htmlFor="description">Описание:</label>
        <textarea className='task-form__input' name="description" id="description" cols="30" rows="10" value={localState.description} onChange={() => { }} />
      </div>
      {/* <div className='task-form__input-wrapper'>
        <label className='task-form__input-label' htmlFor="deadline">Выполнить до:</label>
        <input className='task-form__input' type="datetime-local" name="deadline" id="deadline" value={localState.deadline} onChange={() => { }} />
      </div> */}
      <ul className='task-card__buttons-list'>
        <li className='task-card__buttons-item'>
          <button className='task-card__submit-button' type='submit'>Сохранить изменения</button>
        </li>
        <li className='task-card__buttons-item'>
          <button className='task-card__reset-button' type='reset'>Очистить форму</button>
        </li>
        <li className='task-card__buttons-item'>
          <button className='task-card__cancel-button' type='button'>Отменить редактирование</button>
        </li>
        <li className='task-card__buttons-item'>
          <button className='task-card__remove-button' type='button'>Удалить задачу</button>
        </li>
      </ul>
    </form>
  );
};

TaskForm.propTypes = {
  task: PropTypes.exact(taskPropTypes).isRequired,
};

export default TaskForm;
