// import { timeToSeconds } from '../../common/utils/time';
// import Button from '../button';
// import Clock from './clock';
// import style from './stopwatch.module.scss'
// import { ITask } from '../../types/task';
// import { useEffect, useState } from 'react';

// interface Props {
//     select: ITask | undefined
// }

// export function Stopwatch({ select }: Props){
//     const [time, setTime] = useState<Number>();

//     useEffect(() => {
//         if(select?.time) {
//             setTime(timeToSeconds(select?.time))
//         }
//     },[select])
//     return( 
//         <div className={style.stopwatch}>
//             <p className={style.title}> Choose a card and start the timer </p>
//             <div className={style.watchWrapper}>
//                 <Clock time={time}/>
//             </div>
//             <Button onClick={() => console.log('Starting')}>
//                 Start!
//             </Button>
//         </div>
//     )
// }

import { timeToSeconds } from '../../common/utils/time';
import Button from '../button';
import Clock from './clock';
import style from './stopwatch.module.scss';
import { ITask } from '../../types/task';
import { useEffect, useState } from 'react';

interface Props {
  select: ITask | undefined;
  endTask: () => void
}

export function Stopwatch({ select, endTask }: Props) {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    if (select?.time) {
      setTime(timeToSeconds(select?.time));
    }
  }, [select]);

  function regressive(counter: number = 0){
    setTimeout(() => {
        if(counter > 0){
            setTime(counter - 1)
            return regressive(counter - 1);
        }
        endTask();
    }, 1000)
  }

  return (
    <div className={style.stopwatch}>
      <p className={style.title}> Choose a card and start the timer </p>
      <div className={style.watchWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressive(time)}>Start!</Button>
    </div>
  );
}
