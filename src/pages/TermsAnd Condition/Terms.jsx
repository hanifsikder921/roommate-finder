import React from "react";
import { Helmet } from "react-helmet-async";

const Terms = () => {
  return (
    <section className="px-4 py-12 md:px-10 lg:px-20 bg-base-100 text-base-content">
      <Helmet title="Terms and Condition - RoomMate Finder"></Helmet>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Terms and Conditions</h1>
        <p className="mb-6 text-sm text-center opacity-80">Last Updated: May 21, 2025</p>

        <p className="mb-4">
          These Terms and Conditions govern your use of the Roommate Finder platform. By accessing or using the website, you agree to be bound by these terms. If you do not agree with any part, please refrain from using our services.
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">1. Eligibility</h2>
        <p className="mb-4">
          You must be at least 18 years old to use this platform. By registering, you confirm that all information provided is accurate and truthful.
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">2. User Responsibilities</h2>
        <p className="mb-4">
          Users are responsible for the content they post. Any false, misleading, or inappropriate listings may result in account suspension or removal from the platform.
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">3. Account Security</h2>
        <p className="mb-4">
          You are responsible for maintaining the confidentiality of your login credentials. Notify us immediately if you suspect unauthorized access to your account.
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">4. Content Ownership</h2>
        <p className="mb-4">
          All content you submit remains your property. However, you grant us a non-exclusive license to use, display, and promote your content for platform-related purposes.
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">5. Prohibited Activities</h2>
        <p className="mb-4">
          Users may not:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Post discriminatory or offensive content</li>
            <li>Impersonate others</li>
            <li>Use bots, automation, or scrapers</li>
            <li>Violate any local or international laws</li>
          </ul>
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">6. Termination</h2>
        <p className="mb-4">
          We reserve the right to suspend or terminate accounts at our discretion, with or without notice, if a user is found violating these terms.
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">7. Disclaimer</h2>
        <p className="mb-4">
          Roommate Finder does not guarantee the accuracy of listings or the behavior of users. Please exercise caution and use your judgment while connecting with others.
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">8. Limitation of Liability</h2>
        <p className="mb-4">
          We are not liable for any damages resulting from use of the platform, including but not limited to loss of data, financial loss, or disputes between users.
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">9. Changes to These Terms</h2>
        <p className="mb-4">
          We may update these terms occasionally. Continued use of the platform implies acceptance of the updated terms.
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">10. Contact Information</h2>
        <p className="mb-4">
          For any questions regarding these terms, please contact us at <span className="font-medium">terms@roommatefinder.com</span>.
        </p>
      </div>
    </section>
  );
};

export default Terms;
