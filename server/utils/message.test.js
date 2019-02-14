var expect=require('expect');
var {generateMessage}=require('./message');

describe('generateMessage',()=>{
  it('should genreate correct message object',()=>{
    var from="Sanjeev";
    var text="Some Text";
    var message=generateMessage(from,text);
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,text});
  });
});
