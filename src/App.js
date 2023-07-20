import "bootstrap/dist/css/bootstrap.min.css"
import { useRef, useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userAddr, setUserAddr] = useState("");
  const [userArray, setUserArray] = useState([]);
  const ref = useRef();

  function handleName(event){
    //console.log(event.target.value);
    setUserName(event.target.value);
  }

  function handleAge(event){
    //console.log(event.target.value);
    setUserAge(event.target.value);
  }

  function handleAddr(event){
    //console.log(event.target.value);
    setUserAddr(event.target.value);
  }
   
  function onSubmit(event){
    event.preventDefault()
    const tempObject = {
      name : userName,
      age : userAge,
      addr : userAddr
    }
    //console.log(tempObject);

    //setUserArray(userArray.concat(tempObject));
    setUserArray((preVal => [...preVal, tempObject]));  // ...preVal : 배열을 풀어헤친다. 안의 객체만 나옴
    // 새로운 객체를 집어넣고 []로 싸서 새로운 배열로 만듬 -> 기존 값 불변성
    //console.log(userArray);

    setUserName("");
    setUserAge("");
    setUserAddr("");
    ref.current.focus();
  }

  return (
    <div className="container mt-3 text-center">
      <h1>회원 정보 관리 앱 😆</h1>
      <hr/>

      <form>
        <input ref={ref} onChange={handleName} value={userName} className="form-control mb-2" type="text" placeholder="이름 입력"/>
        <input onChange={handleAge} value={userAge} className="form-control mb-2" type="text" placeholder="나이 입력"/>
        <input onChange={handleAddr} value={userAddr} className="form-control mb-2" type="text" placeholder="주소 입력"/>

        <button onClick={onSubmit} className="btn btn-primary">등록하기</button>
      </form>
      <br/>
      <hr/>

      <h1>가입된 회원 목록 👫</h1>
      
      {userArray.length > 0? <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>주소</th>
          </tr>
        </thead>

        <tbody>
          {userArray.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.addr}</td>
              </tr>
            )

          })}
        </tbody>
      </table> : <p className="text-danger fw-bold">데이터가 없습니다. 입력해주세요.</p>}

    </div>
  );
}

export default App;
