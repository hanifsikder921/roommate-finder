import React from 'react';
import Swal from 'sweetalert2';

const Support = () => {
    const handleSupportSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        
        Swal.fire({
            title: "Submitted",
            icon: "success",
            draggable: true
        });

        console.log({ name, email, message });

        form.reset();
    };

    return (
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4">
            <div className="bg-base-200 p-8 rounded-xl shadow-md w-full max-w-xl">
                <h2 className="text-3xl font-bold mb-6 text-center text-base-content">Need Help? Contact Support</h2>
                <form onSubmit={handleSupportSubmit} className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="input input-bordered w-full"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Email Address</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="input input-bordered w-full"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea
                            name="message"
                            className="textarea textarea-bordered w-full"
                            placeholder="Describe your issue or feedback"
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                            Submit Request
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Support;
