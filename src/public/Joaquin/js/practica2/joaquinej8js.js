function total(prices, amounts) {
    let totalAPagar = 0;
    for (const key in amounts){ //
        totalAPagar = totalAPagar + (prices[key] * amounts[key]);
    }
    if (totalAPagar === 0){
        return 'No dates';
    }
    else
        return totalAPagar;
    
}

