/*Psalms 37. 1 | Do not fret because of evil men or be envious of those who do wrong*/
$(document).ready(function () {

    $('.menu').click(function() {
        $('.overlay').toggleClass('anim');
        $(this).addClass('open')
    });

    $('.open').click(function(){
        $('.overlay').toggleClass('reverse-animation');
    })
});
$(document).ready(setTimeout(function () {
    $('.loader').addClass('hidden');
    $('header').removeClass('hidden');
    $('main').removeClass('hidden');
}, 2000))
// Checkout functionality;
const checkout = [["-","0"]];
const checkboxes = [
    $('#full-cv-package'),
    $('#cv-update'),
    $('#ecommerce'),
    $('#wp-business'),
    $('#wp-individual'),
    $('#non-wp-sub'),
    $('#non-wp-sans-sub'),
    $('#hosting-yes'),
    $('#domain-com'),
    $('#domain-co'),
    $('#domain-coke'),
    $('#domain-github'),
    $('#mobile-design-yes'),
    $('#tech-support-yes'),
];
const counter = $('#counter');
const counterRow1 =  $('#counter-row-one');
const checkoutTotal = $('#total');  
const order = $('#order');



const addItem = () => {
    checkboxes.forEach(box => {
        if (box.is(':checked')) {
            const ariaLabel = box.attr('aria-label');
            const value = box.val();
            const exists = checkout.some(item => item[0] === ariaLabel);
            if (!exists) {
                checkout.push([ariaLabel, value]);
            }
        }
    });

};
const {ariaLabel, value} = checkout;
let orderValue = [];
const orderValueGen = () => {
    orderValue = [];
    for (let i = checkout.length - 1; i >= 0; i--) {
        if (!orderValue.some(item => item[0] === checkout[i][0])) {
            orderValue.push(checkout[i][0]);
        }
    }
    orderValue.splice(orderValue.length - 1, 1);
};

const updateUI = () => {
    orderValueGen();
    let total = checkout.reduce((total, item) => total + parseInt(item[1]), 0);
    total = `${total === 0? total: Math.floor(Number(total) / 1000) + `,${Number(total) % 1000 === 0? "000" : Number(total) % 1000}`}`;
    if (checkout.length === 1) {
        counter.html(`
            <tr><td class="col-xs-5"><h3>Item</h3></td> <td class="col-sm-1"><h3>Price</h3></td></tr>
            <tr id="counter-row-one"><td> ${checkout[0][0]} </td> <td> ${checkout[0][1]} </td></tr>
            <tr id="total"><td><strong>Total</strong></td> <td><strong>KES</strong> ${total}</td></tr>
        `);
    } else if (checkout.length === 2) {
        const checkout1CashDisplay = `${checkout[1][1] === 0? checkout[1][1]: Math.floor(Number(checkout[1][1]) / 1000) + `,${Number(checkout[1][1]) % 1000 === 0 && Number(checkout[1][1]) > 0? "000" : Number(checkout[1][1]) % 1000}`}`;
        counter.html(`
        <tr><td class="col-xs-5"><h3>Item</h3></td> <td class="col-sm-1"><h3>Price</h3></td></tr>
        <tr id="counter-row-one"><td> ${checkout[1][0]} </td> <td> ${checkout1CashDisplay} </td></tr>
        <tr id="total"><td><strong>Total</strong></td> <td><strong>KES</strong> ${total}</td></tr>
        `);
    } else {
        counter.html(`
        <tr><td class="col-xs-5"><h3>Item</h3></td> <td class="col-sm-1"><h3>Price</h3></td></tr>
        `)
        for(let i = checkout.length - 1; i > 0 ; i--) {
            const checkoutICashDisplay = `${Number(checkout[i][1]) === 0? checkout[i][1] : Math.floor(Number(checkout[i][1]) / 1000)},${Number(checkout[i][1]) % 1000 === 0? "000" : Number(checkout[i][1]) % 1000}`;
            if (checkoutICashDisplay == "0,000") {
                counter.append(`
                <tr>
                    <td> ${checkout[i][0]} </td> <td> N/A </td>
                </tr>
                `)
            } else if (checkout[i][1] < 1000){
                counter.append(`
                <tr>
                    <td> ${checkout[i][0]} </td> <td> ${checkout[i][1]} </td>
                </tr>
                `)
            } else {
                counter.append(`
                <tr>
                    <td> ${checkout[i][0]} </td> <td> ${checkoutICashDisplay} </td>
                </tr>
                `)
            }
            
        }
        counter.append(`
        <tr name="Total" id="total"><td><strong>Total</strong></td> <td><strong>KES</strong> ${total}</td></tr>
        `)
    }
   order.val(orderValue);
}
const removeItem = (ariaLabel) => {
    const index = checkout.findIndex(item => item[0] === ariaLabel);
    if (index !== -1) {
        checkout.splice(index, 1);
    }
};
checkboxes.forEach((box) => {
    box.on('click', () => {
        const ariaLabel = box.attr('aria-label'); 
        orderValueGen();
        if (box.is(':checked')) {
            addItem();
        } else {
            removeItem(ariaLabel);
        }
    })
});
$("input:checkbox").on('click', updateUI);
updateUI();
