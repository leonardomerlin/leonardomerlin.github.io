// active wait (keep your thread busy)
function wait(ms) {
    const start = new Date().getTime();
    for (let i = 0; i < 1e7; i++) {
        if (new Date().getTime() - start > ms) {
            break;
        }
    }
}
