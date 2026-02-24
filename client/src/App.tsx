import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/login/LoginPage";
import StudentDashboardPage from "./pages/mahasiswa/StudentDashboardPage";
import StudentUploadDPSPage from "./pages/mahasiswa/StudentUploadDPSPage";
import KoordinatorDashboardPage from "./pages/koordinator/KoordinatorDashboardPage";
import DosenDashboardPage from "./pages/dosen/DosenDashboardPage";
import StudentSidebar from "./components/StudentSidebar";
import StudentFAQPage from "./pages/mahasiswa/StudentFAQPage";

// import DashboardLayout from "./layouts/DashboardLayout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/m" element={<StudentSidebar />}>
            <Route index element={<StudentDashboardPage />} />
            <Route path="dps" element={<StudentUploadDPSPage />} />
            <Route path="faq" element={<StudentFAQPage />} />
          </Route>

          <Route path="/d">
            <Route index element={<DosenDashboardPage />} />
          </Route>

          <Route path="k">
            <Route index element={<KoordinatorDashboardPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
