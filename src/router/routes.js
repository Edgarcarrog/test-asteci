import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataTable from "../components/DataTable";

export default function Router({children}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<DataTable />} />
        <Route exact path="/detail" element={<DataTable />} />
        {children}
      </Routes>
    </BrowserRouter>
  );
}
