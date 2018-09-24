browser.ignoreSynchronization = true;

describe('Protractor Demo App', function() {
    it('should have a title', function() {
      browser.get('https://juliemr.github.io/protractor-demo/');
  
      expect(browser.getTitle()).toEqual('Super Calculator');
    });
  });

  describe('Protractor Demo App', function() {
    it('should add one and two', function() {
      browser.get('https://juliemr.github.io/protractor-demo/');
      await.sleep(2000);
      element(by.model('first')).sendKeys(1);
      element(by.model('second')).sendKeys(2);  
      element(by.id('gobutton')).click(); 
     
      console.log(element(by.binding('latest')).getText());
      expect(element(by.binding('latest')).getText()).toEqual('3'); // This is wrong!
          
    });
  });



  