export function nonConstructibleChange(coins: number[]) {
    const sortedCoins = coins.sort((a, b) => a - b);
  
    let change = 0;
  
    for (let i = 0; i < sortedCoins.length; i++) {
      const currentCoin = sortedCoins[i];
  
      if (currentCoin > change + 1) {
        break
      }
  
      change += currentCoin;
    }
  
    return change + 1;
  }
