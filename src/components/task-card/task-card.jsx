import React from 'react';
import PropTypes from 'prop-types';
import {
  useDispatch,
} from 'react-redux';

import withTaskEditForm from '../../hocs/with-task-edit-form/with-task-edit-form';

import {
  changeTaskFormAction,
} from '../../store/actions/page';
import {
  editTask,
} from '../../store/actions/data';
import {
  TaskFormActionType,
} from '../../const';
import {
  task as taskPropTypes,
} from '../../prop-types';

const TaskCard = ({
  task: {
    id,
    heading,
    description,
    creationDate,
    // deadline,
    isComplete,
  },
}) => {
  const dispatch = useDispatch();

  const onTaskCompleteChange = () => {
    dispatch(editTask({
      id,
      heading,
      description,
      creationDate,
      isComplete: !isComplete,
    }));
  };

  const onEditButtonClick = () => {
    dispatch(changeTaskFormAction({
      type: TaskFormActionType.EDIT,
      id,
    }));
  };

  return (
    <div className='task-card'>
      <h3 className='task-card__heading'>{heading}</h3>
      <p className='task-card__description'>{description}</p>
      <p className='task-card__creation-date'>Дата создания: {creationDate}</p>
      {/* <p className='task-card__deadline'>{deadline}</p> */}
      <div className='task-card__complete-wrapper'>
        <input className='task-card__complete-checkbox' type="checkbox" name="complete" id={`complete-${id}`}
          checked={isComplete} onChange={onTaskCompleteChange}
        />
        <label className='task-card__complete-label' htmlFor={`complete-${id}`}>Выполнено</label>
      </div>
      <ul className='task-card__buttons-list'>
        <li className='task-card__buttons-item'>
          <button className='task-card__expand-button' type='button'>Развернуть</button>
        </li>
        <li className='task-card__buttons-item'>
          <button className='task-card__edit-button' type='button' onClick={onEditButtonClick}>Редактировать</button>
        </li>
        <li className='task-card__buttons-item'>
          <button className='task-card__remove-button' type='button'>Удалить</button>
        </li>
      </ul>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.exact(taskPropTypes).isRequired,
};

export default withTaskEditForm(TaskCard);
