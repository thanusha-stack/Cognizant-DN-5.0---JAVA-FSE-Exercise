import React, { Component } from "react";

class Posts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    loadPosts() {

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    posts: data
                });
            })
            .catch(error => {
                alert(error);
            });

    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {
        alert("Error : " + error);
        console.log(info);
    }

    render() {

        return (
            <div style={{ margin: "20px" }}>

                <h1 style={{ textAlign: "center" }}>Blog Posts</h1>

                {
                    this.state.posts.map(post => (

                        <div
                            key={post.id}
                            style={{
                                border: "1px solid gray",
                                borderRadius: "8px",
                                padding: "15px",
                                marginBottom: "15px",
                                backgroundColor: "#f8f8f8"
                            }}
                        >

                            <h2>{post.title}</h2>

                            <p>{post.body}</p>

                        </div>

                    ))
                }

            </div>
        );
    }
}

export default Posts;