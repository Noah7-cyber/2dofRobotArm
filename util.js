export const DegToRad = (val) =>{
    return ((Math.PI*val)/180)
}
export const RadToDeg = (val) =>{
        return ((180 * val)/ Math.PI)
}
export const  lerp =(A, B, t) =>{
    return A+(B-A)*t;
}
