import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

function Blogs({ posts } :any ) {
    return (
      <main>
        <div>
          <h5>List of blogs</h5>
          <ul>
        {posts.map((post: { id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
        </div>
      </main>
    );
  }

  export const getStaticProps = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const posts = await res.json()
    console.log(posts)

    return {
      props: {
        posts,
      },
    }
  }

  export default Blogs;
