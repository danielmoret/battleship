import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tablero, setTablero] = useState([
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0]
	]);

	const modificarTablero = (position) => {
		const [position1,position2] = position
		tablero[position1][position2]=1
		setTablero([...tablero])


	}
	return (
		<>
		<h2 className="text-center">Battleship</h2>
		<div className="tablero">
			{tablero.map((position,index) => position.map((number,index2) => <div key={`${index}${index2}`} className={tablero[index][index2]==1 ? "shot cuadros":"cuadros"} onClick={(e) => modificarTablero([index,index2])}></div>))}
		</div>
		</>
	);
};

export default Home;
