import {assert, should, expect}  from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () =>   {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('Test index.html', () => {
    it('should say hello world', (done) => {
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(index, function(error, window) {
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Sample \"Hello, World\" Application");
            done();
            window.close();
        })
    })
})
