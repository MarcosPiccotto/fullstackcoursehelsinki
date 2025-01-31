import Part from "./Part.jsx"
const Content = ({parts}) => {

    return (
        <div>
            {parts.map((e,i) => <Part key={i} name={e.name} exercise={e.exercises} />)}
        </div>

    )
}

export default Content