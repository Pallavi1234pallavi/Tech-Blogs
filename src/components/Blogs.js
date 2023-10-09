import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";
import Spinner from "./Spinner";

export default function Blogs() {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4 mt-10 md:mt-16 mb-20">
      {loading ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <Spinner/>
        </div>
      ) : posts.length === 0 ? (
        <div className=" min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">No Blogs Found !</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="flex items-stretch">
            <BlogDetails post={post} />
          </div>
        ))
      )}
    </div>
  );
}
