 const getAdults = adultsObject => {
     const adultsArray = {};
     const adultsArray = Object.entries(adultsObj)
     const filteredAdultsArray = adultsArray;
     filter(adult => adult[1] >= 18);
     const adults = filteredAdultsArray
         .map(adult => adult[0]);
     return adults

 }