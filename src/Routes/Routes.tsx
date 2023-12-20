import { Routes as ReoutesLib, Route } from "react-router-dom";
import CheckAdmin from "./CheckAdmin";
import Login from "../pages/Login";

const Routes = () => {
	return (
		<ReoutesLib>
			<Route path='/login' element={<Login />} />
			<Route path='/' element={<CheckAdmin page={<>Hello</>} />} />
		</ReoutesLib>
	);
};

export default Routes;
