var expect=require('expect');
var {generateMessage,generateLocationMessage}=require('./message');

describe('generateMessage',()=>{
  it('should genreate correct message object',()=>{
    var from="Sanjeev";
    var text="Some Text";
    var message=generateMessage(from,text);
    expect(message.createdAt).toExist();
    expect(message).toInclude({from,text});
  });
});
describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Deb';
    var latitude = 15;
    var longitude = 19;
    var url = 'https://www.google.com/maps?q=15,19';
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toExist();
    expect(message).toInclude({from, url});
  });
});
