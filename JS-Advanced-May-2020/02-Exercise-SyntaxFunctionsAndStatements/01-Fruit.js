function calculateFruitPrice(fruitName, weightInGrams, pricePerKg) {
    let weightInKg = weightInGrams / 1000;
    let money = weightInKg * pricePerKg;
    console.log(`I need $${money.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruitName}.`);
}

//calculateFruitPrice('orange', 2500, 1.80);
