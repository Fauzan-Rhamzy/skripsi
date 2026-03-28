import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/login/LoginPage";
import StudentDashboardPage from "./pages/mahasiswa/dashboard/StudentDashboardPage";
import StudentUploadDPSPage from "./pages/mahasiswa/StudentUploadDPSPage";
import KoordinatorDashboardPage from "./pages/koordinator/KoordinatorDashboardPage";
import DosenDashboardPage from "./pages/dosen/dashboard/DosenDashboardPage";
import DosenTopikSayaPage from "./pages/dosen/kelolaTopik/DosenKelolaTopikPage";
import DosenHasilReviewPage from "./pages/dosen/hasilReview/DosenHasilReviewPage";
import StudentFAQPage from "./pages/mahasiswa/StudentFAQPage";
import MainLayout from "./components/MainLayout";
import DosenReviewList from "./pages/dosen/reviewSaya/DosenReviewList";
import DosenReviewPage from "./pages/dosen/reviewSaya/DosenReviewPage";
import { TooltipProvider } from "./components/ui/tooltip";
import TopicDetailPage from "./pages/shared/TopicDetailPage";

// import DashboardLayout from "./layouts/DashboardLayout";
function App() {
  return (
    <>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />

            <Route path="/m" element={<MainLayout role={"student"} />}>
              <Route index element={<StudentDashboardPage />} />
              <Route path="dps" element={<StudentUploadDPSPage />} />
              <Route path="faq" element={<StudentFAQPage />} />
            </Route>

            <Route path="/d" element={<MainLayout role="lecturer" />}>
              <Route index element={<DosenDashboardPage />} />
              <Route path="topik-saya" element={<DosenTopikSayaPage />} />
              <Route path="review" element={<DosenReviewList />} />
              <Route path="review/1" element={<DosenReviewPage />} />
              <Route
                path="topik-saya/reviews"
                element={<DosenHasilReviewPage />}
              />
            </Route>

            <Route path="k" element={<MainLayout role="coordinator" />}>
              <Route index element={<KoordinatorDashboardPage />} />
            </Route>

            <Route path="/topic/:id" element={<TopicDetailPage />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </>
  );
}

export default App;
