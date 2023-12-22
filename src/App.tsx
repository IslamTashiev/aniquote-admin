import { useEffect } from "react";
import Routes from "./Routes/Routes";
import "./index.css";
import { useUserStore } from "./store/userStore/userStore";

function App() {
	const { refresh } = useUserStore((state) => state);

	// useEffect(() => {
	// 	const token = localStorage.getItem("token");
	// 	if (token) {
	// 		refresh();
	// 	}
	// }, [refresh]);

	return <Routes />;
}

export default App;
