function Child(props){
    console.log(props)

    //{path, name} 으로 넘겨서
    //const 사진주소 = path; 변수 선언하고 사용해도 됨

    return(
        <div className="card" style={{width: "18rem"}}>
            <img src={props.path} className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text">{props.name}</p>
            </div>
        </div>
    )
}

export default Child;