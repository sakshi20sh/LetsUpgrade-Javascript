let obj = [
    {
      name: "Ram",
      age : 15,
      country: "India",
      hobbies: ["Dance","Singing"]
    },
    {
        name: "Rakesh",
        age : 45,
        country: "Brazil",
        hobbies: ["Dance","Singing","Drawing"]
    }]

obj.forEach(element => console.log(element));
if(obj.age<30){
  obj.forEach(element => console.log(element));
}      
if(obj.country=="India"){
  obj.forEach(element => console.log(element));
}
    
