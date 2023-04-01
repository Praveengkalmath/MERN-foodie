import Banner from "./Banner";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const SinglePost = () => {
    let title = "single post"

    let [posts, setPosts] = useState([])
    let params = useParams()


    useEffect(() => {
        let fetchData = async () => {
            let res = await axios.get(`http://localhost:4000/posts/${params.id}`)
            let data = await res.data
            setPosts(data)

        }
        fetchData()
    }, [])
    return (
        <div className="sp">
            <Banner data={title} />
          
            <div className="page3 d-flex m-3 mb-0 justify-content-center">
                <div className="pg4">
                    <img height='550px' width='400px' src={posts.image} alt="" />
                </div>
                <div className="pg4 ps-3 pe-3">
                    <h3><u>Title:</u> {posts.author}</h3>
                    <h3> <u>Comment:</u> {posts.title}</h3>
                    <p style={{width:'500px'}}>{posts.summary}</p>
                    <p><u><b>Location:</b> </u></p>
                    <iframe style={{width:'500px',height:'250px'}} src={posts.location} frameborder="0"></iframe>
                    {/* <a href={posts.location}></a> */}
                </div>
            </div>
            <Link to={'/home/posts'} style={{ color: 'white', backgroundColor: 'orangered',marginLeft:'500px',marginBottom:'100px' }} className="btn btn-warning mt-3">Back to Post</Link>
        </div>
    );
}

export default SinglePost;