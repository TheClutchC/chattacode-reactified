import React, {useState} from "react";
import { Container } from "reactstrap";

const BlogPage = () => {
    const [numOfSubmittedBlogPosts, submitNewBlogPost] = useState(0);

    return (
        <Container>
            <h1>Blog Page</h1>
            <p style={{  }}>
                {numOfSubmittedBlogPosts} blogs posted:
            </p>
            <button onClick={() => submitNewBlogPost(numOfSubmittedBlogPosts + 1)} style={{ backgroundColor: "pink" }}>
                Submit New Blog Post
            </button>
        </Container>
    );
};

export default BlogPage;