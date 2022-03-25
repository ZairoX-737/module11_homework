import { getPercent } from "../getPercent";

describe('test for getPercent function', () => {
    it('correct with standart nums', () => {
        expect(getPercent(10, 100)).toBe(10);
    });
    it('correct with decimal percent', () => {
        expect(getPercent(10.5, 200)).toBe(21);
    })
    it('correct with decimal num', () => {
        expect(getPercent(10, 100.55)).toBe(10.055);
    })
    it('correct with decimal nums', () =>{
        expect(getPercent(10.25, 100.65)).toBe(10.316625);
    })

    it('correct with < 0 nums', () => {
        expect(getPercent(-50, -245)).toBe('Incorrect input');
    })
})