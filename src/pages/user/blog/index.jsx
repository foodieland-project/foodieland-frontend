import { useEffect } from "react";
import UserLayout from "../../../layouts/userLayout";
import BlogComponent from "../../../components/blog";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchArticles } from "../../../features/article/articleSlice";
import { articleData } from "../../../services/utils/data";

const Blog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        "https://foodieland-3b1ed-default-rtdb.firebaseio.com/articles.json"
      );
      console.log(data);
      dispatch(fetchArticles(data));
    }
    fetchData();
  }, []);
  return (
    <>
      <UserLayout>
        <div className="w-11/12 sm:container mx-auto sm:px-4">
          <BlogComponent />
        </div>
      </UserLayout>
    </>
  );
};

export default Blog;
