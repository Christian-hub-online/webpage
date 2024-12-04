const container = document.getElementById('container');

const loadData = () => {
    // Correcting the reference to appData
    const dataArray = Object.values(appData);
    console.log(dataArray)
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
