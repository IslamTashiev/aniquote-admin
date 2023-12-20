import { Routes as ReoutesLib, Route } from "react-router-dom";
import CheckAdmin from "./CheckAdmin";

const Routes = () => {
	return (
		<ReoutesLib>
			<Route path='/' element={<CheckAdmin page={<>Hello</>} />} />
		</ReoutesLib>
	);
};

export default Routes;
