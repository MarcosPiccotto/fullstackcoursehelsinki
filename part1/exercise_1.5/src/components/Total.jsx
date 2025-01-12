const Total = ({parts}) => {

    const sum = parts.reduce((acum,e) => acum + e.exercises ,0)
    
    return (
        <p>Total quantity of exercises is: {sum}</p>
    )
}

export default Total