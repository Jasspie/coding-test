const Shuffle = (array) => {
  const shuffle = array.slice();
  for (let i = 0; i < shuffle.length; i++) {
    let rand = Math.floor(Math.random() * (shuffle.length - 1));
    [shuffle[i], shuffle[rand]] = [shuffle[rand], shuffle[i]];
  }
  return shuffle;
};

module.exports = Shuffle;
