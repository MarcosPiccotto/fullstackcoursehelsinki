import { useState } from 'react';

const Anecdote = ({ anecdote, votes, onVote, onNext }) => (
	<div>
		<p>{anecdote}</p>
		<p>has {votes} votes</p>
		{onVote && <button onClick={onVote}>vote</button>}
		{onNext && <button onClick={onNext}>next anecdote</button>}
	</div>
);

const App = () => {
	const anecdotes = [
		'If it hurts, do it more often.',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
		'The only way to go fast, is to go well.'
	];

	const anecdoteLength = anecdotes.length;

	const [selected, setSelected] = useState(0);
	const [votes, setVotes] = useState(Array(anecdoteLength).fill(0));
	const [mostVotes, setMostVotes] = useState(null);

	const handleVote = () => {
		const copyVotes = [...votes];
		copyVotes[selected] += 1;
		setVotes(copyVotes);
		if (mostVotes === null || copyVotes[selected] > copyVotes[mostVotes]) {
			setMostVotes(selected);
		}
	};

	const handleNext = () => {
		setSelected(Math.floor(Math.random() * anecdoteLength));
	};

	return (
		<div>
			<h1>Anecdote of the day</h1>
			<Anecdote
				anecdote={anecdotes[selected]}
				votes={votes[selected]}
				onVote={handleVote}
				onNext={handleNext}
			/>
			<h1>Anecdote with the most votes</h1>
			{mostVotes !== null ? <Anecdote
				anecdote={anecdotes[mostVotes]}
				votes={votes[mostVotes]}
			/> : <p>Nobody voted any anecdotes</p>}
		</div>
	);
};

export default App;
