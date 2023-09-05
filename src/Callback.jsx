import { useCallback, useState } from "react";

function Callback() {
  const [count, setCount] = useState(0);

  const [a, setA] = useState(3);
  const [b, setB] = useState(4);

  const [sum,setSum] = useState(0);

  const handleSum1 = () => {
    setSum(a+b);
  }

  const handleSum2 = useCallback(() => {
    setSum(a+b);
  },[])
  const handleSum3 = useCallback(() => {
    setSum(a+b);
  },[a,b])

  return (
    <>
      start
      <button onClick={() => setA((prev) => prev + 1)}>increase A</button>
      <h1>{a}</h1>
      <h1>{b}</h1>
      <span>sum= {sum}</span>
      <br/>
      <button onClick={handleSum1}>sum1</button>
      <br/>
      <button onClick={handleSum2}>sum2</button>
      <br/>
      <button onClick={()=>handleSum3(a,b)}>sum3</button>
 
    </>
  );
}

export default Callback;
