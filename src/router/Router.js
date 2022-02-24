import { Suspense, useContext, lazy } from 'react';

import { isUserLoggedIn } from '../utility/Utils';
import { useLayout } from '../utility/hooks/useLayout';
import { abilityContext } from '../utility/context/Can';
import { useRouterTransition } from '../utility/hooks/';

// ** Router Components
import {
  BrowserRouter as AppRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

const Router = () => {};

export default Router;
