exports.recordRewardOnBlockchain = async (userId, points) => {
  console.log(`Blockchain: ${points} points added for ${userId}`);
  return true;
};