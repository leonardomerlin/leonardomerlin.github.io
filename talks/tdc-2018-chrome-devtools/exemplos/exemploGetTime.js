function exemploGetTime() {
    const inicio = new Date().getTime()
    
    for(let i=0; i< 1000; i++) {
        if(i % 5) {
            console.count('qtd-multiplos');
        }
    }

    const fim = new Date().getTime()
    const tempoGasto = Math.round(fim - inicio)
    console.log('%cDemorou: %ims', 'font-size: 4rem;', tempoGasto);

}
// exemploGetTime();