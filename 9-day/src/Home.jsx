import React, { useEffect } from "react";

const Home = () => {
  const fetchBlogs = async () => {
    const response = await axios.get("https://blog-hqx2.onrender.com/blogs");
    console.log(response.data);
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <>
      <div>
        {blogs.map((val, i) => {
          return <div key={i}>
            {val.title}
          </div>
        })}
      </div>
    </>
  );
}

export default Home
