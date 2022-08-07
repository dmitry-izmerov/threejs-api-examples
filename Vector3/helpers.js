window['three'] = THREE;

function createLine(a, b) {
    const geometry = new THREE.BufferGeometry().setFromPoints([a, b]);
    const material = new THREE.LineBasicMaterial( { color: 0xffff00 } );
    const line = new THREE.Line( geometry, material );
    return line;
}
