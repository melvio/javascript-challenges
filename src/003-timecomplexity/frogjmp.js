
export default function frogJump(posX, posY, jumpDistance) {
    let targetDistance = posY - posX;
    return Math.ceil(targetDistance / jumpDistance);
}

