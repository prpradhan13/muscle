// Shop By Goal Section
// Shop by Goal Buttons Select
let leanBtn = document.getElementById('lean_btn');
let bulkBtn = document.getElementById('bulk_btn');
let sportsBtn = document.getElementById('sports_btn');
let weightBtn = document.getElementById('weight_btn');

// Shop by Goal Header Box Select
let headerBox1 = document.getElementById('shop_by_goal_page_1');
let headerBox2 = document.getElementById('shop_by_goal_page_2');
let headerBox3 = document.getElementById('shop_by_goal_page_3');
let headerBox4 = document.getElementById('shop_by_goal_page_4');

// shop by Goal Products Select
let leanProduct = document.getElementById('by_goal_product_1');
let bulkProduct = document.getElementById('by_goal_product_2');
let sportsProduct = document.getElementById('by_goal_product_3');
let lossProduct = document.getElementById('by_goal_product_4');


const showLeanPage = () => {
    // Change Buttons color
    leanBtn.style.backgroundColor="#ffbe00";
    bulkBtn.style.backgroundColor="#fff";
    sportsBtn.style.backgroundColor="#fff";
    weightBtn.style.backgroundColor="#fff";

    // Show Header Box
    headerBox1.classList.remove('active_box');
    headerBox2.classList.add('active_box');
    headerBox3.classList.add('active_box');
    headerBox4.classList.add('active_box');

    // Show Products
    leanProduct.classList.remove('active_box');
    bulkProduct.classList.add('active_box');
    sportsProduct.classList.add('active_box');
    lossProduct.classList.add('active_box');
}

const showbulkPage = () => {
    bulkBtn.style.backgroundColor="#ffbe00";
    leanBtn.style.backgroundColor="#fff";
    sportsBtn.style.backgroundColor="#fff";
    weightBtn.style.backgroundColor="#fff";

    headerBox2.classList.remove('active_box');
    headerBox1.classList.add('active_box');
    headerBox3.classList.add('active_box');
    headerBox4.classList.add('active_box');

    leanProduct.classList.add('active_box');
    bulkProduct.classList.remove('active_box');
    sportsProduct.classList.add('active_box');
    lossProduct.classList.add('active_box');
}

const showSportsPage = () => {
    sportsBtn.style.backgroundColor="#ffbe00";
    bulkBtn.style.backgroundColor="#fff";
    leanBtn.style.backgroundColor="#fff";
    weightBtn.style.backgroundColor="#fff";

    headerBox3.classList.remove('active_box');
    headerBox1.classList.add('active_box');
    headerBox2.classList.add('active_box');
    headerBox4.classList.add('active_box');

    leanProduct.classList.add('active_box');
    bulkProduct.classList.add('active_box');
    sportsProduct.classList.remove('active_box');
    lossProduct.classList.add('active_box');
}

const showWeightPage = () => {
    weightBtn.style.backgroundColor="#ffbe00";
    sportsBtn.style.backgroundColor="#fff";
    bulkBtn.style.backgroundColor="#fff";
    leanBtn.style.backgroundColor="#fff";

    headerBox4.classList.remove('active_box');
    headerBox1.classList.add('active_box');
    headerBox2.classList.add('active_box');
    headerBox3.classList.add('active_box');

    leanProduct.classList.add('active_box');
    bulkProduct.classList.add('active_box');
    sportsProduct.classList.add('active_box');
    lossProduct.classList.remove('active_box');
}

leanBtn.addEventListener('click', showLeanPage);
bulkBtn.addEventListener('click', showbulkPage);
sportsBtn.addEventListener('click', showSportsPage);
weightBtn.addEventListener('click', showWeightPage);