import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
	value = text=="positive" ? value+" %" : value; 
	return (
		<tr>
			<td>{text} </td>
			<td>{value}</td>
		</tr>
	)
}
const Statistics = ({ good, neutral, bad, all }) => {
	const average = all > 0 ? (good - bad) / all : 0;
	const positive = good > 0 ? (good / all) * 100 : 0;
	return (

		<div>
			<table>
				<tbody>
					<StatisticLine text="good" value={good} />
					<StatisticLine text="neutral" value={neutral} />
					<StatisticLine text="bad" value={bad} />
					<StatisticLine text="all" value={all} />
					<StatisticLine text="average" value={average} />
					<StatisticLine text="positive" value={positive} />
				</tbody>
			</table>

		</div>
	)
}

const Button = ({ onClick, text }) => (
	<button onClick={onClick}>
		{text}
	</button>
);

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const [all, setAll] = useState(0);

	return (
		<div>
			<h1>Give feedback</h1>
			<Button onClick={() => {
				setGood(good + 1);
				setAll(all + 1);
			}} text="Good" />
			<Button onClick={() => {
				setNeutral(neutral + 1);
				setAll(all + 1);
			}} text="Neutral" />
			<Button onClick={() => {
				setBad(bad + 1);
				setAll(all + 1);
			}} text="Bad" />

			<h1>Stadistics</h1>
			{all > 0 ? <Statistics good={good} neutral={neutral} bad={bad} all={all} /> : <p>No feedback given</p>}

		</div>
	)
}

export default App