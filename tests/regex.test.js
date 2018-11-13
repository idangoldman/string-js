import '../src/regex';

test('Check for email addresses', () => {
  const expected = [
    'idan@idan.com',
    'john@john.co.uk',
    'idan+spam@idan.work',
  ];

  const notExpected = [
    'idan@!exampl@.com',
    'idan@idan.com:123',
    'idan._idan.com',
  ];

  expected.forEach((value) => {
    expect(value.isEmail()).toBeTruthy();
  });

  notExpected.forEach((value) => {
    expect(value.isEmail()).toBeFalsy();
  });
});
