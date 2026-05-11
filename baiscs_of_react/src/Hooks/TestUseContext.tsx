import { createContext, useContext, useState } from "react";

const CounterContext = createContext(0);

const TestUseContext = () => {
	const [counter, setCounter] = useState(0);

	const increment = () => {
		setCounter(counter + 1);
	};

	return (
		<div>
			<button onClick={increment}>Add</button>
			<CounterContext.Provider value={counter}>
				<ChildComponent />
			</CounterContext.Provider>
		</div>
	);
};

const ChildComponent = () => {
	const counter = useContext(CounterContext);
	return (
		<div>
			<span>Counter: {counter}</span>
		</div>
	);
};
export default TestUseContext;
