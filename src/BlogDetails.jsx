import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import DeleteIcon from "./Delete.svg";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog , loading, error } = useFetch(`https://blog-server-m9nr.onrender.com/blogs/${id}`);
  const history = useHistory();


  const handleDelete = () => {
    fetch('https://blog-server-m9nr.onrender.com/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  return (
    <div className="blog-details">
            {loading && <div className="loading" >Loading...</div>}
            { error && <div className="error" >{ error }</div> }
            { blog && (
                <article>
                <h2>{ blog.title }</h2>
                <div>{ blog.body }</div>
                <p>Written by: { blog.author }</p>
                <button className="tooltip" onClick={handleDelete}>
                 <img src={DeleteIcon} alt="icon delete" />
                 <span className="tooltiptext">remove</span>
                </button>
                </article>
            )}
    </div>
  );
}

export default BlogDetails;