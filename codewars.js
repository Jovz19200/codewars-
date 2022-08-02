function likes(names) {
  // TODO
  var result;
  if (names.length === 0 || names == undefined){
       result = "no one likes this";
    }
  else if (names.length ===1){
     return result = names[0] + " " + "likes this";
  }
   else if (names.length === 2 ){
    return result = names[0] + " " + "and"+" "+names[1] + " " +"like this";
  }
   else if (names.length === 3){
    return result = names[0] + ","+ " " + names[1] + " " + "and" + " " + names[2] + " " +"like this";
  }
  else {
     return result = names[0] + ","+ " " + names[1] + " " + "and" + " " + (names.length-2) + " " +"like this";
  }
 return result;
  }  
 var name_1 = [];

console.log(likes(name_1));
     
