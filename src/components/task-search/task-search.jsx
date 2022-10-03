import React from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  StoreNameSpace,
} from '../../const';
import {
  changeTaskSearch,
} from '../../store/actions/page';

const TaskSearch = () => {
  const {
    taskSearch,
  } = useSelector((state) => ({
    ...state[StoreNameSpace.PAGE],
  }));

  const dispatch = useDispatch();

  const onInputSearchChange = (evt) => {
    dispatch(changeTaskSearch(evt.target.value.toLowerCase()));
  };

  const onResetButtonClick = () => {
    dispatch(changeTaskSearch(''));
  };

  return (
    <section className='task-search'>
      <h2 className='task-search__heading'>Поиск задачи</h2>
      <div className='task-search__input-wrapper'>
        <label className='task-search__input-label' htmlFor="search">Введите текст поиска:</label>
        <input className='task-search__input' type="text" name="search" id="search"
          value={taskSearch} onChange={onInputSearchChange}
        />
        <button className='task-search__reset-button' type='button' onClick={onResetButtonClick}>Сбросить</button>
      </div>
    </section>
  );
};

export default TaskSearch;
