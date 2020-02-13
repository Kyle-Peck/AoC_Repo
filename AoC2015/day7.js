function day7a(){
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var array = []
    var pos = 0;
    var ans = 0;
    
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

    let input1 = [];
    let input2 = [];
    let operator = [];
    let outcome = [];
    let answers = [];
    let count = 0;

    //sorts the array into 4 parallel arrays with useful info
    for(var i = 0; i < array.length; i ++){

        if(array[i].length == 3){
            input1.push(array[i][0]);
            outcome.push(array[i][2]);
            operator.push("ASSIGN");
            input2.push("");
        }
        else if(array[i].length == 4){
            input1.push(array[i][1]);
            outcome.push(array[i][3]);
            operator.push(array[i][0]);
            input2.push("");
        }
        else if(array[i].length == 5){
            input1.push(array[i][0]);
            input2.push(array[i][2]);
            operator.push(array[i][1]);
            outcome.push(array[i][4])
        }
    }

    //will keep going until all of the inputs have been used up
    while(input1.length>0){
        //loops through all inputs to see if they are numbers or variables
        for(var i = 0; i < input1.length;i++){
            
            if(isNaN(input1[i]) == false){
                if(isNaN(input2[i]) == false || input2[i] == ""){
                    if(operator[i] == "ASSIGN"){
                        answers[count] = [];
                        answers[count].push(outcome[i]+"");
                        answers[count].push(input1[i]+"");
                        input1.splice(i,1);
                        input2.splice(i,1);
                        operator.splice(i,1);
                        outcome.splice(i,1)
                        i--;
                        count ++;
                    }else if(operator[i] == "NOT"){
                        answers[count] = [];
                        answers[count].push(outcome[i]+"");
                        answers[count].push(binNot(input1[i])+"");
                        input1.splice(i,1);
                        input2.splice(i,1);
                        operator.splice(i,1);
                        outcome.splice(i,1)
                        i--;
                        count++;
                    }else if(operator[i] == "LSHIFT"){
                        answers[count] = [];
                        answers[count].push(outcome[i]+"");
                        answers[count].push(shiftLeft(input1[i], input2[i])+"");
                        input1.splice(i,1);
                        input2.splice(i,1);
                        operator.splice(i,1);
                        outcome.splice(i,1)
                        i--;
                        count++;
                    }else if(operator[i] == "RSHIFT"){
                        answers[count] = [];
                        answers[count].push(outcome[i]+"");
                        answers[count].push(shiftRight(input1[i], input2[i])+"");
                        input1.splice(i,1);
                        input2.splice(i,1);
                        operator.splice(i,1);
                        outcome.splice(i,1)
                        i--;
                        count++;
                    }else if(operator[i] == "AND"){
                        answers[count] = [];
                        answers[count].push(outcome[i]+"");
                        answers[count].push(binAnd(input1[i], input2[i])+"");
                        input1.splice(i,1);
                        input2.splice(i,1);
                        operator.splice(i,1);
                        outcome.splice(i,1)
                        i--;
                        count++;
                    }else if(operator[i] == "OR"){
                        answers[count] = [];
                        answers[count].push(outcome[i]+"");
                        answers[count].push(binOr(input1[i], input2[i])+"");
                        input1.splice(i,1);
                        input2.splice(i,1);
                        operator.splice(i,1);
                        outcome.splice(i,1)
                        i--;
                        count++;
                    }
                }
            }
        }
        //once you loop through all the inputs and get any outcomes you can
        //replaces all existing variables with known outcomes. 
        for(var j =0; j< answers.length; j++){
            for(var k =0; k<input1.length; k++){
                if(input1[k] == answers[j][0]){
                    input1[k] = answers[j][1] + ""
                }
                if(input2[k] == answers[j][0]){
                    input2[k] = answers[j][1] + ""
                }
            }
        }
    }
    for(var x in answers){
        if(answers[x][0] == "a"){
            output.innerHTML = answers[x][1];
            ans = answers[x][1];
        }
    }
    return ans + "";
}

