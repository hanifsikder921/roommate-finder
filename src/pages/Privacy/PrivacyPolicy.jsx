import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  return (
    <section className="px-4 py-12 md:px-10 lg:px-20 bg-base-100 text-base-content">
      <Helmet title='Privacy and Policy - RoomMate Finder'></Helmet>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p className="mb-6 text-sm text-center opacity-80">
          Last updated: May 21, 2025
        </p>

        <p className="mb-4">
          Welcome to our Roommate Finder platform. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website.
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">1. Information We Collect</h2>
        <p className="mb-4">
          We may collect personal information including your name, email address, location, profile photo, preferences, and any additional information you provide while using the platform.
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">2. How We Use Your Information</h2>
        <p className="mb-4">
          The data we collect is used to:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Provide personalized roommate matches</li>
            <li>Facilitate secure communication between users</li>
            <li>Improve user experience and site functionality</li>
            <li>Send relevant notifications and updates</li>
          </ul>
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">3. Sharing of Information</h2>
        <p className="mb-4">
          We do not sell your personal data. However, we may share it with trusted third parties who help operate our platform, provided they agree to keep your information confidential.
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">4. Cookies & Tracking</h2>
        <p className="mb-4">
          We use cookies to enhance your browsing experience. You can control or disable cookies through your browser settings.
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">5. Data Security</h2>
        <p className="mb-4">
          We implement industry-standard security measures to protect your information. However, no method of transmission over the Internet is 100% secure.
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">6. User Rights</h2>
        <p className="mb-4">
          You have the right to access, update, or delete your personal data. To make such requests, please contact us at <span className="font-medium">support@roommatefinder.com</span>.
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">7. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this policy periodically. Continued use of our platform after changes indicates your acceptance of the revised terms.
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">8. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, feel free to reach out to us at <span className="font-medium">contact@roommatefinder.com</span>.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
