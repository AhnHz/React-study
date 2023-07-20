import Child from "./Child";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  const subject = "React!!";
  const sampleTag = <h3>데이터 바인딩 연습중</h3>
  const 과일 = ["사과", "복숭아", "자두", "레몬"];

  return (
    <div className="container text-center">
      <h1 style={{color:"gray"}}>{subject} 공부를 시작합니다</h1>
      {sampleTag}
      <hr/>
      <br/>

      {과일.map((item, index) => {
        return(
          <p>{index+1}번째 과일은 {item}입니다.</p>
        )
      })} 
      <hr/>
      <br/>
      
      
      <Child path={"https://www.pinkyprintsco.com/cdn/shop/products/image_cec4fb26-f1de-4d76-9517-584f516d47e2_1057x.jpg?v=1596770290"} 
              name={"포차코"}/>

      <Child path={"https://storage.googleapis.com/sticker-prod/KGZtpblAocHmd4kUK2jH/2.png"} 
              name={"안녕"}/>
      <Child path={"https://storage.googleapis.com/sticker-prod/KGZtpblAocHmd4kUK2jH/35.png"} 
              name={"바쁘다 바빠"}/>
    </div>
  );
}

export default App;
