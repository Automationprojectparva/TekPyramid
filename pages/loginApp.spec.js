const testdata=JSON.parse(JSON.stringify(require("../testData.json")))  //data driven testing 

class login{

    constructor(page){
        this.page=page
        this.username="#Email"
        this.password="#Password"
        this.chkbox="#RememberMe"
        this.loginbutton="//input[@value='Log in']"
    }

    async loginToApp(){
        await this.page.fill(this.username, testdata.username)
        await this.page.fill(this.password,testdata.password)
        await this.page.check(this.chkbox)
        await this.page.click(this.loginbutton)
    }
}
module.exports=login;