import Blogs from "./blogs";

function Blog({ posts } :any ) {
    return (
      <main>
        <div>
          <h5>List of blogs</h5>
          <Blogs />
        </div>
      </main>
    );
  }

  export default Blog;


