import React from 'react';
import PropTypes from 'prop-types';

import TaskForm from '../../components/task-form/task-form';

import {
  task as taskPropTypes,
} from '../../prop-types';

const withTaskEditForm = (Component) => {
  const WithTaskEditFormInnerComponent = ({
    task,
    taskFormActionID,
    ...props
  }) => (
    task.id === taskFormActionID ? <TaskForm task={task} {...props} /> : <Component task={task} {...props} />
  );

  WithTaskEditFormInnerComponent.propTypes = {
    task: PropTypes.exact(taskPropTypes).isRequired,
    taskFormActionID: PropTypes.string,
  };

  return WithTaskEditFormInnerComponent;
};

export default withTaskEditForm;
