export function inArray(elemX, elemY, arr){

    

    if(arr.length<1){        
        return false;
    }

    for (var i = 0; i < arr.length; i++){

        if((arr[i][0] === elemX)&& (arr[i][1] === elemY)){

            return true;
        }
    }
}
