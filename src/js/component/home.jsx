import React, { useEffect, useState } from "react";
import { crearFlota } from "../funciones/crearFlota";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  useEffect(() => {
    let tablero = crearFlota(
      crearFlota(
        crearFlota(
          crearFlota(
            crearFlota(
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              4
            ),
            5
          ),
          3
        ),
        2
      ),
      3
    );
    setTablero([...tablero]);
  }, []);

  const [tablero, setTablero] = useState([]);
  const [shots, setShots] = useState(0);
  const [hits, setHits] = useState(0);

  const modificarTablero = (position, tablero) => {
    const [position1, position2] = position;
    if (tablero[position1][position2] == 0) {
      tablero[position1][position2] = 1;
	  setShots(shots + 1)
    } else if (tablero[position1][position2] == 2) {
      tablero[position1][position2] = 3;
	  setShots(shots + 1)
	  setHits(hits + 1)
    }

    setTablero([...tablero]);
  };
  return (
    <>
      <h2 className="text-center">Battleship</h2>
      <div className="d-flex">
        <div className="scoresPanel">
          <div>Hits {hits}</div>
          <div>Shots {shots}</div>
        </div>
        <div className="tablero">
          {tablero.map((position, index) =>
            position.map((number, index2) => (
              <div
                key={`${index}${index2}`}
                className={
                  tablero[index][index2] == 1
                    ? "misfire cuadros"
                    : tablero[index][index2] == 3
                    ? "shot cuadros"
                    : "cuadros"
                }
                onClick={(e) => modificarTablero([index, index2], tablero)}
              ></div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
