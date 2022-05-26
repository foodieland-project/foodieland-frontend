import UserLayout from "../../../layouts/userLayout";
import BlogComponent from "../../../components/blog";

const Blog = () => {
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
