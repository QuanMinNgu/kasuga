import Login from '~/auth/login';
import Register from '~/auth/register';
import TypeMovie from '~/movieType';
import MovieKind from '~/movieKind';
import Detail from '~/detail';
import MovieMoreDetail from '~/movieDetail';
export const publicRoutes = [
    {path:"/login",component:Login},
    {path:"/register",component:Register},
    {path:"/watch/:slug",component:MovieMoreDetail},
    {path:"/xem-phim/:slug",component:Detail},
    {path:"/:kind/:slug",component:MovieKind},
    {path:"/:slug",component:TypeMovie}
]

export const privateRoutes = [

]