const appData = {
    "app-0": {
        "name": "Magistra",
        "version": "Version 1.0.0",
        "description": "Keep your quiet time quiet",
        "author": "Wesley Weiss",
        "imgsrc": "https://neontek.co.ke/product-system/img/Magistra.png",
        "downloadlink": "https://neontek.co.ke/assets/Magistra.apk"
    }
};

// Simulate a container element in the DOM
const container = document.getElementById('container');

const loadData = () => {
    // Correcting the reference to appData
    const dataArray = Object.values(appData);
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
};

loadData();
