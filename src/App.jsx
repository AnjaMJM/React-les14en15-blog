import './App.css'
import logo from "./assets/logo-black.png"
import logoTitle from "./assets/logo-medium.png"
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/navBar/NavBar.jsx";
import Home from "./pages/home/Home.jsx"
import Overview from "./pages/overview/Overview.jsx";
import BlogPost from "./pages/blogPost/BlogPost.jsx";
import NewPost from "./pages/newPost/NewPost.jsx";
import Footer from "./components/footer/Footer.jsx";




function App() {
    return (
        <>
            <NavBar navLogo={logoTitle}/>
            <Routes>
                <Route path="/" element={<Home image={logo}/>}/>
                <Route path="/overview" element={<Overview/>}/>
                <Route path="/blogpost/:id" element={<BlogPost/>}/>
                <Route path="/newblog" element={<NewPost/>}/>
            </Routes>
            <Footer />
        </>
    )
}

export default App
