// import { useMyContext } from "./ContextAPI-Example/MyContext";
import { useEffect } from "react";
import useMyStore from "./Zustand-Example/sore";

const F = () => {
	// const { setCount } = useMyContext(); // Context API Example
	// const { increment } = useMyStore(); // Zustand Example
	const increment = useMyStore((state) => state.increment); // Zustand Example

	useEffect(() => {
		console.log("F component rendered");
	});

	return (
		<div className="p-4 bg-purple-700">
			F{" "}
			<button
				className="p-1 border-2 border-white rounded-md"
				type="button"
				// onClick={() => setCount((prev: number) => prev + 1)}
				onClick={() => increment()}
			>
				+
			</button>
		</div>
	);
};

export default F;
