// Business Logic
var triangle=function(sideOne,sideTwo,sideThree){
    if(isTriangle(sideOne.sideTwo,sideThree)){
        return triangleType(sideOne,sideTwo,sideThree)
    } else{
        return "not a triangle";
    }
};

var isTriangle=function(sideOne,sideTwo,sideThree){
    return sideTwo=>(sideOne+sideThree) && sideTwo<=(sideThree+sideOne) && sideThree<=(sideOne+sideTwo)
}