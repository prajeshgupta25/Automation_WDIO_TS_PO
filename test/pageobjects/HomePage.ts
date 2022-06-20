class HomePage{
   //Here selectors
   //Here functions
   public async visit(){
      await browser.url("http://zero.websecurity.com/index.html")
   }

}

export default new HomePage()