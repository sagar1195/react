import { useEffect, useMemo, useState } from "react";

// const getFirstLast = (name: string) => {
//   console.log("getFirstLast called");
//   return name.split(" ");
// };

const TestingPerformenceHooks = () => {
	const [count, setCount] = useState(10);
	const [name, setName] = useState("");
	const [other, setOther] = useState("");
	const person = useMemo(() => {
		return {
			name,
			age: count,
		};
	}, [name, count]);
	//   const [firstName, lastName] = useMemo(() => {
	//     return getFirstLast(name);
	//   }, [name]);
	//   console.log("rendered");
	//   useEffect(() => {
	//     console.log("use effect called");
	//   }, [count]);

	useEffect(() => {
		console.log(person);
	}, [person]);
	return (
		<div>
			<button
				type="button"
				onClick={() => {
					setCount(count - 1);
				}}
			>
				-
			</button>
			{count}{" "}
			<button
				type="button"
				onClick={() => {
					setCount(count + 1);
				}}
			>
				+
			</button>
			<div>{name}</div>
			<input type="text" onChange={(e) => setName(e.target.value)} />
			<div>{other}</div>
			<input type="text" onChange={(e) => setOther(e.target.value)} />
		</div>
	);
};

export default TestingPerformenceHooks;
