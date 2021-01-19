import { Format } from './FormatPrice'

const number = 200100
const result = `200100 ₫`

test('format number to vnd', () => {
    expect(Format(number)).toBe(result);
  });