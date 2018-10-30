let flipCoin = ((name1, name2, coinFlip) => {
    let results = []
    let coinFlip = Math.round(Math.random(2))
    let numberOfTimesWon1 = 0
    let numberOfTimesWon2 = 0

    return () => {
      let counter = 0
      while (counter < 3) {
        if (coinFlip === 1) {
        results.push(1)
        numberOftimesWon1++
        counter++
      } else if {
        coinFlip === 0
        results.push(0)
        numberOfTimesWon2++
        counter++
      }
    }
        if (numberOfTimesWon1 > numberOfTimesWon2) {
        console.log(`${name1} won ${numberOfTimesWon1}`)
      }  else {
          console.log(`${name2} won ${numberOfTimesWon2}`)
      }
    }
})()
