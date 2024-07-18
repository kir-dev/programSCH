import { Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage';

export const App = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
