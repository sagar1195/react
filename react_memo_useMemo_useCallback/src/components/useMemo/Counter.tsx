import { useMemo, useState } from "react";

// Simulates an expensive computation.
const expensiveTask = () => {
	for (let i = 0; i < 1000000000; i++) {}
	return false;
};
const Counter = () => {
	const [count, setCount] = useState<number>(0);
	const [quantity, setQuantity] = useState<number>(0);

	// useMemo memoizes the result of expensiveTask and only recomputes
	// when `quantity` changes. This avoids repeated work when `count` changes.
	useMemo(() => {
		return expensiveTask();
	}, [quantity]);

	return (
		<div>
			<button type="button" onClick={() => setCount(count + 1)}>
				Count: {count}
			</button>
			<br />
			<button type="button" onClick={() => setQuantity(quantity + 1)}>
				Quantity: {quantity}
			</button>
		</div>
	);
};

export default Counter;
