const GetStart = () => {
  return (
    <>
      <section className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600
    w-[100%]
    ">
        <div className="w-95/100 flex items-center justify-center">
          <div className="my-10 flex flex-col items-center justify-center gap-3 w-[50%]" >
            <h1 className="text-3xl font-bold text-white">
              Get Learning Today
            </h1>
            <div>
              <p className="text-1xl text-white">
                join thousands of students who are already advancing their careers with our
              </p>
              <span className="flex items-center justify-center text-1xl text-white my-0"> courses </span>
            </div>
            <button className="text-blue-500 inline-flex items-center justify-center gap-2 h-10 px-4 py-2 bg-white
              hover:bg-gray-100 rounded-[7px] mt-5 cursor-pointer
            ">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default GetStart
