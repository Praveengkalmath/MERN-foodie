import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner'

const Food = () => {

    let title = "All posts"

    let [posts, setPosts] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            let res = await axios.get("http://localhost:4000/posts")
            let data = await res.data
            console.log(data);
            setPosts(data)

        }
        fetchData()
    }, [])
    return (

        <div className="posts">
            <Banner data={title} />


            <div style={{ display: 'inline-table' }} className="posts_list d-flex ">
                {posts.map(data => (
                    <div className="list p-3 w-30">
                        <Link to={`/home/posts/${data._id}`}><img height='400px' width='300px' src={data.image} alt="" /></Link>
                        <h4><u>Title:</u> {data.author}</h4>
                        <h5><u>Comment:</u> {data.title}</h5>
                        {/* <p style={{ fontSize: '15px', width: '300px', display: 'inline-block' }}> <b> Summery: </b> {data.summary}</p> */}
                        {/* <p><u><b>Location:</b> </u></p> */}
                        {/* <iframe src={data.location} frameborder="0"></iframe> */}
                        {/* <img src={data.image} alt="" /> */}

                    </div>
                ))}



            </div>


            <div style={{width:'300px'}} className="sideimg bg-secondary p-4 ms-3 me-3 mt-3 h-25 ">
                <h2 className='ms-5'>About Me</h2>
                <img style={{ borderRadius: '75px', marginLeft: '60px' }} className='mb-4 ms-5 mt-3' src="https://preview.colorlib.com/theme/stories/images/author.jpg" width={150} alt="" />
                <p>Hi! My name is Cathy Deon, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <input type="text" className='mt-3' placeholder='search' />

            </div>
        </div>
    );
}

export default Food;