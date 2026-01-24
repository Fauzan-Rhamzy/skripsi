import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/login/LoginPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
// import DashboardLayout from "./layouts/DashboardLayout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />

          {/* <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
