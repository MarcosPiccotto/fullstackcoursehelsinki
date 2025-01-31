import { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456', id: 1 },
		{ name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
		{ name: 'Dan Abramov', number: '12-43-234345', id: 3 },
		{ name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
	]);

	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [filterPerson, setFilterPerson] = useState('');

	const addPerson = (event) => {
		event.preventDefault();

		if (persons.some(person => person.name === newName)) {
			alert(`${newName} is already added to phonebook`);
			return;
		}

		const newPerson = {
			name: newName,
			number: newNumber,
			id: persons.length + 1
		};

		setPersons(persons.concat(newPerson));
		setNewName('');
		setNewNumber('');
	};

	const filteredPersons = filterPerson !== ""
		? persons.filter(person => person.name.toLowerCase().includes(filterPerson.toLowerCase()))
		: persons;

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter filterPerson={filterPerson} handleFilterChange={(event) => setFilterPerson(event.target.value)} />

			<h3>Add a new</h3>
			<PersonForm
				newName={newName}
				newNumber={newNumber}
				handleNameChange={(event) => setNewName(event.target.value)}
				handleNumberChange={(event) => setNewNumber(event.target.value)}
				addPerson={addPerson}
			/>

			<h3>Numbers</h3>
			<Persons persons={filteredPersons} />
		</div>
	);
};

export default App;
