function day7a(){
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var array = []
    var pos = 0;
    
    input = input.split(" ");

    while (input.length >   0){
        array[pos] = [];
        var x = input.indexOf("->") + 1;
        var y = 0;
        while(y <= x){
            array[pos].push(input[0]);
            input.shift();
            y++
        }
        pos ++;
    }

    /*  ~~~~~~~~~~~~~~~~~~~~~~~  
    input is now enpty and 
    array is an list of arrays with every thing
    ~~~~~~~~~~~~~~~~~~~~~~~~*/
    
    console.log(array)
    for(var i = 0; i < array.length; i ++){
        if(array[i].length === 3){
            if(isNaN(array[i][0])){
            }else{
                input.push(array[i][2]);
                input.push(array[i][0]);
                array.splice(i,1);
                i--;
            }
        }
    }

    function check(){
        for()
    }

    function binary(number){
        
    }
}

function day7b(){
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    
}