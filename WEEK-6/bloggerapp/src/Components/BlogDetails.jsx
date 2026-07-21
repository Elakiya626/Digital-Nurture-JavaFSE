function BlogDetails() {

  const blogs = [
    {
      id: 1,
      title: "Introduction to React",
      author: "John"
    },
    {
      id: 2,
      title: "Understanding JSX",
      author: "David"
    }
  ];

  return (
    <div>

      <h2>Blog Details</h2>

      {blogs.map((blog) => (
        <div key={blog.id}>
          <h4>{blog.title}</h4>
          <p>Author : {blog.author}</p>
        </div>
      ))}

    </div>
  );
}

export default BlogDetails;