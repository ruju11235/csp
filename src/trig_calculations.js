// Converts an angle from degrees to radians.
function deg_to_rad(degrees)
{
    return degrees * Math.PI / 180;
}

// Converts an angle from radians to degrees.
function rad_to_deg(radians)
{
    return radians * 180 / Math.PI;
}

console.log(deg_to_rad(180));
console.log(rad_to_deg(Math.PI / 2));