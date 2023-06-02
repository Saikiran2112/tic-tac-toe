let grid=document.getElementById('grid')
let t=document.getElementById('turn')
let result=document.getElementById('result')
let button=document.getElementById('play')
const array=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]]
let letter='X'
function create(){
    for(let i=0;i<9;i++){
        let n=document.createElement('div')
        n.setAttribute('id',i)
        n.setAttribute('class','sub')
        grid.appendChild(n)
        n.addEventListener('click',display)

    }
}
create()
function display(){
    if(t.innerHTML=='One'){
        t.innerHTML='Two'
    }
    else{
        t.innerHTML='One'
    }
   
    if(letter=='X'){
        this.textContent='X'
        letter='O'
        

    }
    else{
        this.textContent='O'
        letter='X'
    }
    this.removeEventListener('click',display)
    check()
    


}
let a,b,c
function check(){
    let s=document.getElementsByClassName('sub')
    array.forEach((element)=>{
        a=s[element[0]].textContent
        b=s[element[1]].textContent
        c=s[element[2]].textContent
        if(a==b && b==c && c==a && a=='X'){
            result.outerHTML='<h1>Player One Wins'
            button.hidden=false
            grid.innerHTML=''
           
            
        }
        if(a==b && b==c && c==a && a=='O'){
            result.outerHTML='<h1>Player Two Wins'
            button.hidden=false
            grid.innerHTML=''
            
        }
        
        
    
    })
  

}