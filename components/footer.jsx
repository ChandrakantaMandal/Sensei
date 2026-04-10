export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white tracking-wide">
              SensAI
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Building intelligent solutions for the future. Clean, fast, and reliable.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide">
              Product
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200">Features</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200">Pricing</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200">Docs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200">About</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide">
              Follow Us
            </h3>
            <div className="flex space-x-5 text-sm">
              <a href="#" className="hover:text-white hover:scale-110 transition-all duration-200">Twitter</a>
              <a href="#" className="hover:text-white hover:scale-110 transition-all duration-200">GitHub</a>
              <a href="#" className="hover:text-white hover:scale-110 transition-all duration-200">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-sm flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} SensAI. All rights reserved.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition duration-200">Privacy</a>
            <a href="#" className="hover:text-white transition duration-200">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}