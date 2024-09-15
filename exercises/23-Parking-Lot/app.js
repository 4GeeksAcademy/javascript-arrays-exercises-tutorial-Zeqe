let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
function getParkingLotState(parkingState) {
  let totalSlots = 0;
  let availableSlots = 0;
  let occupiedSlots = 0;

  for (let i = 0; i < parkingState.length; i++) {
    for (let j = 0; j < parkingState[i].length; j++) { 
      if (parkingState[i][j] === 1 || parkingState[i][j] === 2){
        totalSlots++;
      }
      if (parkingState[i][j] === 2) {
        availableSlots++; 
      } else if (parkingState[i][j] === 1) {
        occupiedSlots++; 
      }
    }
  }

  return {
    totalSlots: totalSlots,
    availableSlots: availableSlots,
    occupiedSlots: occupiedSlots
  };
}

console.log(getParkingLotState(parkingState))
