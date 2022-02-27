const Employee = require('../lib/Employee');


describe('Attributes are set with correct values', () => {

  it('Has a name', () => {
    const arman = new Employee('Arman', 80080, 'arman@ham.com');
    expect(arman.name).toBe('Arman');
  });

  it('Has an id', () => {
    const arman = new Employee('Arman', 80080, 'arman@ham.com');
    expect(arman.id).toBe(80080);
  });

  it('Has an email', () => {
    const arman = new Employee('Arman', 80080, 'arman@ham.com');
    expect(arman.email).toBe('arman@ham.com');
  });

  it('Has a role as an Employee', () => {
    const arman = new Employee('Arman', 80080, 'arman@ham.com');
    expect(arman.role).toBe('Employee');
  })

});


describe('Able to access the correct values', () => {

  it('Gets the correct name', () => {
    const steve = new Employee('Steve', 42, 'steve@ham.com');
    expect(steve.getName()).toBe('Steve');
  });

  it('Gets the correct id', () => {
    const steve = new Employee('Steve', 42, 'steve@ham.com');
    expect(steve.getID()).toBe(42);
  });

  it('Gets the correct email', () => {
    const steve = new Employee('Steve', 42, 'steve@ham.com');
    expect(steve.getEmail()).toBe('steve@ham.com');
  });

  it('Gets the correct role', () => {
    const steve = new Employee('Steve', 42, 'steve@ham.com');
    expect(steve.getRole()).toBe('Employee');
  });

});
