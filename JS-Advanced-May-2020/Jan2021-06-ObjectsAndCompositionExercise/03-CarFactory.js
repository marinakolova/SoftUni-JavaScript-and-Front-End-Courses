function solve(requiredObject) {
    let engineCatalog = {
        small: {
            power: 90,
            volume: 1800,
        },
        normal: {
            power: 120,
            volume: 2400,
        },
        monster: {
            power: 200,
            volume: 3500,
        },
    };
    
    let selectedEngine = 
        requiredObject.power <= 90 ? 'small'
        : requiredObject.power <= 120 ? 'normal'
        : 'monster';
    
    let selectedWheelSize = 
        requiredObject.wheelsize % 2 === 0 ? requiredObject.wheelsize - 1
        : requiredObject.wheelsize;
    
    let result = {
        model: requiredObject.model,
        engine: {
            power: engineCatalog[selectedEngine].power,
            volume: engineCatalog[selectedEngine].volume,
        },
        carriage: {
            type: requiredObject.carriage,
            color: requiredObject.color,
        },
        wheels: Array(4).fill(selectedWheelSize),
    };

    return result;
}
