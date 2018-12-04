performance.mark('main:start')

function run() {
    // main function...
    subFunction(1000);
    subFunction(500);
    subFunction(2000);
}


function subFunction(wait) {
    
}

performance.mark('main:end')
performance.measure('JS Measure', 'main:start', 'main:end')
