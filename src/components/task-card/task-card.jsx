import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import dayjs from 'dayjs';

import withTaskEditForm from '../../hocs/with-task-edit-form/with-task-edit-form';

import {
  changeTaskFormAction,
} from '../../store/actions/page';
import {
  editTask,
  removeTask,
} from '../../store/actions/data';
import {
  StoreNameSpace,
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
    isComplete,
  },
}) => {
  const {
    currentTaskGroupID,
  } = useSelector((state) => ({
    ...state[StoreNameSpace.PAGE],
  }));

  const [
    localState,
    setLocalState,
  ] = useState({
    isExpanded: false,
  });

  const dispatch = useDispatch();

  const onTaskCompleteChange = () => {
    dispatch(editTask({
      task: {
        id,
        heading,
        description,
        creationDate,
        isComplete: !isComplete,
      },
      currentTaskGroupID,
    }));
  };

  const onExpandButtonClick = () => {
    setLocalState(() => ({
      ...localState,
      isExpanded: !localState.isExpanded,
    }));
  };

  const onEditButtonClick = () => {
    dispatch(changeTaskFormAction({
      type: TaskFormActionType.EDIT,
      id,
    }));
  };

  const onRemoveButtonClick = () => {
    dispatch(removeTask({
      id,
      currentTaskGroupID,
    }));
  };

  return (
    <div className='task-card'>
      <h3 className='task-card__heading'>{heading}</h3>
      {
        localState.isExpanded &&
        <>
          <p className='task-card__description'>{description}</p>
          <p className='task-card__creation-date'>Дата создания: {dayjs(creationDate).format('DD.MM.YYYYг. - HH:mm')}</p>
        </>
      }
      <div className='task-card__complete-wrapper'>
        <input className='task-card__complete-checkbox' type="checkbox" name="complete" id={`complete-${id}`}
          checked={isComplete} onChange={onTaskCompleteChange}
        />
        <label className='task-card__complete-label' htmlFor={`complete-${id}`}>Выполнено</label>
      </div>
      <ul className='task-card__buttons-list'>
        <li className='task-card__buttons-item'>
          <button className='task-card__expand-button' type='button' onClick={onExpandButtonClick}>
            {localState.isExpanded ? 'Свернуть' : 'Развернуть'}
          </button>
        </li>
        <li className='task-card__buttons-item'>
          <button className='task-card__edit-button' type='button' onClick={onEditButtonClick}>Редактировать</button>
        </li>
        <li className='task-card__buttons-item'>
          <button className='task-card__remove-button' type='button' onClick={onRemoveButtonClick}>Удалить</button>
        </li>
      </ul>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.exact(taskPropTypes).isRequired,
};

export default withTaskEditForm(TaskCard);
