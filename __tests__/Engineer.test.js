const Engineer = require('../lib/Engineer');


describe('An Engineer should', () => {

  it('have a Github username', () => {
    const harper = new Engineer('Harper', 30678901, 'harper@ham.com', 'codeHarper');
    expect(harper.github).toBe('codeHarper');
  });

  it('get the correct Github username', () => {
    const harper = new Engineer('Harper', 30678901, 'harper@ham.com', 'codeHarper');
    expect(harper.getGithub()).toBe('codeHarper');
  });

  it('get the correct role', () => {
    const harper = new Engineer('Harper', 30678901, 'harper@ham.com', 'codeHarper');
    expect(harper.getRole()).toBe('Engineer');
  });

})