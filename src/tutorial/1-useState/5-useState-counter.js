import { useState } from "react";

const useStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  }
  const complexIncrese = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      })
    }, 2000);
  }
  return (
    <>
      <section style={{margin: '4rem 0'}}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue(value - 1)}>Decrease</button>
        <button className='btn' onClick={reset}>Reset</button>
        <button className='btn' onClick={() => setValue(value + 1)}>Increase</button>
      </section>
      <section style={{margin: '4rem 0'}}>
        <h2>More complex Counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrese}>Increase later</button>
      </section>
    </>
  )
}

export default useStateCounter;