performance.mark('flame3:start');

// active wait (keep your thread busy)
function wait(ms) {
  const start = new Date().getTime();
  for (let i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > ms) {
      break;
    }
  }
}

function runPromise() {
  
}

async function runAsync() {}

function customPromise() {
  return new Promise(resolve => {
    wait(1000);
    resolve();
  });
}

performance.mark('flame3:end');
performance.measure('JS_Measure', 'flame3:start', 'flame3:end');
