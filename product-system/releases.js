const appDataUrl = "https://neontek.co.ke/product-system/product-details.json";
const container = document.getElementById('container');

const loadData = () => {
    fetch(appDataUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const dataArray = Array.from(Object.values(data));
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
        })
        .catch(error => {
            console.error("Failed to load data: ", error);
        });
}

// Call loadData once outside the function
loadData();


