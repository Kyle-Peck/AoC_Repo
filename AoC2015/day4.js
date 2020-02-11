function day4a(){
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var i = 0;
    var check = true;
    while(check){
        if(md5(input+i).startsWith("00000"))
        {
            output.innerHTML = i;
            check = false
        }
        i++;
    }
}
function day4b(){
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var i = 0;
    var check = true;
    while(check){
        if(md5(input+i).startsWith("000000"))
        {
            output.innerHTML = i;
            check = false
        }
        i++;
    }
}