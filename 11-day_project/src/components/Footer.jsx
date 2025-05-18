const Footer = () => {
  return (
    <>
      <footer id="footer" className="py-12 bg-gray-900 text-gray-300 w-[100%] flex flex-col items-center justify-center">
        <div className="w-95/100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* INFO: grid-1 */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ED
                  </span>
                </div>
                <span className="text-xl font-bold text-white">EduLearn</span>
              </div>
              <p className="text-sm">
                The leading platform for online education and skill development.
              </p>
            </div>

            {/* INFO: grid-2 */}
            <div>
              <h3 className="font-semibold text-white mb-4">Categories</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover-text-white">Web Development</a>
                </li>
                <li>
                  <a href="#" className="hover-text-white">Data Science</a>
                </li>
                <li>
                  <a href="#" className="hover-text-white">Design</a>
                </li>
                <li>
                  <a href="#" className="hover-text-white">Business</a>
                </li>
              </ul>
            </div>

            {/* INFO: grid-3 */}
            <div>
              <h3 className="font-semibold text-white mb-4">About</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover-text-white">About Us</a>
                </li>
                <li>
                  <a href="#" className="hover-text-white">Instructors</a>
                </li>
                <li>
                  <a href="#" className="hover-text-white">Careers</a>
                </li>
                <li>
                  <a href="#" className="hover-text-white">Contact</a>
                </li>
              </ul>
            </div>

            {/* INFO: grid-4 */}
            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover-text-white">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="hover-text-white">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover-text-white">Cookie Policy</a>
                </li>
              </ul>
            </div>

            {/* INFO: End grid */}

          </div>
          <div className="w-[100%] border-t border-gray-800 mt-8 pt-8 flex md-flex-row justify-between items-center">
            <p className="text-sm">© 2025 EduLearn. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href='#footer' className="hover:text-white ">Facebook
              </a>
              <a href='#footer' className="hover:text-white">Twitter
              </a>
              <a href='#footer' className="hover:text-white">Instagram
              </a>
              <a href='#footer' className="hover:text-white">LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
