const previewSection = $('.blog_previews');

// Fetch blog posts from API
const data = (async () => {
    try {
        const response = await fetch('https://neontek.co.ke/blogs/blogs.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching blog posts:', error);
    }
})();

console.log(data.AI_Misconceptions)
