
import '../styles/FoodieHome.css'
import { Card, Button } from 'react-bootstrap';


const Home = () => {


  return (
    <div className="Home">

      <div className="main">

      </div>

      {/* <div className="list row bg-warning p-lg-5 p-sm-0">
                
            <p className="col-lg-6 col-sm-12">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo maiores molestiae inventore necessitatibus non molestias vel illum quasi, voluptatum iure commodi ullam, odio distinctio corporis animi ipsam harum ab cumque!</p>
            <p className="col-lg-6 colo-sm-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto mollitia maxime, libero distinctio at ad sint nisi reiciendis magnam incidunt. Expedita, debitis veritatis? Voluptas dolor dolore temporibus molestias dignissimos sed!</p>

            </div> */}
      <div className="row m-5">
        <div className="img col-lg-9 col-sm-12 p-0">
          <img className="col-sm-12" height="600px" width="800px" src="https://media-cdn.tripadvisor.com/media/photo-p/1b/e6/f4/6b/the-foodie-works-dishes.jpg" alt="" />
        </div>
        <div className="col-lg-3 col-sm-12 p-0">
          <div className="bg-warning p-3">
            <p className="mt-4">Feautred posts</p>
            <h1>Love the <br /> Delicious & <br />Tasty Foods</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla veritatis repellat saepe. Itaque accusantium architecto excepturi maxime placeat, error saepe adipisci molestiae tempora inventore soluta aspernatur cupiditate sint cumque ipsum?</p>
            <button className='bt2'>Read More 🡪</button>

          </div>
          <div>
            <button className="bt" style={{ padding: '36.5px 44.5px', border: '0px', border: '1px solid wheat' }}>🡨 Forward</button>
            <button className="bt" style={{ padding: '36.5px 45px', border: '0px', border: '1px solid wheat' }} >Next 🡪</button>
          </div>
        </div>


      </div>

      <div className="main2">
        <h1 className='m-5'>Recent Stories ▰</h1>
        <div className="two ms-5  d-flex">

          <div className="timages d-flex p-0 m-0 flex-wrap">
            <div className="one me-4 mb-0">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" height={300} src="../images/img1.jpeg" />
                <Card.Body>
                  <Card.Title className='fs-6'>Desert -------------- March 01,2018</Card.Title>
                  <Card.Text>
                    <h5>Tasty & Delicious Foods</h5>
                  </Card.Text>
                  <Button className='text-danger bg-white border-0 fs-5 ps-5' >Readmore→</Button>
                </Card.Body>
              </Card>
            </div>

            <div className="two mb-0">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" height={300} src="../images/img2.jpeg" />
                <Card.Body>
                  <Card.Title className='fs-6'>Desert --------- March 01,2018</Card.Title>
                  <Card.Text>
                    <h5>Tasty & Delicious Foods</h5>
                  </Card.Text>
                  <Button className='text-danger bg-white border-0 fs-5 ps-5' >Readmore→</Button>
                </Card.Body>
              </Card>
            </div>

            <div className="three me-4 ms-0">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" height={300} src="../images/img3.jpeg" />
                <Card.Body>
                  <Card.Title className='fs-6'>Desert --------- March 01,2018</Card.Title>
                  <Card.Text>
                    <h5>Tasty & Delicious Foods</h5>
                  </Card.Text>
                  <Button className='text-danger bg-white border-0 fs-5 ps-5' >Readmore→</Button>
                </Card.Body>
              </Card>
            </div>

            <div className="four">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" height={300} src="../images/img4.jpeg" />
                <Card.Body>
                  <Card.Title className='fs-6 '>Desert --------- March 01,2018</Card.Title>
                  <Card.Text>
                    <h5>Tasty & Delicious Foods</h5>
                  </Card.Text>
                  <Button className='text-danger bg-white border-0 fs-5 ps-5' >Readmore→</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="sideimg  me-5">
            <img className='' height={860} width={550} src="../images/img5.jpeg" alt="" />
            <Button className='text-danger bg-white border-0 fs-5 ps-5' >Readmore→</Button>
          </div>

        </div>

        <h1 className='m-5'>Featured Post▰</h1>
        <div className="three d-flex">

          <div className="two ms-5  d-flex">

            <div className="timages d-flex p-0 m-0 ">
              <div className="one me-4 mb-0">
                <Card style={{ width: '17rem' }}>
                  <Card.Img variant="top" height={300} src="../images/img6.jpeg" />
                  <Card.Body>
                    <Card.Title className='fs-6'>Desert --------- March 01,2018</Card.Title>
                    <Card.Text>
                      <h5>Tasty & Delicious Foods</h5>
                    </Card.Text>
                    <Button className='btn btn-dark border-0  p-2' >Readmore→</Button>
                  </Card.Body>
                </Card>
              </div>

              <div className="two mb-0">
                <Card style={{ width: '17rem' }}>
                  <Card.Img variant="top" height={300} src="../images/img7.jpeg" />
                  <Card.Body>
                    <Card.Title className='fs-6'>Desert --------- March 01,2018</Card.Title>
                    <Card.Text>
                      <h5>Tasty & Delicious Foods</h5>
                    </Card.Text>
                    <Button className='btn btn-dark border-0  p-2' >Readmore→</Button>
                  </Card.Body>
                </Card>
              </div>

              <div className="three me-4 ms-4">
                <Card style={{ width: '17rem' }}>
                  <Card.Img variant="top" height={300} src="../images/img8.jpeg" />
                  <Card.Body>
                    <Card.Title className='fs-6'>Desert --------- March 01,2018</Card.Title>
                    <Card.Text>
                      <h5>Tasty & Delicious Foods</h5>
                    </Card.Text>
                    <Button className='btn btn-dark border-0  p-2' >Readmore→</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>


          </div>
          <div className="sideimg bg-secondary p-4 me-5">
            <h2 className='ms-5'>About Me</h2>
            <img style={{borderRadius:'75px',marginLeft:'60px'}} className='mb-4 ms-5 mt-3' src="https://preview.colorlib.com/theme/stories/images/author.jpg" width={150} alt="" />
            <p>Hi! My name is Cathy Deon, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <input type="text" className='mt-3' placeholder='search' />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;