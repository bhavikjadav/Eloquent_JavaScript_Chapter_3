let launchMissiles = function() {
    missileSystem.launch("now");
}
if(safeMode) {
    launchMissiles = function() {/* Do Nothing.. */}
}