import './App.css'
import logoTitle from "./assets/logo-medium.png"
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/navBar/NavBar.jsx";
import Home from "./pages/home/Home.jsx"
import Overview from "./pages/overview/Overview.jsx";
import BlogPost from "./pages/blogPost/BlogPost.jsx";
import NewPost from "./pages/newPost/NewPost.jsx";




function App() {
    return (
        <>
            <NavBar navLogo={logoTitle}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/overview" element={<Overview/>}/>
                <Route path="/blogpost" element={<BlogPost/>}/>
                <Route path="/newblog" element={<NewPost/>}/>
            </Routes>

        </>
    )
}

export default App
