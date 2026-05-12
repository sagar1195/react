import { Counter, MemoParent, ParentUseCallback } from "./components";

function App() {
	return (
		<div>
			<MemoParent />
			<br />
			<Counter />
			<br />
			<ParentUseCallback />
		</div>
	);
}

export default App;
