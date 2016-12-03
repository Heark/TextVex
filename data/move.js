console.log("Loaded Movement");
function moveClick() {
            gotNum = Tools.randNum(1, 200);
        console.log(gotNum)
        if (gotNum <= 100) {
            // no battle   
        } else {
            Scene.Call.Battle();
        }
}
