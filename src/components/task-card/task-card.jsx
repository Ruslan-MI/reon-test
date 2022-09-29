import React from 'react';
import PropTypes from 'prop-types';

const TaskCard = ({
  task: {
    id,
    heading,
    description,
    deadline,
    isComplete,
  },
}) => {
  const onTaskCompleteChange = () => {
    // eslint-disable-next-line
    console.log(id);
  };

  return (
    <div className='task-card'>
      <h3 className='task-card__heading'>{heading}</h3>
      <p className='task-card__description'>{description}</p>
      <p className='task-card__deadline'>{deadline}</p>
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
          <button className='task-card__edit-button' type='button'>Редактировать</button>
        </li>
        <li className='task-card__buttons-item'>
          <button className='task-card__remove-button' type='button'>Удалить</button>
        </li>
      </ul>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.exact({
    id: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    description: PropTypes.string,
    deadline: PropTypes.string,
    isComplete: PropTypes.bool.isRequired,
  }),
};

export default TaskCard;
