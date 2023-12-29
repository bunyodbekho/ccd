import { observer } from "mobx-react-lite";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import MainLayoutTest from "layouts/MainLayoutTest";
import Login from "../modules/Login";
import authStore from "../store/auth.store";
import Dashboard from "../modules/Dashboard";
import Main from "components/pages/Main";
import Company from "components/pages/Company";
import Services from "components/pages/Services";
import ContactUs from "components/pages/ContactUs";
import Careers from "components/pages/Careers";
import Certifications from "components/pages/Certifications";
import News from "components/pages/News";

const Router = () => {
  const { isAuth } = authStore;
  const isMainLayout = true; //will be deleted

  if (!isAuth)
    return (
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Navigate to="/login " />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );

  // MainLayout ushin routing logikasi
  if (isMainLayout)
    return (
      <Routes>
        <Route path="/" element={<MainLayoutTest />}>
          <Route index element={<Main />} />
          <Route path="company" element={<Company />} />
          <Route path="services" element={<Services />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="careers" element={<Careers />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="news" element={<News />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Route>

      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default observer(Router);
