
import homeView from '../views/home';
import UserView from '../views/user';
import AboutView from '../views/about';

export default [
    { url: '/', view: homeView, text: '主页', exact: true },
    { url: '/user', view: UserView, text: '用户页' },
    { url: '/about', view: AboutView, text: '关于页' },
];


