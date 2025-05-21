import { createBrowserRouter } from "react-router";
import MainLayout from './../layouts/MainLayout';
import Home from "../pages/Home/Home";
import AuthencationLayout from './../layouts/AuthencationLayout';
import Login from './../pages/Login/Login';
import Register from './../pages/Register/Register';
import About from "../pages/About/About";
import ContactUs from "../pages/Contact/ContactUs";
import PrivateRoute from "../provider/PrivateRoute";
import AddPost from "../pages/AddPost/AddPost";
import MyListing from "../pages/MyListing/MyListing";
import BrowsListing from "../pages/BrowsListing/BrowsListing";
import PostDetails from "../pages/Details/PostDetails";
import UpdatePost from "../pages/UpdatPost/UpdatePost";




const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/about',
                Component: About

            },
            {
                path: '/contact',
                Component: ContactUs

            },
            {
                path: '/details/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/items/${params.id}`),
                Component: () => <PrivateRoute><PostDetails /></PrivateRoute>
            },
            {
                path: '/addPost',
                Component: () => <PrivateRoute><AddPost></AddPost></PrivateRoute>
            },
            {
                path: '/browsePost',
                Component: BrowsListing
            },
            {
                path: '/update/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/items/${params.id}`),
                Component: () => <PrivateRoute><UpdatePost/></PrivateRoute>
            },
            {
                path: '/myListing',
                loader: () => fetch('http://localhost:3000/items'),
                Component: () => <PrivateRoute><MyListing /></PrivateRoute>
            }


        ]
    },

    {
        path: "/auth",
        Component: AuthencationLayout,
        children: [
            {
                path: "/auth/login",
                Component: Login
            },
            {
                path: "/auth/register",
                Component: Register
            }
        ]
    }

])



export default router;