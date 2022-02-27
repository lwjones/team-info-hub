const Manager = require('../lib/Manager');


describe('A Manager should', () => {

  it('have a set an office number', () => {
    const evelyn = new Manager('Evelyn', 30404471, 'evelyn@ham.com', 140);
    expect(evelyn.officeNumber).toBe(140);
  });

  it('get the correct office number', () => {
    const evelyn = new Manager('Evelyn', 30404471, 'evelyn@ham.com', 140);
    expect(evelyn.getOfficeNumber()).toBe(140);
  });

  it('get the correct role', () => {
    const evelyn = new Manager('Evelyn', 30404471, 'evelyn@ham.com', 140);
    expect(evelyn.getRole()).toBe('Manager');
  });

})