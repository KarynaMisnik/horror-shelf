import React, { useState, useEffect } from 'react';

const  CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const days = ['SSUNun', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const months = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
  ];

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  const dayOfWeek = days[time.getDay()];
  const month = months[time.getMonth()];

  return (
    <div sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <p>
        {formattedHours}:{minutes < 10 ? '0' : ''}{minutes}:{seconds < 10 ? '0' : ''} {ampm}
      </p>
      <div sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <p>{dayOfWeek} </p>
      <p>{time.getDate()} </p>
      <p>{month} </p>
      </div>
    </div>
  );
}

export default CurrentTime;
