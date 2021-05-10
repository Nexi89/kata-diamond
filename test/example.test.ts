import {createDiamond} from "../src";

test("Print A", () => {
    const character = 'A';

    const diamondString = createDiamond(character);

    expect(diamondString).toBe('A');
});

test("Print B", () => {
    const character = 'B';

    const diamondString = createDiamond(character);

    expect(diamondString).toBe(' A \nB B\n A ');
});
