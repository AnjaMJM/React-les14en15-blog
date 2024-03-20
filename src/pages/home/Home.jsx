import "./home.css"

function Home({image}) {
    return (
        <div className="wrapper">
            <h1>Bij Blogventure geloven we in de kracht van woorden!*</h1>
            <img src={image} alt="Company logo" className="logo"/>

        </div>
    );
}

export default Home;