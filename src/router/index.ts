

import IndexView from '../views/index';
import UserView from '../views/user';
import AboutView from '../views/about';

export default [
    { url: '/', view: IndexView, text: '主页', exact: true },
    { url: '/user', view: UserView, text: '用户页' },
    { url: '/about', view: AboutView, text: '关于页' },
]
