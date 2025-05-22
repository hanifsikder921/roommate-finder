import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const AddPost = () => {

    const { user } = useContext(AuthContext);
    console.log(user);



    const handleAddPost = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newPost = {
            ...Object.fromEntries(formData.entries()),
            likes: []
        };


        fetch('https://roommate-finder-server-site.vercel.app/items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Post Added Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                } else {
                    Swal.fire({
                        position: "top",
                        icon: "error",
                        title: "Post Add Failed...!!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };



    return (
        <div className='md:max-w-6xl mx-auto md:my-8'>
            <h2 className=" text-xl md:text-3xl font-bold text-center my-6">Post Your Roommate Requirement</h2>


            <form onSubmit={handleAddPost}>
                <div className='bg-base-200 p-2 md:p-8 rounded-md shadow px-4'>

                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8'>


                        <fieldset className="fieldset   rounded-box  ">


                            <label className="label">Title</label>
                            <input required name='title' type="text" className="input w-full focus:border-none mb-2 focus:outline-1" placeholder="Your Title" />

                            <label className="label">Location</label>
                            <input required name='location' type="text" className="input w-full focus:border-none mb-2 focus:outline-1" placeholder="Enter Your Location" />

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
                            <input required name='lifestyle' type="text" className="input w-full focus:border-none mb-2 focus:outline-1" placeholder="Your Lifestyle Preferences" />

                        </fieldset>

                        <fieldset className="fieldset   rounded-box  ">


                            <label className="label">User Name</label>
                            <input required name='userName' type="text" className="input w-full focus:border-none mb-2 focus:outline-1 cursor-not-allowed" value={user.displayName} readOnly />

                            <label className="label">Email</label>
                            <input required name='userEmail' type="email" className="input w-full focus:border-none mb-2 focus:outline-1 cursor-not-allowed" value={user.email} readOnly />

                            <label className="label">Availability </label>

                            <select name='availability' defaultValue="available" className="select w-full focus:border-none mb-2 focus:outline-1">
                                <option disabled value="">Set Availability</option>
                                <option value="available">Available</option>
                                <option value="unavailable">Unavailable</option>
                            </select>

                            <label className="label">Rent Amount</label>
                            <input required name='amount' type="number" className="input w-full focus:border-none mb-2 focus:outline-1" placeholder="Amount" />

                        </fieldset>


                    </div>

                    <div className=''>
                        <label className="label">Contact</label>
                        <input required name='contactInfo' type="text" className="input w-full focus:border-none mb-2 focus:outline-1" placeholder=" Enter Your Contact info " />

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Description</legend>
                            <textarea name='description' className="textarea h-24 w-auto focus:border-none focus:outline-1" placeholder="Enter Your Description"></textarea>
                        </fieldset>
                    </div>

                    <button type='submit' className='btn btn-primary w-full mt-4'>Add Listing</button>

                </div>



            </form>

        </div>
    );
};

export default AddPost;