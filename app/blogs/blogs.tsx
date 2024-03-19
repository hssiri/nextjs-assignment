import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react";


function Blogs({ posts } :any ) {
    return (
      <main>
        <div>
          <h5>List of blogs</h5>
          <ul>
        {/* {posts ? posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))} */}
        
        {posts ? (
        posts.map((post: { id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => (
          <div key={post.id}>
            <h2>Item: {post.title}</h2>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
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
