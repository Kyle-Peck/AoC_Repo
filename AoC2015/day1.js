function day1a(){
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var array = [];
    var ans = 0

    for(var i = 0; i<input.length; i++){
        array.push(input.charAt(i));
        if(array[i] === "("){
            ans++;
        }else{
            ans--;
        }
    }
    output.innerHTML = ans;
}

function day1b(){
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var array = [];
    var ans = 0;
    var arrayAns = []

    for(var i = 0; i<input.length; i++){
        array.push(input.charAt(i));
        if(array[i] === "("){
            ans++;
        }else{
            ans--;
        }

        if(ans === -1){
            arrayAns.push(i+1);
        }
    }
    output.innerHTML = arrayAns[0];
    
}
