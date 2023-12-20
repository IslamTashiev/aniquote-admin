import { Routes as ReoutesLib, Route } from "react-router-dom";

const Routes = () => {
	return (
		<ReoutesLib>
			<Route path='/' element={<>Home Page</>} />
		</ReoutesLib>
	);
};

export default Routes;
