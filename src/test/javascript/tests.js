QUnit.test("hello test", function (assert) {
    assert.ok(1 == "1", "Passed!");
});

QUnit.test("Showing label after function", function (assert) {
    viewNewLabel();
    var inserted = $('#inserted').length;
    assert.ok(inserted == 1, "Passed!");

});

QUnit.test("Showing label after blur (more integrative)", function (assert) {
    $('#myInputField').blur();
    var inserted = $('#inserted').length;
    assert.ok(inserted == 1, "Passed!");
});