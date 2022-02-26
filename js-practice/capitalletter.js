function tocapital(string){
    var oldarray = string.split(' '),
        newarray = [];
    
    for(var i = 0;i<oldarray.length;i++){
        newarray.push(oldarray[i].charAt(0).toUpperCase() + oldarray[i].slice(1));
    }
    return newarray.join(' ');
};

console.log(tocapital("elzero web school"));