export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between items-start px-6 ">
        {/* Follow Us Section */}
        <div className="w-50 md:w-1/2 lg:w-1/3 mb-8">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <ul className=" space-x-6 mt-4 ">
            <li href="#" className="hover:text-blue-400">
              Facebook
            </li>
            <li href="#" className="hover:text-blue-400">
              Twitter
            </li>
            <li href="#" className="hover:text-blue-400">
              LinkedIn
            </li>
          </ul>
        </div>

        {/* Address Section */}
        <div className="w-50 md:w-1/2 lg:w-1/3 text-left">
          <h3 className="text-xl font-semibold">Address</h3>
          <p className="mt-6 text-sm text-gray-400">
            <span className="text-white">Email:</span> horizonsltn@gmail.com
          </p>
          <p className="mt-2 text-sm text-gray-400">
            <span className="text-white">Business address:</span> 7901 4TH ST N,
            STE 16705 ST PETERSBURG FLORIDA 33702
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container mx-auto text-center mt-6 border-t border-gray-700 pt-4">
        <p className="text-sm text-gray-400">
          &copy; 2025 HORIZON SOLUTION LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
