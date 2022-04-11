const result = require('./exp4');

test('objemizde firstName ve lastName içermeli', ()=>{
      expect(result[0]).toHaveProperty('firstName' && 'lastName')
})