const { test, expect } = require('@jest/globals');
const sonuc = require('./exp5.js');

test('yorum yapmayanlar', () => {
    const yorumsuzlar = [
        {
          id: '2a35032d-e02b-4508-b3b5-6393aff75a53',
          firstName: 'Terri',
          lastName: 'Bishop'
        },
        {
          firstName: 'Julio',
          lastName: 'Miller'
        },
        {
          id: '7f0ce45a-bdca-4067-968b-d908e79276ce',
          firstName: 'Gabriella',
          lastName: 'Steward'
        }
      ]
      expect(sonuc).toMatchObject(yorumsuzlar);
      
    
});