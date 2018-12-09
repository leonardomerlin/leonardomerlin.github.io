function a() { wait(100) }
function b() {
    const m1 = new moment()
    const m2 = new moment()
    throw new Error('SHIT HAPPENS!')
}
function c() { wait(100) }

$('#btn').click(function meuCallback() {
    a();
    b();
    c();
});

