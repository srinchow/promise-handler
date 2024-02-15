import { to } from '../lib';
import { describe, expect, it } from '@jest/globals';


describe('to function', () => {
    it('should resolve with data if promise resolves', async () => {
        const result = await to(Promise.resolve('Success'));
        expect(result).toEqual([null, 'Success']);
    });

    it('should resolve with error if promise rejects', async () => {
        const error = new Error('Failed');
        const result = await to(Promise.reject(error));
        expect(result).toEqual([error, null]);
    });
});
