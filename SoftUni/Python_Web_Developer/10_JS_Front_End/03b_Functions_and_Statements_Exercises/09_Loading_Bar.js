function drawLoadingBar(percentage) {
  let progressBar = "[";

  for (let i = 0; i < percentage / 10; i++) {
    progressBar += "%";
  }

  for (let i = percentage / 10; i < 10; i++) {
    progressBar += ".";
  }

  progressBar += "]";

  console.log(`${percentage}% ${progressBar}`);

  if (percentage === 100) {
    console.log("Complete!\n[%%%%%%%%%%]");
  } else {
    console.log("Still loading...");
  }
}

// Test Cases
drawLoadingBar(30); // 30% [%%%.......]
drawLoadingBar(50); // 50% [%%%%%.....]
drawLoadingBar(100); // 100% Complete!
