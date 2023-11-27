import useFetch from "./useFetch";
import BlogList from "./components/BlogList";

const Home = () => {
    const { data: blogs, loading, error } = useFetch('https://blog-server-m9nr.onrender.com/blogs')
  

  return (
    <div className="home">
        {loading && <div className="loading" >Loading...</div>}
        { error && <div className="error" >{ error }</div> }
        { blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
        {/* <BlogList blogs={blogs.filter(blog => blog.author === 'Soufiane')} title="Soufiane's Blogs"  /> */}
    </div>
  );
}

export default Home;