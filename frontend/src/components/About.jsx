import Banner from "./Banner";
import axios from "axios";
import { useEffect, useState } from "react";

const About = () => {
    let title = "About Page"


    let [posts, setPosts] = useState([])
    let [users, setUsers] = useState([])


    useEffect(() => {
        let fetchData = async () => {
            let res = await axios.get(`http://localhost:4000/posts`)
            let data = await res.data
            setPosts(data)
        }
        fetchData()
    }, [])


    useEffect(() => {
        let fetchData = async () => {
            let res = await axios.get(`http://localhost:4000/User`)
            let data = await res.data
            console.log(data);
            setUsers(data)

        }
        fetchData()
    }, [])


    return (
        <div>
            <div className="about">
                <Banner data={title} />
            </div>
            <div className="page1 d-flex ">
                <div style={{ marginLeft: '60px' }}>
                    <img height='630px' width='600px' src="https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg" alt="" />
                </div>
                <div className="ms-5">
                    <div className="mt-5 ms-4">
                        <h1 className="fw-bolder">About Stories</h1>
                        <p style={{ color: 'gray', fontSize: '18px' }}>Far far away, behind the word mountains, far from the countries <br /> Vokalia and Consonantia</p>

                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <div style={{ padding: '40px 60px', backgroundColor: 'ghostwhite', margin: '15px' }}>
                            <h1 className="ms-5 fs-2"><b>10</b></h1>
                            <p>Years of Experienced</p>
                        </div>
                        <div style={{ padding: '40px 100px', backgroundColor: 'ghostwhite', margin: '15px' }}>
                            <h1 className=" fs-2"><b>{posts.length}</b></h1>
                            <p>Foods</p>
                        </div>
                        <div style={{ padding: '40px 100px', backgroundColor: 'ghostwhite', margin: '15px' }}>
                            <h1 className=" fs-2"><b>300</b></h1>
                            <p>LifeStyles</p>
                        </div>
                        <div style={{ padding: '40px 70px', backgroundColor: 'ghostwhite', margin: '15px' }}>
                            <h1 className="ms-4 fs-2"><b>{users.length}</b></h1>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>


    );
}

export default About;