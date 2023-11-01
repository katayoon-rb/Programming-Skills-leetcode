/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */

var checkStraightLine = function(coordinates) {
    var isStraight = function([ [ax, ay], [bx, by], [cx, cy] ]) {
        return ( (by - ay) * (cx - bx) === (cy - by) * (bx - ax) );
    }

    if (coordinates.length === 2) return true;

    for (let i = 2; i < coordinates.length; i++) {
        if ( !isStraight( [coordinates[0], coordinates[1], coordinates[i]] ) ) {
            return false;
        }
    }
        
    return true;
}
