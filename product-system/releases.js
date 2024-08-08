const appDataUrl = "/webpage/product-system/product-details.json"; // URL to the JSON file
const container = $('#container');

// Fetch the JSON data from the URL
$.getJSON(appDataUrl, function(data) {
    const dataArray = Array.from(Object.values(data));
    console.log(dataArray)
    dataArray.forEach(app => {
        container.append(`
            <div class="Portfolio-box webdesign">
                <a href="${app.imgsrc}"><img width="250" height="200" alt="${app.name}"></a>
                <h3>${app.name}</h3>
                <p>${app.description}</p>
            </div>
        `);
    });
});
