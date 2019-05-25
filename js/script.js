
function insert(num) {
    document.form.text.value = document.form.text.value + num;
}

function sup(s) {
    form.text.value = "";
}
function equal() {
    var exp = document.form.text.value;
    if (exp) {
        document.form.text.value = eval(document.form.text.value);
    }
}
