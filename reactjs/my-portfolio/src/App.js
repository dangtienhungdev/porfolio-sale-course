import { NotFound, ProjectsPage, UserPage } from './pages';
import { Route, Routes } from 'react-router-dom';

import LayoutAdmin from './layouts/LayoutAdmin';
import LayoutSignin from './layouts/LayoutSignin';

const App = () => {
  return (
    <Routes>
      <Route path="/admin/sign-in" element={<LayoutSignin />} />
      <Route path="*" element={<NotFound />} />
      <Route element={<LayoutAdmin />}>
        <Route path="/admin/projects" element={<ProjectsPage />} />
        <Route path="/admin/user" element={<UserPage />} />
      </Route>
    </Routes>
  );
};

export default App;
