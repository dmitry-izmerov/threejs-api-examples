window['three'] = THREE;

function createLine(a, b, color = 0xffff00) {
    const geometry = new THREE.BufferGeometry().setFromPoints([a, b]);
    const material = new THREE.LineBasicMaterial( { color } );
    const line = new THREE.Line( geometry, material );
    return line;
}
