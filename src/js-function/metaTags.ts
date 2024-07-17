
interface props{
    title:string
    description:string

}
function Meta({title,description}:props){


    if(title){
        document.title = title
    }
    if(description){
        let dsTag = document.querySelector('meta[name="description"]')
        if(!dsTag){
            dsTag = document.createElement('meta')
            dsTag.setAttribute('name','description');

            document.head.appendChild(dsTag)
        }
        dsTag.setAttribute('content',description)
    }
}


export default Meta