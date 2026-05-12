import { useEffect, useState } from "react";
import MemoChild from "./MemoChild";

const MemoParent = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("");

	useEffect(() => {
		console.log("Parent rendered", name);
	});

	return (
		<div>
			{/* MemoChild receives only the count prop. */}
			<MemoChild count={count} />

			{/* Changing the input updates the parent state and triggers a parent render. */}
			<input type="text" onChange={(e) => setName(e.target.value)} />

			<button type="button" onClick={() => setCount(count + 1)}>
				+
			</button>
		</div>
	);
};

export default MemoParent;
