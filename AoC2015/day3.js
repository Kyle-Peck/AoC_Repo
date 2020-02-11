function day3a(){
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    
    var pos = [];
    var x = 0;
    var y = 0;    
    var ans = 0;

    var grid = ["0, 0"];
    grid = input.split("");

    pos.push(x + ", " + y);

    for(var i = 0; i < grid.length; i++){
        check = false;
        if(grid[i] === "^"){
            x++;
        }else if(grid[i] === ">"){
            y++;
        }else if(grid[i] === "v"){
            x--;
        }else if(grid[i] === "<"){
            y--;
        }
        pos.push(x + ", " + y);
    }
    loop:
    for(var j = 0; j<pos.length; j++){
        for(var i = j+1; i<pos.length-1; i++){
            if(pos[i] === pos[j]){
                continue loop;
            }
        }
        ans++;
    }
    output.innerHTML = ans-1;
    console.table(grid);
    console.table(pos);
}

function day3b(){
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var pos = [];
    var x1 = 0;
    var y1 = 0;   
    var x2 = 0;
    var y2 = 0;  
    var ans = 0;

    var grid = ["0, 0"];
    grid = input.split("");

    pos.push("0, 0");

    for(var i = 0; i < grid.length; i++){
        check = false;
        if(i % 2 === 0){
            if(grid[i] === "^"){
                x1++;
            }else if(grid[i] === ">"){
                y1++;
            }else if(grid[i] === "v"){
                x1--;
            }else if(grid[i] === "<"){
                y1--;
            }
            pos.push(x1 + ", " + y1);
        }
        if(i % 2 === 1){
            if(grid[i] === "^"){
                x2++;
            }else if(grid[i] === ">"){
                y2++;
            }else if(grid[i] === "v"){
                x2--;
            }else if(grid[i] === "<"){
                y2--;
            }
            pos.push(x2 + ", " + y2);
        }
            
    }
    
    console.log(pos);

    loop:
    for(var j = 0; j<pos.length; j++){
        for(var i = j+1; i<pos.length-1; i++){
            if(pos[i] === pos[j]){
                continue loop;
            }
        }
        ans++;
    }
    output.innerHTML = ans-1;
}