import { Route, Routes } from 'react-router-dom';

import LayoutSignin from './layouts/LayoutSignin';
import { NotFound } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/admin/sign-in" element={<LayoutSignin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
