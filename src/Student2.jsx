
function Student2(props){
    return(
        <div className="student2">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p className="stu">Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )

}

export default Student2