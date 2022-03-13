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
};

var triangleType=function(sideOne,sideTwo,sideThree){
    if (sideOne==sideTwo && sideTwo==sideThree){
        return "equilateral";
    } else if(sideOne=sideTwo || sideTwo==sideThree){
        return "isosceles";
    }  else {
        return "scalene";
    }
    
};

// user logic
$(document).ready(function(){
    $("form".tri).submit(function(event){
       let sideOne=parseInt($("input#sideOne").val());
       let sideTwo=parseInt($("input#sideTwo").val());
       let sideThree=parseInt($("input#sideThree").val());
    })
}