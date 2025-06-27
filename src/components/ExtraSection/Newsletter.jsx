import React from 'react';
import Swal from 'sweetalert2';

const Newsletter = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;

        Swal.fire({
            title: "Submitted",
            icon: "success",
            draggable: true
        });
        console.log('Subscribed Email:', email);

        form.reset();
    };

    return (
        <div className="bg-base-200 py-12 px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <h2 className="text-3xl font-bold text-base-content">
                    Subscribe to Our Newsletter
                </h2>
                <p className="text-base-content">
                    Stay updated with the latest roommate listings, tips, and offers. No spam — just helpful content.
                </p>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="input input-bordered w-full sm:w-80"
                        required
                    />
                    <button type="submit" className="btn btn-primary w-full sm:w-auto">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;
