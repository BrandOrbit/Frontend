import React from 'react'

const PrivacyPolicy = () => {
  return (
   <div className="w-6xl mx-auto flex flex-col justify-center items-center mt-10">
          <h2 className="text-4xl font-semibold text-pink-800 mb-4">
           Privacy Policy
          </h2>
          <section className="space-y-7 text-lg text-gray-700 text-justify">
        <div>
          <h3 className="font-bold text-xl mb-2">Who We Are?</h3>
          <p>
            At  Brand Orbit, we prioritize your privacy and strive to be transparent about how we handle your data.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-1">Comments</h3>
          <p>
            When visitors leave comments on our site, we collect the information they provide in the comment form, along with their IP address and browser user agent string, to prevent spam.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-1">Media</h3>
          <p>
            Please ensure any images you upload to our site do not contain embedded location data (EXIF GPS). Visitors can extract location information from images downloaded from the site.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-1">Cookies</h3>
          <p>
            When you leave a comment, you can choose to save your name, email address, and website in cookies for convenience. These cookies last for one year to avoid re-entering details for future comments.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-1">Article Editing</h3>
          <p>
            Editing or publishing an article generates a cookie with the article’s ID, lasting one day and containing no personal data.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-1">Embedded Content</h3>
          <p>
            Articles may include embedded content (e.g., videos, images) from other websites. This content acts as if you visited those sites directly and may collect data through cookies, especially if you’re logged into those websites.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-1">Data Sharing</h3>
          <p>
            If you request a password reset, your IP address is included in the reset email for security reasons.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-1">Data Retention</h3>
          <p>
            We retain comments and their metadata indefinitely to automatically recognize and approve follow-up comments. Registered users’ personal information is stored in their profiles, which they can view, edit, or delete (excluding usernames). Administrators can also access and manage this information.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-1">Your Rights</h3>
          <p>
            If you have an account or have commented on our site, you can request a copy of your personal data held by us or ask for its deletion, except where we need to retain it for administrative, legal, or security reasons.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-1">Data Processing</h3>
          <p>
            Visitor comments undergo automated spam detection to maintain site integrity and security.
          </p>
        </div>

        <div>
          <p>
            This overview aims to clarify our data management practices, ensuring your privacy is respected and our operations remain transparent.
          </p>
        </div>
      </section>
        </div>
  )
}

export default PrivacyPolicy
