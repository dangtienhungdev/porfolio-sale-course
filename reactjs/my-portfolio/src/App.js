import { AddProjects, ManageProjects } from './modules';
import { NotFound, UserPage } from './pages';
import { Route, Routes } from 'react-router-dom';

import LayoutAdmin from './layouts/LayoutAdmin';
import LayoutSignin from './layouts/LayoutSignin';

const App = () => {
  return (
    <Routes>
      <Route path="/admin/sign-in" element={<LayoutSignin />} />
      <Route path="*" element={<NotFound />} />
      <Route element={<LayoutAdmin />}>
        <Route path="/admin/projects" element={<ManageProjects />} />
        <Route path="/admin/projects/add" element={<AddProjects />} />
        <Route path="/admin/user" element={<UserPage />} />
      </Route>
    </Routes>
  );
};

export default App;
