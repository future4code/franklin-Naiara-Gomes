import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ListTripsPage } from "../pages/ListTripsPage";
import { LoginPage } from "../pages/LoginPage";
import { ApplicationFormPage } from "../pages/ApplicationFormPage";
import { CreateTripPage } from "../pages/CreateTripPage";
import { AdminHomePage } from "../pages/AdminHomePage";
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="list/" element={<ListTripsPage />} />
        <Route path="login/" element={<LoginPage />} />
        <Route path="inscricao/" element={<ApplicationFormPage />} />
        <Route path="criar/" element={<CreateTripPage />} />
        <Route path="adminver/" element={<AdminHomePage />} />
      </Routes>
    </BrowserRouter>
  );
};