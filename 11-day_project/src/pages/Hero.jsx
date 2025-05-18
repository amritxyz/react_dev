import Category from "./Category";
import Footer from "./Footer";
import GetStart from "./GetStart";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      {/* INFO: Navbar*/}
      <Navbar />

      <section id="hero" className="w-[100%] h-[100vh] flex justify-center bg-blue-50">
        <div className="flex items-center flex-row w-95/100">
          {/* INFO: Right Side */}
          <div className="w-1/2 space-y-8 pt-8 lg:pt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold sm:leading-15">
              Unlock Your Potential with
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"> Expert-Led </span>
              Courses
            </h1>
            <p className="text-lg text-current/50">
              Discover thousands of courses across various domains taught by industry experts and advance your career with in-demand skills.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 text-white cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 py-2 px-5 rounded-[7px] hover:from-blue-700 hover:to-purple-700">
                Explore Courses
              </button>
              <button className="inline-flex items-center gap-2 text-current cursor-pointer bg-white hover:bg-current/5 py-2 px-5 rounded-[7px] ">
                View Categories
              </button>
            </div>

            {/* INFO: Count / Courses, Students, Instructors, Categories */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">
                  1,200+
                </p>
                <p className="text-sm text-current/60">
                  Courses
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600">
                  25,000+
                </p>
                <p className="text-sm text-current/60">
                  Students
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">
                  120+
                </p>
                <p className="text-sm text-current/60">
                  Instructors
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600">
                  25+
                </p>
                <p className="text-sm text-current/60">
                  Categories
                </p>
              </div>
            </div>
          </div>

          {/* INFO: Left Side */}
          <div className="lg:w-1/2 lg:pl-8">
            <img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" className="rounded-lg shadow-xl animate-fade-in" />
          </div>
        </div>
      </section>

      {/* NOTE: Category Section */}
      <Category />

      {/* NOTE: GetStart Section */}
      <GetStart />

      {/* NOTE: Footer Section */}
      <Footer />
    </>
  );
}

export default Hero;
