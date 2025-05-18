const Category = () => {
  return (
    <>
      <section id='category' className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center max-2-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
            <p className="text-current/50">
              Explore courses by your area of interest and find the perfect
              match for your learning goals
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* TODO: Replace <a> with <Link> */}
            {/* INFO: Card-1 / Web Development */}
            <a href="#">
              <div
                className="rounded-lg ring ring-current/5 bg-white text-current shadow-sm transition-all duration-300
                hover:shadow-lg hover:ring-blue-300 "
              >
                <div className="p-6 flex flex-col items-center text-center group">
                  <div
                    className="w-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100
                      flex items-center justify-center mb-3 group-hover:scale-110 transition-transform
                      px-5 py-5
                  "
                  >
                    <svg
                      className="h-6 w-6 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-code h-6 w-6 text-blue-500"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <h3 className="font-medium mb-1">Web Development</h3>
                  <p className="text-sm text-current/50">125 Courses</p>
                </div>
              </div>
            </a>
            {/* INFO: Card-2 / Data Science */}
            <a href="#">
              <div
                className="rounded-lg ring ring-current/5 bg-white text-current shadow-sm transition-all duration-300
                hover:shadow-lg hover:ring-blue-300 "
              >
                <div className="p-6 flex flex-col items-center text-center group">
                  <div
                    className="w-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100
                      flex items-center justify-center mb-3 group-hover:scale-110 transition-transform
                      px-5 py-5
                  "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-book h-6 w-6 text-purple-500">
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20">
                      </path>
                    </svg>
                  </div>
                  <h3 className="font-medium mb-1">Data Science</h3>
                  <p className="text-sm text-current/50">125 Courses</p>
                </div>
              </div>
            </a>
            {/* INFO: Card-3 / Design */}
            <a href="#">
              <div
                className="rounded-lg ring ring-current/5 bg-white text-current shadow-sm transition-all duration-300
                hover:shadow-lg hover:ring-blue-300 "
              >
                <div className="p-6 flex flex-col items-center text-center group">
                  <div
                    className="w-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100
                      flex items-center justify-center mb-3 group-hover:scale-110 transition-transform
                      px-5 py-5
                  "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-book h-6 w-6 text-blue-500">
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20">
                      </path>
                    </svg>
                  </div>
                  <h3 className="font-medium mb-1">Design</h3>
                  <p className="text-sm text-current/50">125 Courses</p>
                </div>
              </div>
            </a>
            {/* INFO: Card-4 / Business */}
            <a href="#">
              <div
                className="rounded-lg ring ring-current/5 bg-white text-current shadow-sm transition-all duration-300
                hover:shadow-lg hover:ring-blue-300 "
              >
                <div className="p-6 flex flex-col items-center text-center group">
                  <div
                    className="w-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100
                      flex items-center justify-center mb-3 group-hover:scale-110 transition-transform
                      px-5 py-5
                  "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-user h-6 w-6 text-purple-500">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h3 className="font-medium mb-1">Business</h3>
                  <p className="text-sm text-current/50">125 Courses</p>
                </div>
              </div>
            </a>
            {/* INFO: Card-5 / Marketing */}
            <a href="#">
              <div
                className="rounded-lg ring ring-current/5 bg-white text-current shadow-sm transition-all duration-300
                hover:shadow-lg hover:ring-blue-300 "
              >
                <div className="p-6 flex flex-col items-center text-center group">
                  <div
                    className="w-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100
                      flex items-center justify-center mb-3 group-hover:scale-110 transition-transform
                      px-5 py-5
                  "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-trending-up h-6 w-6 text-blue-500">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                  </div>
                  <h3 className="font-medium mb-1">Marketing</h3>
                  <p className="text-sm text-current/50">125 Courses</p>
                </div>
              </div>
            </a>
            {/* INFO: Cad-6 / Photography */}
            <a href="#">
              <div
                className="rounded-lg ring ring-current/5 bg-white text-current shadow-sm transition-all duration-300
                hover:shadow-lg hover:ring-blue-300 "
              >
                <div className="p-6 flex flex-col items-center text-center group">
                  <div
                    className="w-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100
                      flex items-center justify-center mb-3 group-hover:scale-110 transition-transform
                      px-5 py-5
                  "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-camera h-6 w-6 text-purple-500">
                      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                      <circle cx="12" cy="13" r="3"></circle>
                    </svg>
                  </div>
                  <h3 className="font-medium mb-1">Photography</h3>
                  <p className="text-sm text-current/50">125 Courses</p>
                </div>
              </div>
            </a>
          </div>
        </div >
      </section >
    </>
  );
};

export default Category;
