const progress = require("./index");

async function testGlobal() {
  for (let i = 0; i < 1e3; i++) {
    await new Promise(resolve => setTimeout(resolve, 5));

    progress(i / 1e3);
  }
}

async function testLocal() {
  console.log("starting something incredibly long");
  const localProgress = progress.createProgress();
  for (let i = 0; i < 1e3; i++) {
    await new Promise(resolve => setTimeout(resolve, 5));

    localProgress(i / 1e3);
  }
  console.log("All done!");
}

testLocal();
