import { Provider } from "react-redux";
import Container from "./components/Container";
import RTKContainer from "./components/Rtk-example/RTKContainer";
import { rtkStore } from "./rtk-store/rtkStore";

function App() {
	return (
		<div>
			<Provider store={rtkStore}>
				<RTKContainer />
			</Provider>
			APP
			<Container />
		</div>
	);
}

export default App;
