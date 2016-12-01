function moveClick() {
            gotNum = Tools.randNum(1, 200);
        console.log(gotNum)
        if (gotNum <= 100) {
            // no battle   
        } else if (gotNum > 200) {
            Scene.call.Battle();
        }
}
