import { useEffect } from "react";
import C from "./C";
// import { useMyContext } from "./ContextAPI-Example/MyContext";
import D from "./D";
import useMyStore from "./Zustand-Example/sore";

const A = () => {
	// const { count } = useMyContext(); // Context API Example

	// const { count } = useMyStore(); // This Zustand syntax will cause the entire component to re-render whenever the count changes, even if count is not used directly in the component. This is because useMyStore() returns the entire state object, and any change to that object will trigger a re-render.

	const count = useMyStore((state) => state.count); // This syntax allows you to subscribe to specific parts of the state, in this case, count. The component will only re-render when count changes, not when other parts of the state change.

	useEffect(() => {
		console.log("A component rendered");
	});

	return (
		<div className="bg-amber-800 p-10">
			A{count}
			<div className="flex flex-row">
				<C />
				<D />
			</div>
		</div>
	);
};

export default A;
