export function del () {
    let click = document.getElementsByClassName('delete')
    for (let i = 0; i < click.length; i++){
        let clicks  =  click[i];
        clicks.onclick = function() {
        let remov = document.getElementsByClassName('weather')
        for (let x = 0 ; x < remov.length; x++ ) {
        let removs = remov[x];
        
        if (i == x)
        removs.remove()
        }
    }
    }


    setTimeout(del , 500)
    
}
