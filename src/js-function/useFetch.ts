

const apiNavbar = process.env.PUBLIC_API_NAVBAR



const apiHero = process.env.PUBLIC_API_HERO
async function GetNavbar() {
    try {
        const response = await fetch(apiNavbar,{
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
        const response = await fetch(apiHero,{
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