import '../App.css';
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import NavOut from "./NavOut"
import axios from 'axios';
function AffPosts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                console.log(res)
                setPosts(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    return (<div>
        <NavOut />
        <div class="d-pst">

            {posts.filter(post => post.userId == localStorage.getItem('id')).map(post => (
                <Card class="card-body" style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title class="C-tl" key={post.id}>{post.title}</Card.Title>
                        <Card.Text class="C-tx" key={post.id}>{post.body}
                        </Card.Text>

                    </Card.Body>
                </Card>
            ))}

        </div>
    </div>
    )
}
export default AffPosts;