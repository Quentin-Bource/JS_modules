document.getElementById('chooseCity').addEventListener('keydown',function (e){
    if (e.key == "Enter")  
    catchData()}) ;


   export function vis() {
        let chooCity = document.getElementById('chooseCity')
    
        if  (chooCity.style.display == 'block')  {
            chooCity.style.display = 'none'
        }
        else {
            chooCity.style.display = 'block'
        }
    
    }
    document.getElementById('add').addEventListener('click' , vis);