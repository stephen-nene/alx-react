import { getFullYear } from "./utils";
import { getFooterCopy } from "./utils";
import { getLatestNotification } from "./utils";

test('getFullYear returns the correct year', () => { 
    expect(getFullYear()).toBe(new Date().getFullYear());
 })

 test('getFooterCopy returns the correct string', () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
 })

 test('getLatestNotification returns the correct string' , () => {
    const expectedString = '<strong>Urgent requirement</strong> - complete by EOD'
    expect(getLatestNotification()).toBe(expectedString);
 })