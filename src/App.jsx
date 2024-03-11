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
import posts from "../src/constants/data.json"
import NotFound from "./pages/notFound/NotFound.jsx";

function App() {
    return (
        <>
            <NavBar navLogo={logoTitle}/>
            <Routes>
                <Route path="/" element={<Home image={logo}/>}/>
                <Route path="/overview" element={<Overview data={posts}/>}/>
                <Route path="/blogpost/:id" element={<BlogPost data={posts}/>}/>
                <Route path="/newblog" element={<NewPost/>}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
