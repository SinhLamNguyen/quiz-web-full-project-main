import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/guest/HomePage";
import JoinPage from "./pages/game/JoinPage";
import GamePage from "./pages/game/GamePage";
import LoginPage from "./pages/guest/LoginPage";
import SignupPage from "./pages/guest/SignupPage";
import AdminHomePage from "./pages/admin/AdminHomePage";
import AddUsersPage from "./pages/admin/AddUsersPage";
import MyLibraryPage from "./pages/admin/MyLibraryPage";
import CoursePage from "./pages/admin/CoursePage";
import ReportPage from "./pages/admin/ReportPage";
import GroupPage from "./pages/admin/GroupPage";
import HelpAndSupportPage from "./pages/admin/HelpAndSupportPage";
import SettingPage from "./pages/admin/SettingPage";
import CreateQuizPage from "./pages/admin/CreateQuizPage";


export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/join/game" element={<GamePage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          <Route path="/admin" element={<AdminHomePage />} />
          <Route path="/admin/addUsers" element={<AddUsersPage />} />
          <Route path="/admin/myLibrary" element={<MyLibraryPage />} />
          <Route path="/admin/courses" element={<CoursePage />} />
          <Route path="/admin/reports" element={<ReportPage />} />
          <Route path="/admin/groups" element={<GroupPage />} />
          <Route path="/admin/support" element={<HelpAndSupportPage />} />
          <Route path="/admin/setting" element={<SettingPage />} />
          <Route path="/admin/createQuiz" element={<CreateQuizPage/>} />
        </Routes>
      </BrowserRouter>
  )
}