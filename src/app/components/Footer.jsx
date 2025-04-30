import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: '#F6F6F8' }}
      className="w-full overflow-hidden text-black py-10 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Customer Care */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Customer Care</h3>
          <p>Email: <a href="mailto:sale@saya.pk" className="underline">sale@saya.pk</a></p>
          <p>Phone: <a href="tel:+922138227292" className="underline">+9221 3822 (7292)</a></p>
        </div>

        {/* Help & Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Help & Information</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Shipping Policy</a></li>
            <li><a href="#" className="hover:underline">Return and Exchange</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Our Company</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Company Profile</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Store Locator</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Newsletter Signup</h3>
          <p className="text-sm mb-3">Subscribe to our newsletter to get notified of the latest launches and offers</p>
          <form className="flex flex-col sm:flex-row gap-2 w-full">
            <input
              type="email"
              placeholder="Your email address"
              className="px-3 py-2 rounded text-black flex-1 w-full"
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-300 pt-6 text-center text-sm">
        <p className="mb-2">Accepted Payment Methods</p>
        <div className="flex justify-center gap-4 text-2xl flex-wrap">
          <span>💳</span>
          <span>💲</span>
          <span>🏦</span>
          <span>💼</span>
        </div>
        <p className="mt-4">&copy; {new Date().getFullYear()} Saya.pk — All Rights Reserved</p>
      </div>
    </footer>
  );
}
