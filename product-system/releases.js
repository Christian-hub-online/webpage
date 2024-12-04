const appDataUrl = "https://neontek.co.ke/product-system/product-details.json";
const container = document.getElementById('container');

const loadData = async () => {
    try {
        const response = await fetch(appDataUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json(); // Properly await the JSON conversion
        console.log("This is data:", data);
        
        const dataArray = Object.values(data); // This gets an array of app objects
        dataArray.forEach(app => {
            const portfolioBox = document.createElement('div');
            portfolioBox.classList.add('Portfolio-box', 'webdesign');
            portfolioBox.innerHTML = `
                <a href="${app.downloadlink}"><img src="${app.imgsrc}" width="250" height="250" alt="${app.name}"></a>
                <h3>${app.name}</h3>
                <p>${app.description}</p>
                <p>${app.version}</p>
            `;
            container.appendChild(portfolioBox);
        });
    } catch (error) {
        console.error("Failed to load data: ", error);
    }
};


loadData();

