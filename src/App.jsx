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
import ErrorMessage from "./components/errorMessage/ErrorMessage.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {redirect} from "react-router-dom";

function App() {

    const [allBlogs, setAllBlogs] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        getAllBlogs()
    }, []);
    async function getAllBlogs() {
        try {
            const result = await axios.get("http://localhost:3000/posts");
            setAllBlogs(result.data)
            console.log(result.data)
        } catch (err) {
            setError(err)
        }
    }

    if (error === true) {
        return redirect("/error")
    }

    return (
        <>

                <NavBar navLogo={logoTitle}/>
                <main className="page-container">
                <Routes>
                    <Route path="/" element={<Home image={logo}/>}/>
                    <Route path="/overview" element={<Overview data={allBlogs}/>}/>
                    <Route path="/blogpost/:id" element={<BlogPost data={allBlogs}/>}/>
                    <Route path="/newblog" element={<NewPost/>}/>
                    <Route path="*" element={<NotFound/>}/>
                    <Route path="/error" element={<ErrorMessage />} />
                </Routes>
                </main>
            <Footer/>
        </>
    )
}

export default App
