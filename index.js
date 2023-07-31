function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks - 42);
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  return Math.abs(startBlock - endBlock) * 264;
}

function calculatesFarePrice(startBlock, endBlock) {
  const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
  if (distanceInFeet <= 400) return 0;
  if (distanceInFeet <= 2000) return (distanceInFeet - 400) * 0.02;
  if (distanceInFeet <= 2500) return 25;
  return 'cannot travel that far';
}
