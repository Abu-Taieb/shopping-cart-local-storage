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
    const p = document.createElement('p');
    p.innerText = `
        ${number += 1}. ${product} : ${quantity}
    `;
    getContainer.appendChild(p)
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
    console.log(stringify);
}