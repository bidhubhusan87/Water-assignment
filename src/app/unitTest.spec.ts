describe('unitTest', ()=>{
    it('checks if unitTest is unitTest',
        ()=> expect('unitTest').toBe('unitTest')
    );
    it('checks if unitTest is not unitTest',
        ()=> expect('unitTest').not.toBe('unitTest1')
    );
})
