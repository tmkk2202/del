const methods = {};
let output = 0;

methods.sumNumber = function(a,b){
    output = a + b;
    return output;
}

methods.Circumference=function(radius){
    output = 2*Math.PI*radius;
    return output;
}

methods.areaOfRectangle = function(a,b){
    output = a*b;
    return output;
    
}

exports.data = methods;

