// import { useMyContext } from "./ContextAPI-Example/MyContext";

import useMyStore from "./Zustand-Example/sore";

const C = () => {
	// const { count } = useMyContext(); context API count
	const { capitalizeName, name } = useMyStore(); // Zustand capitalizeName
	return (
		<div className="p-4 bg-stone-600">
			{/* <p>{count}</p> */}
			<p>{name}</p>
			<button
				type="button"
				onClick={capitalizeName}
				className="border-2 border-white p-1 rounded-md"
			>
				Capitalize
			</button>
			<br />C
		</div>
	);
};

export default C;
