import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import InfoRow from "./components/InfoRow";

function App() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    try {
      const response = await axios.get(
        "https://api.datos.gob.mx/v1/condiciones-atmosfericas"
      );

      const data = response.data.results.slice(0, 10);
      setInfo(data);
      console.log(info);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>_id</th>
            <th>cityid</th>
            <th>name</th>
            <th>state</th>
            <th>probabilityofprecip</th>
            <th>relativehumidity</th>
            <th>Lastreporttime</th>
            <th>LLUEVE</th>
          </tr>
        </thead>
        <tbody>
          {info.map((element) => (
            <InfoRow key={element._id} data={element} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
