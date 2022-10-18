import React, {useState, useEffect} from 'react'

const Timmer = () => {
    const [count, setCount] = useState(0)
    const [countM, setCountM] = useState(0)

  function CountUp() {
    setCount(prev => prev + 1)
    setCountM(prev => prev > 60 ? prev + 1 : 0)
}
  function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
   useEffect(() => {
      setInterval(CountUp, (1000));
      return () => clearInterval(CountUp);
   },[])

  return (
    <p>{`${checkTime(countM)}:${checkTime(count)}`}</p>
  )
}

export default Timmer