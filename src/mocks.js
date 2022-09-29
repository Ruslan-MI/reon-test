import {
  nanoid,
} from '@reduxjs/toolkit';
import dayjs from 'dayjs';

export const taskGroups = [
  {
    id: nanoid(),
    heading: 'Домашние дела',
    taskList: [
      {
        id: nanoid(),
        heading: 'Помыть посуду',
        description: 'Вымыть тарелки и столовые приборы',
        deadline: dayjs().subtract(1, 'day').toISOString(),
        isComplete: false,
      },
      {
        id: nanoid(),
        heading: 'Повесить полку',
        description: 'Просверлить отверстия в стене и повесить полку',
        deadline: dayjs().add(1, 'day').toISOString(),
        isComplete: false,
      },
    ],
  },
];
