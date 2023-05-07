import React from 'react';
import Form from '../components/form';
import List from '../components/list';
import style from './app.module.scss';
import { Stopwatch } from '../components/stopwatch';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Stopwatch />
    </div>
  );
}

export default App;
