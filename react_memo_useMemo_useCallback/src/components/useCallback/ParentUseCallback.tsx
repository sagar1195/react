import { useCallback, useEffect, useState } from "react";
import ChildUseCallback from "./ChildUseCallback";

const ParentUseCallback = () => {
	// Local count state used to demonstrate parent and child renders.
	const [count, setCount] = useState(0);

	// Regular callback function. This function is recreated on every render,
	// so its reference changes even if the implementation stays the same.
	const handleClick = () => {
		console.log("handleClick");
	};

	// Stable callback: useCallback returns the same function reference
	// between renders as long as dependencies don't change.
	// This helps memoized child components avoid unnecessary re-renders.
	const handleClickWithuseCallback = useCallback(() => {
		console.log("handleClickWithuseCallback");
	}, []);

	useEffect(() => {
		console.log("ParentUseCallback render");
	});

	return (
		<div>
			<button type="button" onClick={() => setCount(count + 1)}>
				+
			</button>
			count: {count}{" "}
			<button type="button" onClick={() => setCount(count - 1)}>
				-
			</button>
			<br />
			{/* Example props to show other child input patterns. */}
			{/* <ChildUseCallback name={data.name} /> */}
			{/* <ChildUseCallback data={data} /> */}
			<ChildUseCallback handleClick={handleClickWithuseCallback} />
		</div>
	);
};

export default ParentUseCallback;
