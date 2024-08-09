const appDataUrl = "https://neontek.co.ke/product-system/product-details.json";
const container = $('#container');

const loadData = (retries = 5, delay = 2000) => {
    $.getJSON(appDataUrl, function(data) {
        const dataArray = Array.from(Object.values(data));
        dataArray.forEach(app => {
            container.append(`
                <div class="Portfolio-box webdesign">
                    <a href="${app.downloadlink}"><img src="${app.imgsrc}" width="250" height="250" alt="${app.name}"></a>
                    <h3>${app.name}</h3>
                    <p>${app.description}</p>
                    <p>${app.version}</p>
                </div>
            `);
        });
    }).fail(function() {
       loadData();
    });
}



