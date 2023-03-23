import { AddProjects, ManageProjects } from './modules';
import { Dashboard, NotFound, UserPage } from './pages';
import { Route, Routes } from 'react-router-dom';

import LayoutAdmin from './layouts/LayoutAdmin';
import LayoutDefault from './layouts/LayoutDefault';
import LayoutSignin from './layouts/LayoutSignin';

const App = () => {
  return (
    <Routes>
      <Route element={<LayoutDefault />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
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
