const Total = ({parts}) => {

    const sum = parts.reduce((acum,e) => acum + e.exercises ,0)
    
    return (
        <strong>Total of {sum} exercises</strong>
    )
}

export default Total