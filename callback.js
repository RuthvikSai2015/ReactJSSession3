function taskOne(){
  console.log("task one");
}
function tasktwo(){
    console.log("task two");
}
function taskthree(){
    console.log("task three");
}

// setTimeout(taskOne,5000);
// taskthree();
// tasktwo();

function serverRequest(str,callback){
    setTimeout(function(){
        let response = str + " Full"; // response from the backend
        callback(response);
    },5000)
}

function getResults(response){
    console.log("Response from the server",response);
}

console.log("before response");
serverRequest("The Glass is half",getResults);
console.log("after response");