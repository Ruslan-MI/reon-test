import React from 'react';
import PropTypes from 'prop-types';

const TaskGroups = ({
  taskGroups,
}) => (
  <section className="task-groups">
    <h2 className="task-groups__heading">Списки задач</h2>
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
  </section>
);

TaskGroups.propTypes = {
  taskGroups: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
  })),
};

export default TaskGroups;
