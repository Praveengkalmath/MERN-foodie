import axios from "axios"
import { useState } from "react"
import Banner from "./Banner"

const AddPosts = () => {

    let title1 = "Add posts"

    let [author, setAuthor] = useState("")
    let [title, setTitle] = useState("")
    let [summary, setSummery] = useState("")
    let [image, setImage] = useState("")
    let [location, setLocation] = useState("")

    let AddPOst = (e) => {
        e.preventDefault()
        let data = { author, title, summary, image, location }
        if (author && title && image && summary && location) {
            axios.post("http://localhost:4000/add-posts", data)
                .then(res => {
                    alert(res.data.message)
                }).catch(err => {
                    alert(err.data.message)
                })
        } else {
            alert("Please fill all the fields")

        }

    }
    return (


        <div>
            <Banner data={title1}/>
            <div className="addpost d-flex mt-3 mb-3">

                <div style={{ marginLeft: '100px' }}>
                    <img height="600px" width='400px' src="https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?size=626&ext=jpg" alt="" />
                </div>

                <div className="form w-100">
                    <form action="" className="" onSubmit={AddPOst}>
                        <div className="list ms-4">
                            <h1 className="mb-4"><u>Add Post </u></h1>

                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label ">Author</label>
                                <input style={{ width: '600px' }} type="text" className="form-control w-100" id="exampleFormControlInput1" placeholder="Author" name="author"
                                    value={author} onChange={(e) => setAuthor(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Title</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="title of the post" name="title"
                                    value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Summary</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Summary of the post" name="summary"
                                    value={summary} onChange={(e) => setSummery(e.target.value)} ></textarea>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Image</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Image of the post" name="image"
                                    value={image} onChange={(e) => setImage(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Location</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Location of the post" name="location"
                                    value={location} onChange={(e) => setLocation(e.target.value)} />
                            </div>
                            <button style={{ color: 'white', backgroundColor: 'orangered' }} className="btn btn-warning">Submit Post</button>
                        </div>
                    </form>
                </div>


            </div>

        </div>

    );
}
export default AddPosts;