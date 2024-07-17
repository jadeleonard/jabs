
async function GetNavbar() {
    try {
        const response = await fetch('https://green-market-backend-git-main-lukabartos-projects.vercel.app/navbar',{
            method:'GET',
            headers:{
                'Application-Type':'application.json'
            },


            cache:'no-store'
        })
        if(!response){
            throw new Error("Error")
        }
        const dataNavbar = await response.json()
        return dataNavbar
    } catch (error:any) {
        console.log(error.message)
        return []
    }
}
async function GetHero() {
    try{
        const response = await fetch('https://green-market-backend-git-main-lukabartos-projects.vercel.app/hero',{
            method:'GET',
            headers:{
                'Application-Type':'application/json'
            },
            cache:'no-store'
        })
        if(!response){
            throw new Error("error")
        }
        const dataHero = await response.json()
        return dataHero
    }catch(error:any){
        console.log(error.message)
        return[]
    }
}


export{GetNavbar,GetHero}