import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";
import Spinner from "../components/Spinner";
import { baseUrl } from "../baseUrl";



const BlogPage = () => {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog, setBlog] = useState(null);
  const [relatedblogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { setLoading, loading } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    console.log("URL is: ");
    console.log(url);
    try {
      const res = await fetch(url);
      const data = await res.json();

      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log("Error aagya in blog id wali call");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div className="mt-[70px] flex flex-col items-center justify-center bg-gradient-to-r from-purple-700">
      <Header />
      <div className="my-4 bg-#6b57ff">
        {loading ? (
          <Spinner />
        ) : blog ? (
          <div className="mt-2 mb-2 ">
            {/* Adjust the width and height here */}
            <BlogDetails post={blog} />
          </div>
        ) : (
          <p>No Blog Found</p>
        )}
      </div>
      {blog && (
        <>
        <h2 className="font-bold text-3xl mt-4 bg-neli h-[40px] p-1 w-screen max-w- justify-center text-center flex  mb-2 text-slate-200 bg-violet-00 ">
  Related Blogs
</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4 mt-5 md:mt-16 mb-20">
            {relatedblogs.map((post) => (
              <div key={post.id} className="h-full flex items-stretch">
                <div className="p-3 flex items-stretch">
                  <BlogDetails post={post} />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BlogPage;
