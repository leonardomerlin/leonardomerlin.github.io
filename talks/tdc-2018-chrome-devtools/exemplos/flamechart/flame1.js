performance.mark('flame1:start')



wait(500);

performance.mark('flame1:end')
performance.measure('JS_Measure', 'flame1:start', 'flame1:end')
