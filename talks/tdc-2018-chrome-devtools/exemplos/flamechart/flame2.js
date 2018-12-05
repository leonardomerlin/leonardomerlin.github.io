performance.mark('flame2:start');

// active wait (keep your thread busy)
function wait(ms) {
  const start = new Date().getTime();
  for (let i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > ms) {
      break;
    }
  }
}

setTimeout(function notAnomFn() {
  wait(500);
}, 1000);

performance.mark('flame2:end');
performance.measure('JS_Measure', 'flame2:start', 'flame2:end');
