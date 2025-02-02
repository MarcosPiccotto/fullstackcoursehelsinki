const Persons = ({ persons }) => {
    return (
        <div>
            {persons.map(person => (
                <div key={person.id}>
                    <p>{person.name} {person.number}</p>
                </div>
            ))}
        </div>
    );
};

export default Persons;
