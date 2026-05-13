import E from "./E";
import F from "./F";

const B = () => {
	return (
		<div className="p-10 bg-blue-800">
			B
			<div className="flex flex-row">
				<E />
				<F />
			</div>
		</div>
	);
};

export default B;
