const Navbar = () => {
    return ( 
        <div className="nav">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <h1 class="navbar-brand" href="#" className="ms-4"><b>Foodie</b></h1>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div style={{ marginLeft: '700px' }} class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="/home">Home</a>
                        <a class="nav-link" href="/home/about">About</a>
                        <a class="nav-link" href="/home/posts">Posts</a>
                        <a class="nav-link" href="/home/add-posts">Add-Posts</a>
                        <a class="nav-link" href="/">Log-Out</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
     );
}
 
export default Navbar;