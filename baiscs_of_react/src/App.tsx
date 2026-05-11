import React from "react";
import { Child } from "./components/Child";
import ConditionalRendering from "./components/ConditionalRendering";
import Parent from "./components/Parent";

function App() {
	const [count, setCount] = React.useState(0);
	// Child component will call this function when the button inside it is clicked
	const handleChildClick = () => {
		setCount(count - 1);
	};
	return (
		<div>
			<h1>Welcome</h1>
			<Parent greeting="Hello" name="Sagar" />
			<hr />
			<p>Count: {count}</p>
			<button type="button" onClick={() => setCount(count + 1)}>
				Increase
			</button>
			<Child onChildClick={handleChildClick} />
			<hr />
			<ConditionalRendering />
		</div>
	);
}

export default App;
