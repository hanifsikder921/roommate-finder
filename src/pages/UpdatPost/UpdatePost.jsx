import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const UpdatePost = () => {
    const { user } = useContext(AuthContext);



    const { _id, title, location, lifestyle, availability, amount, contactInfo, description, } = useLoaderData();



    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatePost = Object.fromEntries(formData.entries())

        fetch(`https://roommate-finder-server-site.vercel.app/items/${_id}`, {


            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatePost)
        })

            .then(res => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: ` Update`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                else {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: ` NO Data Change Yet`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })


    }



    return (
        <div className='md:max-w-6xl mx-auto md:my-8'>
            <Helmet title='Update Post - Roommate Finder'></Helmet>

            <form onSubmit={handleUpdate}>
                <div className='bg-base-200 p-2 md:p-8 rounded-md shadow'>

                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8'>


                        <fieldset className="fieldset rounded-box  ">


                            <label className="label">Title</label>
                            <input required defaultValue={title} name='title' type="text" className="input w-full focus:border-none mb-2 focus:outline-1" placeholder="Your Title" />

                            <label className="label">Location</label>
                            <input required defaultValue={location} name='location' type="text" className="input w-full focus:border-none mb-2 focus:outline-1" placeholder="Enter Your Location" />

                            <label className="label">Room Type</label>
                            <select name='type' defaultValue="Single" className="select w-full focus:border-none mb-2 focus:outline-1">
                                <option disabled value="">Select Type</option>
                                 <option value="Single">Single</option>
                                <option value="Shared">Shared</option>
                                <option value="Master Bedroom">Master Bedroom</option>
                                <option value="Studio">Studio</option>
                                <option value="Sublet">Sublet</option>
                                <option value="Paying Guest (PG)">Paying Guest (PG)</option>


                            </select>

                            <label className="label">Lifestyle Preferences</label>
                            <input required defaultValue={lifestyle} name='lifestyle' type="text" className="input w-full focus:border-none mb-2 focus:outline-1" placeholder="Your Lifestyle Preferences" />

                        </fieldset>

                        <fieldset className="fieldset   rounded-box  ">


                            <label className="label">User Name</label>
                            <input required name='userName' type="text" className="input w-full focus:border-none mb-2 focus:outline-1 cursor-not-allowed" value={user.displayName} readOnly />

                            <label className="label">Email</label>
                            <input required name='userEmail' type="email" className="input w-full focus:border-none mb-2 focus:outline-1 cursor-not-allowed" value={user.email} readOnly />

                            <label className="label">Availability </label>

                            <select name='availability' defaultValue={availability} className="select w-full focus:border-none mb-2 focus:outline-1">
                                <option disabled value="">Set Availability</option>
                                <option value="available">Available</option>
                                <option value="unavailable">Unavailable</option>
                            </select>

                            <label className="label">Rent Amount</label>
                            <input required defaultValue={amount} name='amount' type="number" className="input w-full focus:border-none mb-2 focus:outline-1" placeholder="Amount" />

                        </fieldset>


                    </div>

                    <div>
                        <label className="label">Contact</label>
                        <input required defaultValue={contactInfo} name='contactInfo' type="number" className="input w-full focus:border-none mb-2 focus:outline-1" placeholder=" Enter Your Contact info " />

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Description</legend>
                            <textarea required defaultValue={description} name='description' className="textarea h-24 w-auto focus:border-none focus:outline-1" placeholder="Enter Your Description"></textarea>
                        </fieldset>
                    </div>

                    <button type='submit' className='btn btn-primary w-full mt-4'>Add Listing</button>

                </div>



            </form>

        </div>
    );
};

export default UpdatePost;