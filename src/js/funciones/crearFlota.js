let ships = []

export function crearFlota(arr,size){
  
  let data = random();
  
  
  if(data.direccion == "vertical"){
    for(let i=0; i<size ;i++){
    if(9-data.positionY >= size-1){
    arr[data.positionY+i][data.positionX]=2
    }else{
      arr[data.positionY-i][data.positionX]=2
    }
  }
  }
  else{
    for(let i=0; i<size ;i++){
      if(9-data.positionX >= size-1){
      arr[data.positionY][data.positionX+i]=2
    }else{
      arr[data.positionY][data.positionX-i]=2
    }
  }
}


  console.log(data.positionY,data.positionX,data.direccion)
  

return arr
}

function random(){
  
  let random = Math.floor(Math.random()*2)

return {
    positionX: Math.floor(Math.random()*10),
    positionY: Math.floor(Math.random()*10),
    direccion: random?"vertical":"horizontal"
    } 
  
  }
  

  