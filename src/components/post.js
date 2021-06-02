import React from "react";
import "./../styles/post.css";
import BlogPost from "./blogPost";
import SideBar from "./sideBar";

function Post(props) {
  return (
    <section className="container">
      <BlogPost {...props} />
      <SideBar />
    </section>
  );
}

export default Post;
