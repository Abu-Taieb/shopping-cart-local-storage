const addData = () => {
    const productValue = document.getElementById('product');
    const product = productValue.value;
    productValue.value = '';
    
    const quantityValue = document.getElementById('quantity');
    const quantity = quantityValue.value;
    quantityValue.value = '';
    displayData(product, quantity);
    getLocalStorageData();
    saveDataToLocalStorage(product, quantity)

}

let number = 0;
const displayData = (product, quantity) => {
    const getContainer = document.getElementById('container');
    const div = document.createElement('div');
    div.innerHTML = `
    <p class="border border-orange-200 my-2 rounded-md py-1 px-3">${number += 1}. ${product} : ${quantity} pcs</p>
    `;
    getContainer.appendChild(div)
}

const getLocalStorageData = () => {
    let getCart = {};
    const storedCart = localStorage.getItem('getCart');

    if(storedCart){
        getCart = JSON.parse(storedCart);
    }
    return getCart;
}

const saveDataToLocalStorage = (product, quantity) => {
    const getCart = getLocalStorageData();
    getCart[product] = quantity;
    const cartStringify = JSON.stringify(getCart);
    localStorage.setItem('getCart', cartStringify);
}

const displaySaveData = () => {
    const getData = getLocalStorageData();
    for(const product in getData){
        const quantity = getData[product];
        displayData(product, quantity);
    }
    
}
displaySaveData()