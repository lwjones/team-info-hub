const Intern = require('../lib/Intern');


describe('An Intern should', () => {

  it('have a school', () => {
    const elijah = new Intern('Elijah', 30678901, 'elijah@ham.com', 'Foothills College');
    expect(elijah.school).toBe('Foothills College');
  });

  it('get the correct school', () => {
    const elijah = new Intern('Elijah', 30678901, 'elijah@ham.com', 'Foothills College');
    expect(elijah.getSchool()).toBe('Foothills College');
  });

  it('get the correct role', () => {
    const elijah = new Intern('Elijah', 30678901, 'elijah@ham.com', 'Foothills College');
    expect(elijah.getRole()).toBe('Intern');
  });

});