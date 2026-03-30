import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/login/LoginPage";
import StudentDashboardPage from "./pages/mahasiswa/dashboard/DashboardPage";
import StudentUploadDPSPage from "./pages/mahasiswa/UploadDPSPage";
import KoordinatorDashboardPage from "./pages/koordinator/kelolaTopik/KoordinatorDashboardPage";
import DosenDashboardPage from "./pages/dosen/dashboard/DosenDashboardPage";
import DosenTopikSayaPage from "./pages/dosen/kelolaTopik/ManageTopicPage";
import DosenHasilReviewPage from "./pages/dosen/hasilReview/DosenHasilReviewPage";
import StudentFAQPage from "./pages/mahasiswa/FAQPage";
import MainLayout from "./components/MainLayout";
import DosenReviewList from "./pages/dosen/reviewSaya/DosenReviewList";
import DosenReviewPage from "./pages/dosen/reviewSaya/DosenReviewPage";

import AturReviewerPage from "./pages/koordinator/aturReviewer/AturReviewerPage";
import MonitoringReviewPage from "./pages/koordinator/monitoring/MonitoringReviewPage";
import ManajemenPeriodePage from "./pages/koordinator/periode/ManajemenPeriodePage";
import UserManagementPage from "./pages/koordinator/users/UserManagementPage";

import { TooltipProvider } from "./components/ui/tooltip";
import TopicDetailPage from "./pages/shared/TopicDetailPage";

// import DashboardLayout from "./layouts/DashboardLayout";
function App() {
  return (
    <>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            {/* public */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />

            {/* mahasiswa */}
            <Route path="/m" element={<MainLayout role={"student"} />}>
              <Route index element={<StudentDashboardPage />} />
              <Route path="topic/:code" element={<TopicDetailPage />} />
              <Route path="dps" element={<StudentUploadDPSPage />} />
              <Route path="faq" element={<StudentFAQPage />} />
            </Route>

            {/* dosen */}
            <Route path="/d" element={<MainLayout role="lecturer" />}>
              <Route index element={<DosenDashboardPage />} />
              <Route path="topik-saya" element={<DosenTopikSayaPage />} />
              <Route path="review" element={<DosenReviewList />} />
              <Route
                path="topik-saya/reviews"
                element={<DosenHasilReviewPage />}
              />
              {/* <Route path="review/:id/1" element={<DosenReviewPage />} /> */}
              <Route
                path="review/:topicCode/1"
                element={<DosenReviewPage reviewPhase={1} />}
              />
              <Route
                path="review/:topicCode/2"
                element={<DosenReviewPage reviewPhase={2} />}
              />
              <Route
                path="topik-saya/topic/:code"
                element={<TopicDetailPage />}
              />
            </Route>

            {/* koordinator */}
            <Route path="k" element={<MainLayout role="coordinator" />}>
              <Route index element={<KoordinatorDashboardPage />} />
              <Route path="atur-reviewer" element={<AturReviewerPage />} />
              <Route path="monitoring" element={<MonitoringReviewPage />} />
              <Route path="periode" element={<ManajemenPeriodePage />} />
              <Route path="users" element={<UserManagementPage />} />
              <Route path="topic/:code" element={<TopicDetailPage />} />
            </Route>

            {/* koordinator and dosen */}
            <Route path="/topic/:code" element={<TopicDetailPage />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </>
  );
}

export default App;
