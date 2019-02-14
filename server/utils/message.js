const moment = require('moment');
var generateMessage=(from,text)=>{
  return {
    from,
    text,
    createdAt:moment.valueOf()
  };
};

var generateLocationMessage=(from,lati,longi)=>{
  return{
    from,
    url:`https://www.google.com/maps?q=${lati},${longi}`,
    createdAt:moment.valueOf()
  };
};
module.exports={generateMessage,generateLocationMessage};
