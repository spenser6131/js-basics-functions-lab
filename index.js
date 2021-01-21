function distanceFromHqInBlocks(block) {
  return Math.abs(42 - block)
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}

function  distanceTravelledInFeet(a, b) {
  return Math.abs((a - b) * 264)
}

function calculatesFarePrice(a, b) {
  let dis = distanceTravelledInFeet(a,b)
  switch (true) {
    case dis <= 400:
      return 0;
      break;
    case dis > 400 && dis < 2000:
      return (dis - 400) * .02;
      break;
    case dis >= 2000 && dis <= 2500:
      return 25;
      break;
    default:
      return 'cannot travel that far';
      break;
  }
}