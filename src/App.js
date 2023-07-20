import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";

function App() {
    // 1번째 인자 -> 변수 / 2번째 인자 -> 변수의 값을 변화시킬 함수
    // 2번째 인자의 가장 앞에는 무조건 set 키워드를 붙여서 사용
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);

    
    // 1. 항상 렌더링이 된다
    // 항상 렌더링 되는 경우는 거의 없음!
    useEffect(() => {
      console.log("항상 렌더링 👌")
    })

    // 2. 처음에만 렌더링이 된다
    useEffect(() => {
      console.log("처음에만 렌더링 👍")
    }, [])

    // 3. count 변수의 상태가 변할 때 렌더링이 된다
    useEffect(() => {
      console.log("count 변수 렌더링 🔍")
    }, [count])

    // 3. count2 변수의 상태가 변할 때 렌더링이 된다
    useEffect(() => {
      console.log("count2 변수 렌더링 👀")
    }, [count2])



    function increase(){
      //setCount(count+1);
      //setCount((이전값) => console.log(이전값));
      setCount((이전값) => 이전값+1);
    }

    function decrease(){
      //setCount(count-1);
      setCount((preval) => preval-1);
  }

    function mutiple(){
      setCount2((preval) => preval*2);
  } 

    function zeroset(){
      setCount(0);
    }


  return (
    <div className="container text-center mt-3">
        <h1>React Hooks</h1>
        <hr/>
        <h4>현재 값은 : {count}</h4>

        <button className="btn btn-primary me-2 mb-3"
          onClick={increase}>
            증가
        </button>

        <button className="btn btn-primary me-2 mb-3"
          onClick={decrease}>
            감소
        </button>

        <button className="btn btn-primary mb-3"
          onClick={zeroset}>
            초기화
        </button>


        <h4>현재 값은 : {count2}</h4>
        <button className="btn btn-primary"
          onClick={mutiple}>
            X 2
        </button>

    </div>
  );
}

export default App;
