
function Blog({ posts } :any ) {
    return (
      <main>
        <div>
          <h5>List of blogs</h5>
         
        </div>
      </main>
    );
  }

//   export const getStaticProps = async() => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos')
//     const posts = await res.json()
//     console.log(posts)

//     return {
//       props: {
//         posts,
//       },
//     }
//   }

  export default Blog;


