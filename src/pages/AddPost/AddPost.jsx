import React from 'react';

const AddPost = () => {
    return (
        <div className='md:max-w-6xl mx-auto md:my-8'>

            <form>
                <div className='bg-base-200 p-2 md:p-8 rounded-md shadow'>

                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8'>


                        <fieldset className="fieldset   rounded-box  ">


                            <label className="label">Title</label>
                            <input type="text" className="input w-full focus:border-none mb-2 focus:outline-1" placeholder="Your Title" />

                            <label className="label">Location</label>
                            <input type="text" className="input w-full focus:border-none mb-2 focus:outline-1" placeholder="Enter Your Location" />

                            <label className="label">Room Type</label>
                            <select defaultValue="Single" className="select w-full focus:border-none mb-2 focus:outline-1">
                                <option disabled={true}>Select Type</option>
                                <option>Single</option>
                                <option>Shared</option>
                            </select>

                            <label className="label">Lifestyle Preferences</label>
                            <input type="text" className="input w-full focus:border-none mb-2 focus:outline-1" placeholder="Your Lifestyle Preferences" />

                        </fieldset>

                        <fieldset className="fieldset   rounded-box  ">


                            <label className="label">User Name</label>
                            <input type="text" className="input w-full focus:border-none mb-2 focus:outline-1" placeholder="name get from firabase" />

                            <label className="label">Email</label>
                            <input type="text" className="input w-full focus:border-none mb-2 focus:outline-1" placeholder="email get from firabase" />

                            <label className="label">Availability </label>
                            <select defaultValue="available" className="select w-full focus:border-none mb-2 focus:outline-1">
                                <option disabled={true}>set availability </option>
                                <option>available</option>
                                <option>unavilable</option>
                            </select>

                            <label className="label">Rent Amount</label>
                            <input type="number" className="input w-full focus:border-none mb-2 focus:outline-1" placeholder="Amount" />

                        </fieldset>


                    </div>

                    <div className=''>
                        <label className="label">Contact</label>
                        <input type="text" className="input w-full focus:border-none mb-2 focus:outline-1" placeholder=" Enter Your Contact info " />

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Description</legend>
                            <textarea className="textarea h-24 w-auto focus:border-none focus:outline-1" placeholder="Enter Your Description"></textarea>
                        </fieldset>
                    </div>

                    <button className='btn btn-primary w-full my-4'>Add Listing</button>

                </div>



            </form>

        </div>
    );
};

export default AddPost;