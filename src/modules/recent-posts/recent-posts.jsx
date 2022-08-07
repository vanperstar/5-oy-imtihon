import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AdminPost from "./admin-post/admin-post"

const RecentPosts = () => {

    useEffect(() => {
        fetch(" https://n36-blog.herokuapp.com/categories")
        .then(res => res.json())
        .then(data => console.log(data))
    })

    return(
        <>
        <Routes>
            <Route path="/" element={<AdminPost />} />
        </Routes>
        </>
    )
}

export default RecentPosts