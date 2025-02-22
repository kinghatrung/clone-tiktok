import { HeaderOnly } from '~/layouts';
import config from '~/config';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import Friends from '~/pages/Friends';
import Explore from '~/pages/Explore';
import Messages from '~/pages/Messages';

// Public routes
const publicRouters = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.friends, component: Friends },
    { path: config.routes.explore, component: Explore },
    { path: config.routes.messages, component: Messages },
    { path: config.routes.live, component: Live },
];
const privateRouters = [];

export { publicRouters, privateRouters };
