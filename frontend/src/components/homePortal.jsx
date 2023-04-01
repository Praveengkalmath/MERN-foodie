import { Route, Routes } from "react-router-dom";
import About from "./About";
import AddPosts from "./Add-Posts";
import Food from "./food";
import Home from "./FoodieHome";
import Navbar from "./Navbar";
import SinglePost from "./singlePost";


const HomePortal = () => {
    return (
        <div className="HomePortal">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/add-posts" element={<AddPosts />} />
                <Route path='/posts' element={<Food/>}/>
                <Route path="/posts/:id" element={<SinglePost/>} />
            </Routes>
        </div>
    );
}

export default HomePortal;