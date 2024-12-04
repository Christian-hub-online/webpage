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

// Mock function to simulate asynchronous data fetch with a delay
const fetchAppData = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(appData); // Resolve the promise with appData after 1 second
        }, 1000);
    });
};

const loadData = async (retries = 3) => {
    try {
        const data = await fetchAppData(); // Simulate fetching the appData
        console.log(data);

        const dataArray = Object.values(data);
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
        if (retries > 0) {
            console.warn(`Retrying... attempts left: ${retries}`);
            setTimeout(() => loadData(retries - 1), 1000);
        } else {
            console.error("Failed to load data after retries: ", error);
        }
    }
};

// Ensure DOM is loaded before trying to append data
document.addEventListener('DOMContentLoaded', () => {
    if (container) {
        setTimeout(() => loadData(), 3000);
    } else {
        console.error("Container element not found");
    }
});
