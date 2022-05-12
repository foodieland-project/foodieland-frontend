import React from "react";
import UserLayout from "../../../layout/userLayout";
import BlogPostCp from "../../../basicComponents/blogPostCp";

const BlogPost = () => {
  return (
    <>
      <UserLayout>
        <div className="w-11/12 sm:container mx-auto sm:px-4">
          <BlogPostCp />
        </div>
      </UserLayout>
    </>
  );
};

export default BlogPost;
