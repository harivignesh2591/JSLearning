browser.ignoreSynchronization = true;

var Thread = {
	sleep: function(ms) {
		var start = Date.now();
		
		while (true) {
			var clock = (Date.now() - start);
			if (clock >= ms) break;
		}
		
	}
};

// describe('Protractor Demo App', function() {
//     it('should have a title', function() {
//       browser.get('https://juliemr.github.io/protractor-demo/');      
//       expect(browser.getTitle()).toEqual('Super Calculator');
//     });
//   });

  describe('Protractor Demo App', function() {
    it('should add one and two', function() {
      browser.get('https://juliemr.github.io/protractor-demo/');      
      element(by.model('first')).sendKeys(1);
      element(by.model('second')).sendKeys(2);  
      element(by.id('gobutton')).click(); 
      browser.sleep(5000);
      element(by.binding())
      Thread.sleep(5000);
      console.log(element(by.binding('latest')).getText());
      expect(element(by.binding('latest')).getText()).toBe('3'); // This is wrong!
          
    });
  });