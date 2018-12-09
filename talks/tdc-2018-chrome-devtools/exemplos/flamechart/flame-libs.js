function a() { wait(100) }
function b() {
    const m1 = new moment()
    const m2 = new moment()
    return m2.add(m1)
}
function c() { wait(100) }

$('#btn').click(function meuCallback() {
    a();
    b();
    c();
});

