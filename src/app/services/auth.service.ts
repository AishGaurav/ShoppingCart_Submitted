export class AuthService {
    checkOut = false;

    isAuthenticated(){
        const promise = new Promise((resolve, reject) =>{
            setTimeout(()=>{resolve(this.checkOut)}, 800);      // Fakes this takes sometime to finish
        });
        return promise;
    }
}