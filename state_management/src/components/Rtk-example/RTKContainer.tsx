import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	changeByValue,
	decrement,
	increment,
} from "../../rtk-store/features/counter/counterSlice";
import type { RootState } from "../../rtk-store/rtkStore";

const RTKContainer = () => {
	const [inputValue, setInputValue] = useState<number>(0);
	const state = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();

	const handleIncrement = () => {
		dispatch(increment());
	};
	const handleDecrement = () => {
		dispatch(decrement());
	};
	const handleChangeValue = () => {
		dispatch(changeByValue(inputValue));
	};
	return (
		<div>
			<h2>{state}</h2>
			<button
				className="border-2 rounded-sm border-amber-500"
				type="button"
				onClick={handleIncrement}
			>
				Increment
			</button>
			<button
				className="border-2 rounded-sm border-amber-500"
				type="button"
				onClick={handleDecrement}
			>
				decrement
			</button>
			<input
				type="number"
				onChange={(e) => setInputValue(Number(e.target.value))}
			/>
			<button
				className="border-2 rounded-sm border-amber-500"
				type="button"
				onClick={handleChangeValue}
			>
				Change
			</button>
		</div>
	);
};

export default RTKContainer;