function day7b(){
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var array = []
    var pos = 0;
    var ans = 0;
    
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

    let input1 = [];
    let input2 = [];
    let operator = [];
    let outcome = [];
    let answers = [];
    let count = 0;

    //sorts the array into 4 parallel arrays with useful info
    for(var i = 0; i < array.length; i ++){

        if(array[i].length == 3){
            input1.push(array[i][0]);
            outcome.push(array[i][2]);
            operator.push("ASSIGN");
            input2.push("");
        }
        else if(array[i].length == 4){
            input1.push(array[i][1]);
            outcome.push(array[i][3]);
            operator.push(array[i][0]);
            input2.push("");
        }
        else if(array[i].length == 5){
            input1.push(array[i][0]);
            input2.push(array[i][2]);
            operator.push(array[i][1]);
            outcome.push(array[i][4])
        }
    }

    for(var y = 0; y<input1.length; y++){
        if(input1[y] == "b"){
            input1[y] = day7a();
        }
        if(input2[y] == "b"){
            input2[y] = day7a();
        }
    }

    //will keep going until all of the inputs have been used up
    while(input1.length>0){
        //loops through all inputs to see if they are numbers or variables
        for(var i = 0; i < input1.length;i++){
            if(isNaN(input1[i]) == false){
                if(isNaN(input2[i]) == false || input2[i] == ""){
                    if(operator[i] == "ASSIGN"){
                        answers[count] = [];
                        answers[count].push(outcome[i]+"");
                        answers[count].push(input1[i]+"");
                        input1.splice(i,1);
                        input2.splice(i,1);
                        operator.splice(i,1);
                        outcome.splice(i,1)
                        i--;
                        count ++;
                    }else if(operator[i] == "NOT"){
                        answers[count] = [];
                        answers[count].push(outcome[i]+"");
                        answers[count].push(binNot(input1[i])+"");
                        input1.splice(i,1);
                        input2.splice(i,1);
                        operator.splice(i,1);
                        outcome.splice(i,1)
                        i--;
                        count++;
                    }else if(operator[i] == "LSHIFT"){
                        answers[count] = [];
                        answers[count].push(outcome[i]+"");
                        answers[count].push(shiftLeft(input1[i], input2[i])+"");
                        input1.splice(i,1);
                        input2.splice(i,1);
                        operator.splice(i,1);
                        outcome.splice(i,1)
                        i--;
                        count++;
                    }else if(operator[i] == "RSHIFT"){
                        answers[count] = [];
                        answers[count].push(outcome[i]+"");
                        answers[count].push(shiftRight(input1[i], input2[i])+"");
                        input1.splice(i,1);
                        input2.splice(i,1);
                        operator.splice(i,1);
                        outcome.splice(i,1)
                        i--;
                        count++;
                    }else if(operator[i] == "AND"){
                        answers[count] = [];
                        answers[count].push(outcome[i]+"");
                        answers[count].push(binAnd(input1[i], input2[i])+"");
                        input1.splice(i,1);
                        input2.splice(i,1);
                        operator.splice(i,1);
                        outcome.splice(i,1)
                        i--;
                        count++;
                    }else if(operator[i] == "OR"){
                        answers[count] = [];
                        answers[count].push(outcome[i]+"");
                        answers[count].push(binOr(input1[i], input2[i])+"");
                        input1.splice(i,1);
                        input2.splice(i,1);
                        operator.splice(i,1);
                        outcome.splice(i,1)
                        i--;
                        count++;
                    }
                }
            }
        }
        //once you loop through all the inputs and get any outcomes you can
        //replaces all existing variables with known outcomes. 
        for(var j =0; j< answers.length; j++){
            for(var k =0; k<input1.length; k++){
                if(input1[k] == answers[j][0]){
                    input1[k] = answers[j][1] + ""
                }
                if(input2[k] == answers[j][0]){
                    input2[k] = answers[j][1] + ""
                }
            }
        }
    }
    for(var x in answers){
        if(answers[x][0] == "a"){
            output.innerHTML = answers[x][1];
            ans = answers[x][1];
        }
    }
    return ans;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~functions go below here~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

function numtoBin(number){
    let binary = "";
    let maxBin = 32768;
    for(var i = 0; i < 16; i ++){
        
        if(number/maxBin >= 1){
            binary += "1";
            number -= maxBin;
            maxBin /= 2;
        }else{
            binary += "0";
            maxBin /= 2;
        }
    }
    return binary;
}

function binToNum(binary){
    let number = 0;
    binary = binary.split("").reverse().join("")
    
    let multiplier = 1;
    for(var i = 0; i < binary.length; i ++){
        if (binary.charAt(i) == " "){
        }else{
            if(binary.charAt(i) === "0"){
                multiplier *= 2;
            }else{
                number += multiplier;
                multiplier *= 2;
            }
        }
    }
    return number
}

function binNot(number){
    let binary = numtoBin(number);
    let newBinary = "";

    for(var i = 0; i < binary.length; i ++){
        if (binary.charAt(i) == " "){
        }else{
            if(binary.charAt(i) === "0"){
                newBinary += "1";
            }else{
                newBinary += "0";
            }
        }
    }

    return binToNum(newBinary);
}

function shiftLeft(number, spaces){
    let binary = numtoBin(number);
    let newBinary = "";
    let count = 0;

    for(var i = spaces; i < binary.length; i ++){
        newBinary += binary.charAt(i);
        count ++;
    }
    while(count<16){
        newBinary += "0";
        count ++;
    }
    return binToNum(newBinary);
}

function shiftRight(number, spaces){
    let binary = numtoBin(number);
    let newBinary = "";
    let count = 0;
    while(count<spaces){
            newBinary += "0";
            count ++;
        }
    for(var i = 0; i < binary.length-spaces; i ++){
        newBinary += binary.charAt(i);
        count ++;
    }
    
    return binToNum(newBinary);
}

function binOr(number1, number2){
    let binary1 = numtoBin(number1);
    let binary2 = numtoBin(number2);
    let newBinary = "";

    for(var i = 0; i < binary1.length; i ++){
        if(binary1.charAt(i) == "1" || binary2.charAt(i) == "1"){
            newBinary += "1";
        }else{
            newBinary += "0";
        }
    }
    return binToNum(newBinary);
}

function binAnd(number1, number2){
    let binary1 = numtoBin(number1);
    let binary2 = numtoBin(number2);
    let newBinary = "";

    for(var i = 0; i < binary1.length; i ++){
        if(binary1.charAt(i) == "1" && binary2.charAt(i) == "1"){
            newBinary += "1";
        }else{
            newBinary += "0";
        }
    }
    return binToNum(newBinary);
}