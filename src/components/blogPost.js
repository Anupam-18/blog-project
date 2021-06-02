import React, { useEffect, useState } from "react";
import "./../styles/blogPost.css";
import Card from "./card";
import memories from "./../assets/memories-from.jpg";
import blogData from "./../data.json";

function BlogPost(props) {
  // console.log(props);
  const [post, setpost] = useState({
    id: "",
    blogCategory: "",
    blogTitle: "",
    slug: "",
    postedOn: "",
    author: "",
    blogImage: "",
    blogText: "",
  });
  const [postid, setpostid] = useState("");
  useEffect(() => {
    const postid = props.match.params.postid;
    const post = blogData.data.find((post) => post.id == postid);
    setpost(post);
    setpostid(postid);
  }, [post, props.match.params.postid]);
  if (post.blogImage == "") return null;
  // let img = `./../assets/${post.blogImage}`;
  // debugger;
  // const graphImage = require("./../assets/" + post.blogImage);
  // console.log(graphImage);
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const images = importAll(
    require.context("./../assets", false, /\.(png|jpe?g|svg)$/)
  );
  console.log(images[module.default]);
  debugger;
  // console.log(images[post.blogImage]);

  return (
    <div className="blogPostContainer">
      <Card className="blogPost">
        <div className="blogHeader">
          <span className="category">{post.blogCateogory}</span>
          <h1 className="blogTitle">{post.blogTitle} </h1>
          <span className="featuredDate">
            posted on {post.postedOn} by {post.author}
          </span>
        </div>

        <div className="blogImageContainer">
          {/* <img alt="blog Image" className="blogImage" src={img} /> */}
          <img src={images[post.blogImage]} alt="image" />;
        </div>
        <div className="postContent">
          <h3>{post.blogTitle}</h3>
          <p>{post.blogText}</p>
        </div>
      </Card>
    </div>
  );
}

export default BlogPost;
