module.exports = createProgress();
module.exports.createProgress = createProgress;

const progressLength = 50;

function createProgress() {
  return function(progress) {
    let strValue = "";
    for (let i = 0; i < progressLength; i++) {
      strValue += progress * progressLength > i ? "#" : ".";
    }
    const numericalValue = (progress * 100).toFixed(2);
    process.stdout.write(`[${strValue}] ${numericalValue}% \r`);
  };
}
