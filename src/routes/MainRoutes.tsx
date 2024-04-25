import { FC } from 'react';
import {
  Navigate,
  Route,
  RouteProps,
  Routes,
} from 'react-router-dom';
import {
  AllTasks,
  DeletedTasks,
  HomePage,
  NotFoundPage
} from '../pages';
import { PATH } from './types/Path';
import { RoutePath } from './RoutePath';

export const routeConfig: Record<PATH, RouteProps> = {
  [PATH.Main]: {
    path: RoutePath.main,
    element: <HomePage />,
  },

  [PATH.Home]: {
    path: RoutePath.home,
    element: <Navigate to={PATH.Home} replace />,
  },

  [PATH.All]: {
    path: RoutePath.all,
    element: <AllTasks />,
  },

  [PATH.Deleted]: {
    path: RoutePath.deleted,
    element: <DeletedTasks />,
  },

  [PATH.Error]: {
    path: RoutePath.error,
    element: <NotFoundPage />,
  },
};

export const MainRoutes: FC = () => (
  <Routes>
    {Object.values(routeConfig).map(({ path, element }) => (
      <Route path={path} key={path} element={element} />
    ))}
  </Routes>
);
