import React from 'react';
import {
  useDispatch,
} from 'react-redux';
import PropTypes from 'prop-types';

import {
  addTaskGroup,
} from '../../store/actions/data';

const TaskGroups = ({
  taskGroups,
}) => {
  const dispatch = useDispatch();

  const onAddTaskGroupButtonClick = () => {
    dispatch(addTaskGroup());
  };

  return (
    <section className="task-groups">
      <h2 className="task-groups__heading">Списки задач</h2>
      {
        taskGroups.length ? (
          <ul className="task-groups__list">
            {
              taskGroups.map(({
                id,
                heading,
              }) => (
                <li className="task-groups__item" key={id}>
                  <a className="task-groups__link" href={`#${id}`}>{heading}</a>
                </li>
              ))
            }
          </ul>
        ) : (
          <p className="task-groups__stub">Добавьте новый список.</p>
        )
      }
      <ul className='task-groups__buttons-list'>
        <li className='task-groups__buttons-list'>
          <button className='task-groups__add-task-group-button' type='button' onClick={onAddTaskGroupButtonClick}>Добавить новый список</button>
        </li>
      </ul>
    </section>
  );
};

TaskGroups.propTypes = {
  taskGroups: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
  })),
};

export default TaskGroups;
