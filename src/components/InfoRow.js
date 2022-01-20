import { Navigate } from "react-router-dom";

const InfoRow = ({ data }) => {
  const {
    _id,
    cityid,
    name,
    state,
    probabilityofprecip,
    relativehumidity,
    lastreporttime,
  } = data;

  return (
    <tr>
      <td>{_id}</td>
      <td>{cityid}</td>
      <td>{name}</td>
      <td>{state}</td>
      <td>{probabilityofprecip}</td>
      <td>{relativehumidity}</td>
      <td>{lastreporttime}</td>
      <td>LLUEVE</td>
    </tr>
  );
};

export default InfoRow;
