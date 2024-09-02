const appDataUrl = "https://neontek.co.ke/product-system/product-details.json";
const container = $('#container');

const loadData = () => {
    $.getJSON(appDataUrl)
        .done(function(data) {
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
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            console.error("Failed to load data: ", textStatus, errorThrown);
            // Optionally, handle the error gracefully here
        });
}

// Delay loading data by 2 seconds
setTimeout(loadData, 2000);
