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
import PrivacyPolicy from './../pages/Privacy/PrivacyPolicy';
import Error from "../pages/NotFound/Error";
import Terms from './../pages/TermsAnd Condition/Terms';
import PublicRoute from "../provider/PublicRoute";





const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: async () => {
                    try {
                        const res = await fetch("https://roommate-finder-server-site.vercel.app/items");
                        if (!res.ok) throw new Error("Failed to load data");
                        return res.json();
                    } catch (err) {
                        console.error(err.message);
                        return [];
                    }
                },
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
                loader: async ({ params }) => {
                    try {
                        const res = await fetch(`https://roommate-finder-server-site.vercel.app/items/${params.id}`);
                        if (!res.ok) throw new Error("Failed to load post details");
                        return res.json();
                    } catch (err) {
                        console.error(err.message);
                        return null; // বা fallback ডেটা
                    }
                },
                Component: () => <PrivateRoute><PostDetails /></PrivateRoute>
            },
            {
                path: '/addPost',
                Component: () => <PrivateRoute><AddPost /></PrivateRoute>
            },
            {
                path: '/browsePost',
                Component: BrowsListing
            },
            {
                path: '/update/:id',
                loader: async ({ params }) => {
                    try {
                        const res = await fetch(`https://roommate-finder-server-site.vercel.app/items/${params.id}`);
                        if (!res.ok) throw new Error("Failed to load update data");
                        return res.json();
                    } catch (err) {
                        console.error(err.message);
                        return null;
                    }
                },
                Component: () => <PrivateRoute><UpdatePost /></PrivateRoute>
            },
            {
                path: '/myListing',
                loader: async () => {
                    try {
                        const res = await fetch('https://roommate-finder-server-site.vercel.app/items');
                        if (!res.ok) throw new Error("Failed to load my listings");
                        return res.json();
                    } catch (err) {
                        console.error(err.message);
                        return [];
                    }
                },
                Component: () => <PrivateRoute><MyListing /></PrivateRoute>
            },
            {
                path: '/privacy',
                Component: PrivacyPolicy
            },
            {
                path: "/terms",
                Component: Terms
            }
        ]
    },
    {
        path: "/auth",
        Component: AuthencationLayout,
        children: [
            {
                path: "/auth/login",
                Component: ()=> <PublicRoute><Login/></PublicRoute>
            },
            {
                path: "/auth/register",
                Component: ()=> <PublicRoute><Register/></PublicRoute>
            }
        ]
    },
    {
        path: "*",
        Component: Error,
    }
]);



export default router;

// https://roommate-finder-server-site.vercel.app/items