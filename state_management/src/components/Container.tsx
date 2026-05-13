import A from "./A";
import B from "./B";

const Container = () => {
	return (
		<div className=" text-white  h-screen flex w-full items-center ">
			<div className="flex w-full justify-center ">
				<div className="bg-red-500 p-10">
					Container
					<div className="flex flex-row">
						<A />
						<B />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Container;
