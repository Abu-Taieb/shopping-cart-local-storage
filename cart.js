const addData = () => {
    const productValue = document.getElementById('product');
    const product = productValue.value;
    productValue.value = '';
    
    const quantityValue = document.getElementById('quantity');
    const quantity = quantityValue.value;
    quantityValue.value = '';
    displayData(product, quantity);   
}