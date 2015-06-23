function fail() {
    window.location.href = "fail.html#" + testCfg.myName;
}
function pass() {
    window.location.href = testCfg.nextTest + ".html";
}
function assert(condition) {
    if(!condition) {
        fail();
    }
}