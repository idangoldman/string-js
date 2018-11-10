import '../src/index';

test('Check for capitalization', () => {
  const expected = 'John';
  const values = ['john', 'jOHN'];

  values.forEach(
    value => expect(value.capitalize()).toMatch(expected)
  );
});
