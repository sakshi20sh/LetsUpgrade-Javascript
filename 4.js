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
    },
    {
        name: "Mukesh",
        age : 32,
        country: "India",
        hobbies: ["Skating","Singing"]
      },
      {
        name: "Sam",
        age : 16,
        country: "China",
        hobbies: ["Playing","Singing"]
      }]
     
      for (let i = 0; i < obj.length; i++) {
          if(obj[i].age<30)
           {console.log(obj[i]);}
         }
    
         for (let i = 0; i < obj.length; i++) {
            if(obj[i].country=="India")
             {console.log(obj[i]);}
           }