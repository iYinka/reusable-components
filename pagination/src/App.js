import React, { useState, useEffect } from "react";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import axios from "axios";
import "./App.css";

const App = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            // const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const res = await axios.get(
                "https://api.autodduct-test.com/GetClient"
            );

            setPosts(res.data);
            setLoading(false);
            console.log(res.data);
        };

        fetchPosts();
    }, []);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container mt-5">
            <h1 className="text-primary mb-3">My Blog</h1>
            <ul className="list-group mb-4">
                {currentPosts.map((post) => (
                    <li key={post.id} className="list-group-item">
                        {post.clientName}
                    </li>
                ))}
            </ul>
            {/* <Posts posts={currentPosts} loading={loading} /> */}
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
        </div>
    );
};

export default App;
