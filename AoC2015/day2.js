


function day2a(){

    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var dims = []
    var array = input.split(" ");
    var ans = 0;
    console.table(array);
    for(i=0; i<array.length; i++){
        dims[i] = array[i].split("x");
    }
    for(i=0; i<array.length; i++){
        for(j=0; j<3; j++){
            dims[i][j] = parseFloat(dims[i][j]);
        }
    }
    for(i=0; i<array.length; i++){
        var side1 = dims[i][0]*dims[i][1];
        var side2 = dims[i][1]*dims[i][2];
        var side3 = dims[i][0]*dims[i][2];
        ans += (2*side1)+(2*side2)+(2*side3);
        ans += Math.min(side1, side2, side3);
        
    }
    output.innerHTML = ans;
}

function day2b(){
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var dims = []
    var array = input.split(" ");
    var ans = 0;
    console.log(array);
    for(i=0; i<array.length; i++){
        dims[i] = array[i].split("x");
    }
    for(i=0; i<array.length; i++){
        for(j=0; j<3; j++){
            dims[i][j] = parseFloat(dims[i][j]);
        }
    }

    for(i=0; i<array.length; i++){
        
        dims[i]=dims[i].sort(function sorted(a,b){
            return a-b;
        })
        var side1 = dims[i][0];
        var side2 = dims[i][1];
        var side3 = dims[i][2];
        
        ans += (2*side1)+(2*side2)+(side1*side2*side3);
    }
    output.innerHTML = ans;
}


