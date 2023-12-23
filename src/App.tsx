import { useEffect } from "react";
import Routes from "./Routes/Routes";
import "./index.css";
import { useUserStore } from "./store/userStore/userStore";
import Loader from "./components/Loader/Loader";

function App() {
	const { refresh, isUserLoaded } = useUserStore((state) => state);

	useEffect(() => {
		refresh();
	}, [refresh]);

	if (!isUserLoaded) {
		return (
			<div className='h-screen w-full'>
				<Loader />
			</div>
		);
	}

	return <Routes />;
}

export default App;
