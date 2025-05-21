import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router';
import ThemeToggle from '../ThemeToggle';
import Swal from 'sweetalert2';
import profileicon from '../../assets/profile.png'
import { AuthContext } from './../../provider/AuthProvider';
import Loading from './../Loading/Loading';




const Navbar = () => {



    const { user, logoutUser, loading } = useContext(AuthContext)
    const navigate = useNavigate()



    if (loading) {
        return (
            <Loading></Loading>
        );
    }


    const handleLogout = () => {
        logoutUser()
            .then(() => {
                Swal.fire("Success", "Logout successfully", "success");
                navigate("/auth/login");
            })
            .catch((error) => {
                Swal.fire("Error", error.message, "error");
            });
    }




    const menu = (
        <div className="flex flex-col md:flex-row md:gap-10 gap-3 md:items-center">
            {[
                { path: "/", label: "Home" },
                { path: "/addPost", label: "Add to Find Roommate" },
                { path: "/wishlistf", label: "Browse Listing" },
                { path: "/myListing", label: "My Listing" },
            ].map(({ path, label }) => (
                <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) =>
                        `font-semibold transition-colors duration-300 text-base-content ${isActive
                            ? 'border border-success px-3 py-1 rounded-lg bg-red-200/10 backdrop-blur-sm'
                            : 'hover:text-red-400'
                        }`
                    }
                >
                    {label}
                </NavLink>
            ))}

            {/* Button: Hidden on md and up, visible on small screens */}

            {
                user ? (
                    <button className="block md:hidden px-4 py-2 text-white rounded-md hover:bg-orange-600 transition">
                        <Link
                            onClick={handleLogout}
                            to="/auth/login"
                            className="btn "
                        >
                            Logout
                        </Link>
                    </button>
                ) :
                    (
                        <button className="block md:hidden px-4 py-2 text-white rounded-md hover:bg-orange-600 transition">
                            <Link
                                to="/auth/login"
                                className="btn "
                            >
                                Login
                            </Link>
                        </button>
                    )
            }

        </div>
    );











    return (
        <div className="navbar  md:w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {menu}
                    </ul>
                </div>
                <Link to='/' className=" text-2xl font-semibold text-violet-500 hidden md:flex">Roommate <span className="text-orange-500">F</span>inder </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                {menu}
            </div>
            <div className="navbar-end">
                <ThemeToggle />
                <section>


                    {user ? (
                        <div className="space-x-2 flex items-center">
                            <div
                                className="tooltip tooltip-bottom"
                                data-tip={user.displayName || 'User'}
                            >
                                <div className="avatar avatar-online avatar-placeholder cursor-pointer">
                                    <div className="bg-neutral text-neutral-content w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
                                        {
                                            <img
                                                src={`${user ? user.photoURL : profileicon}`}
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = profileicon;
                                                }}
                                                className="w-full h-full object-cover"
                                            />

                                        }
                                    </div>
                                </div>
                            </div>
                            <Link
                                onClick={handleLogout}
                                to="/auth/login"
                                className="btn bg-blue-600 text-stone-50 hover:bg-blue-800 hidden md:flex"
                            >
                                Logout
                            </Link>
                        </div>
                    ) : (
                        <div className='hidden md:flex'>

                            <Link
                                to="/auth/login"
                                className="btn bg-blue-600 text-stone-50 hover:bg-blue-800"
                            >
                                Login
                            </Link>

                            <Link
                                to="/auth/register"
                                className="btn bg-purple-600 text-stone-50 hover:bg-purple-800"
                            >
                                Signup
                            </Link>
                        </div>
                    )}
                </section>


            </div>
        </div>
    );
};

export default Navbar;
