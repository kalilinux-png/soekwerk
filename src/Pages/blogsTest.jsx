import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file

function App() {
    const [posts, setPosts] = useState([
        {
        id: 1, // Unique identifier for the post
        title: "The Rise of Serverless Computing",
        excerpt: "Serverless computing is a cloud computing execution model in which the cloud provider dynamically manages the allocation of server resources. Learn more about the benefits and considerations.",
        author: "John Doe",
        publishDate: "2024-04-11", // Date in a format suitable for your needs (e.g., ISO 8601)
        thumbnailUrl: "https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg", // Optional URL for a thumbnail image
        content: "<p>Serverless computing is revolutionizing the way applications are built and deployed. In this post, we'll delve into the concept...</p> ",  // Optional full content of the blog post (can be HTML or plain text)
        categories: ["Cloud Computing", "Technology Trends"], // Optional array of categories the post belongs to
        tags: ["serverless", "aws", "azure", "gcp"] // Optional array of tags for the post
    },
        {
        id: 1, // Unique identifier for the post
        title: "The Rise of Serverless Computing",
        excerpt: "Serverless computing is a cloud computing execution model in which the cloud provider dynamically manages the allocation of server resources. Learn more about the benefits and considerations.",
        author: "John Doe",
        publishDate: "2024-04-11", // Date in a format suitable for your needs (e.g., ISO 8601)
        thumbnailUrl: "https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg", // Optional URL for a thumbnail image
        content: "<p>Serverless computing is revolutionizing the way applications are built and deployed. In this post, we'll delve into the concept...</p> ",  // Optional full content of the blog post (can be HTML or plain text)
        categories: ["Cloud Computing", "Technology Trends"], // Optional array of categories the post belongs to
        tags: ["serverless", "aws", "azure", "gcp"] // Optional array of tags for the post
    },
        {
        id: 1, // Unique identifier for the post
        title: "The Rise of Serverless Computing",
        excerpt: "Serverless computing is a cloud computing execution model in which the cloud provider dynamically manages the allocation of server resources. Learn more about the benefits and considerations.",
        author: "John Doe",
        publishDate: "2024-04-11", // Date in a format suitable for your needs (e.g., ISO 8601)
        thumbnailUrl: "https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg", // Optional URL for a thumbnail image
        content: "<p>Serverless computing is revolutionizing the way applications are built and deployed. In this post, we'll delve into the concept...</p> ",  // Optional full content of the blog post (can be HTML or plain text)
        categories: ["Cloud Computing", "Technology Trends"], // Optional array of categories the post belongs to
        tags: ["serverless", "aws", "azure", "gcp"] // Optional array of tags for the post
    },
        {
        id: 1, // Unique identifier for the post
        title: "The Rise of Serverless Computing",
        excerpt: "Serverless computing is a cloud computing execution model in which the cloud provider dynamically manages the allocation of server resources. Learn more about the benefits and considerations.",
        author: "John Doe",
        publishDate: "2024-04-11", // Date in a format suitable for your needs (e.g., ISO 8601)
        thumbnailUrl: "https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg", // Optional URL for a thumbnail image
        content: "<p>Serverless computing is revolutionizing the way applications are built and deployed. In this post, we'll delve into the concept...</p> ",  // Optional full content of the blog post (can be HTML or plain text)
        categories: ["Cloud Computing", "Technology Trends"], // Optional array of categories the post belongs to
        tags: ["serverless", "aws", "azure", "gcp"] // Optional array of tags for the post
    },
        {
        id: 1, // Unique identifier for the post
        title: "The Rise of Serverless Computing",
        excerpt: "Serverless computing is a cloud computing execution model in which the cloud provider dynamically manages the allocation of server resources. Learn more about the benefits and considerations.",
        author: "John Doe",
        publishDate: "2024-04-11", // Date in a format suitable for your needs (e.g., ISO 8601)
        thumbnailUrl: "https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg", // Optional URL for a thumbnail image
        content: "<p>Serverless computing is revolutionizing the way applications are built and deployed. In this post, we'll delve into the concept...</p> ",  // Optional full content of the blog post (can be HTML or plain text)
        categories: ["Cloud Computing", "Technology Trends"], // Optional array of categories the post belongs to
        tags: ["serverless", "aws", "azure", "gcp"] // Optional array of tags for the post
    },
        {
        id: 1, // Unique identifier for the post
        title: "The Rise of Serverless Computing",
        excerpt: "Serverless computing is a cloud computing execution model in which the cloud provider dynamically manages the allocation of server resources. Learn more about the benefits and considerations.",
        author: "John Doe",
        publishDate: "2024-04-11", // Date in a format suitable for your needs (e.g., ISO 8601)
        thumbnailUrl: "https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg", // Optional URL for a thumbnail image
        content: "<p>Serverless computing is revolutionizing the way applications are built and deployed. In this post, we'll delve into the concept...</p> ",  // Optional full content of the blog post (can be HTML or plain text)
        categories: ["Cloud Computing", "Technology Trends"], // Optional array of categories the post belongs to
        tags: ["serverless", "aws", "azure", "gcp"] // Optional array of tags for the post
    },
        {
        id: 1, // Unique identifier for the post
        title: "The Rise of Serverless Computing",
        excerpt: "Serverless computing is a cloud computing execution model in which the cloud provider dynamically manages the allocation of server resources. Learn more about the benefits and considerations.",
        author: "John Doe",
        publishDate: "2024-04-11", // Date in a format suitable for your needs (e.g., ISO 8601)
        thumbnailUrl: "https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg", // Optional URL for a thumbnail image
        content: "<p>Serverless computing is revolutionizing the way applications are built and deployed. In this post, we'll delve into the concept...</p> ",  // Optional full content of the blog post (can be HTML or plain text)
        categories: ["Cloud Computing", "Technology Trends"], // Optional array of categories the post belongs to
        tags: ["serverless", "aws", "azure", "gcp"] // Optional array of tags for the post
    },
]);

    useEffect(() => {
        // Fetch blog post data (replace with your data fetching logic)
        // fetch('https://api.example.com/posts')
        //   .then(response => response.json())
        //   .then(data => setPosts(data));
    }, []);

    return (
        <div className="App">
            <header>
                <h1>My Tech Blog</h1>
                <nav>
                    {/* Navigation links */}
                </nav>
            </header>
            <main>
                {posts.map(post => (
                    <article key={post.id} className="post-card">
                        <img src={post.thumbnailUrl} alt={post.title} />
                        <h2>{post.title}</h2>
                        <p>{post.excerpt}</p>
                        <div className="post-meta">
                            <span>{post.author}</span> - <span>{post.publishDate}</span>
                        </div>
                    </article>
                ))}
            </main>
            <footer>
                {/* Footer content */}
            </footer>
        </div>
    );
}

export default App;
