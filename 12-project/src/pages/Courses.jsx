import Navbar from "../home/Navbar.jsx";

const Courses = () => {
  return (
    <>
      {/* INFO: NAVBAR */}
      <Navbar />

      <section className="w-[100%] flex items-center justify-center">
        <explore
          className="w-[100%] flex items-center justify-center bg-gradient-to-r from-blue-800 to-purple-800 text-white py-12
        ">
          <div className="container w-95/100">
            <h1 class="text-3xl md:text-4xl font-bold mb-4">
              Explore Our Courses
            </h1>
            <p className="text-lg text-white/80 max-w-3xl">
              Browse our comprehensive collection of courses designed to help you master new skills,
              advance your career, and achieve your learning goals.
            </p>
          </div>
        </explore>
      </section>
    </>
  );
}

export default Courses;
