import React, { useState } from 'react';
import Form from '../components/form';
import List from '../components/list';
import style from './app.module.scss';
import { Stopwatch } from '../components/stopwatch';
import { ITask } from '../types/task';

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [select, setSelect] = useState<ITask>();

  function selectTask(taskSelected: ITask) {
    setSelect(taskSelected);
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      select: task.id === taskSelected.id ? true : false
    })));
  }

  function endTask() {
    if(select) {
      setSelect(undefined);
      setTasks(oldTasks => oldTasks.map(task => {
        if(task.id === select.id){
          return{
            ...task,
            select: false,
            concluded: true
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List 
      tasks={tasks}
      selectTask={selectTask}
      />
      <Stopwatch 
      select={select}
      endTask={endTask}
      />
    </div>
  );
}

export default App;
