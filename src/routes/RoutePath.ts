import { PATH } from './types/Path';

export const RoutePath: Record<PATH, string> = {
  [PATH.Main]: '/',
  [PATH.Home]: '/home',
  [PATH.All]: '/all',
  [PATH.Deleted]: '/deleted',
  [PATH.Error]: '*',
};
