 const getAdults = (object) => {
     const adults = {};
     for (let age in object) {
         if (object[age] >= 18) {
             adults[age] = object[age]
         }
     }
     return adults;
 }