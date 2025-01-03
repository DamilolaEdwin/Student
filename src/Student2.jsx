import PropTypes from 'prop-types'

function Student2(props){
    return(
        <div className="student2">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p className="stu">Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )

}
Student2.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
export default Student2