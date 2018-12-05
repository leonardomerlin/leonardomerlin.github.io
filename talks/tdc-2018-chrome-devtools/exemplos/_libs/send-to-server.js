// https://github.com/SitePen/paint-timing-blog-examples/blob/6c466715ad07659fc04541cfada1542677540879/report-to-node/client/index.html
const observer = new window.PerformanceObserver(list => {
    list.getEntries().forEach(({name, startTime}) => {
        console.log({name, startTime});
        // Need to report to a server here
        const data = {
            name,
            startTime
        };
        navigator.sendBeacon('http://127.0.0.1:3000', JSON.stringify(data));
    });
});
observer.observe({
    entryTypes: ['paint']
});
