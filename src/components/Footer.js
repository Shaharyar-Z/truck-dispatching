export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto text-center">
        <h3 className="text-xl font-semibold">Follow Us</h3>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-blue-400">Facebook</a>
          <a href="#" className="hover:text-blue-400">Twitter</a>
          <a href="#" className="hover:text-blue-400">LinkedIn</a>
        </div>
        <p className="mt-6 text-sm text-gray-400">Business address: 7901 4TH ST N,STE, 16705 ST PETERSBURG FLORIDA 33702</p>
        <p className="mt-6 text-sm text-gray-400">&copy; 2025 HORIZON SOLUTION LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}
