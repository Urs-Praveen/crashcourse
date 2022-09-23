class User{
    static count=0
    constructor(username,email,password){
        this.username = username;
        this.email =email
        this.password=password
        User.count++
    }
    register(){
        console.log(this.username +" has been registered")
    }
    registeredUserCount(){
        console.log("No of User Registered are  - "+ User.count)
    }

}
class Member extends User{
    constructor(username,email,password,memberPackage){
        super(username,email,password)
        this.package= memberPackage;
        let todayDate=new Date();
        const membershipActiveTillDay = todayDate.getDay()
        const membershipActiveTillMonth = todayDate.getMonth();
        const membershipActiveTillYear = todayDate.getFullYear();
        this.membershipActiveTillDate = new Date(
            membershipActiveTillYear,
            membershipActiveTillMonth + 1,
            membershipActiveTillDay
        )
        }
        renewMembership(){
            
            const membershipActiveTillDay = this.membershipActiveTillDate.getDay();
            const membershipActiveTillMonth = this.membershipActiveTillDate.getMonth();
            const membershipActiveTillYear = this.membershipActiveTillDate.getFullYear()
            if(this.package === "Standard"){
            this.membershipActiveTillDate = new Date(
                membershipActiveTillYear,
                membershipActiveTillMonth +1,
                membershipActiveTillDay
            );
        }else if(this.package === "Yearly"){
            this.membershipActiveTillDate = new Date(
                membershipActiveTillYear + 1,
                membershipActiveTillMonth,
                membershipActiveTillDay
            );
        }
    }
    getPackage(){
        console.log(this.username+" is Subscribed to "+this.package+" package")
    }
    subscriptionActiveTillDate(){
        console.log(this.username+" is subscribed to "+this.package+" till "+this.membershipActiveTillDate)
    }
}
let vishal = new Member("vishal","vishal@gmail.xom","123","Standard")
let praveen = new Member("Praveen","Praveen@gmail.xom","123","Yearly")

vishal.getPackage();
vishal.register()
praveen.register()
vishpraveen.getPackage()
praveen.registeredUserCount()
praveen.subscriptionActiveTillDate()
vishal.subscriptionActiveTillDate()
praveen.renewMembership()
vishal.renewMembership()
praveen.subscriptionActiveTillDate()
vishal.subscriptionActiveTillDate()
praveen.registeredUserCount()