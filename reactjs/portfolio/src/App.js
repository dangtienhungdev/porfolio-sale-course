import './App.css';

import { Dashboard, ProjectAdd, ProjectManage } from 'modules';
import { HomePage, NotFound, SignInPage, SignUpPage } from 'pages';
import { LayoutAdmin, LayoutDefault } from 'layouts';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route element={<LayoutDefault />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="/admin/sign-in" element={<SignInPage />} />
      <Route path="/admin/sign-up" element={<SignUpPage />} />
      <Route element={<LayoutAdmin />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/projects" element={<ProjectManage />} />
        <Route path="/admin/projects/add" element={<ProjectAdd />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
