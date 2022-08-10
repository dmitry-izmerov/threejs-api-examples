window['three'] = THREE;

function createLine(a, b, color = 0xff0000) {
    const geo = new THREE.BufferGeometry().setFromPoints([a, b]);
    const material = new THREE.LineBasicMaterial({ color });
    return new THREE.Line(geo, material)
}

function createPoint(point, radius = 1, color = 0xff0000) {
    const dotGeometry = new THREE.BufferGeometry().setFromPoints([point]);
    const dotMaterial = new THREE.PointsMaterial({ size: radius, sizeAttenuation: false, color , depthTest: false });
    return new THREE.Points(dotGeometry, dotMaterial);
}

function getVectorFromTo(start, end) {
    return end.clone().sub(start.clone());
}

function moveByDir(target, dirStart, dirEnd, multiply = (length) => length * 2) {
    const direction = getVectorFromTo(dirStart, dirEnd);
    const dirCurLength = direction.length();
    return target.clone().add(direction.multiplyScalar(multiply(dirCurLength) / dirCurLength))
}
