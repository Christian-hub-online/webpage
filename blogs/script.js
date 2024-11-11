const previewSection = $('.blog_previews');

// Fetch blog posts from API
const data = (async => {
    try {
        const response = fetch('https://neontek.co.ke/blogs/blogs.json');
        const blog_posts = response.json();
        console.log(blog_posts);
    } catch (error) {
        console.error('Error fetching blog posts:', error);
    }
})
console.log(data)