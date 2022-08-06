import { Route, Routes } from "react-router-dom";
import AdminPost from "./admin-post/admin-post"

const RecentPosts = () => {
    return(
        <>
        <Routes>
            <Route path="/" element={<AdminPost />} />
        </Routes>
        </>
    )
}

export default RecentPosts