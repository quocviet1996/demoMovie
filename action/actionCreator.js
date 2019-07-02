export function fetchFood(){
    return{
        type:"FETCH_FOOD",
    }
}
export function succeeded(Food){
    return {
        type:"FETCH_SUCCEEDED",
       Food,
    }

}

export function failed(error){
    return{
        type:"FETCH_FAILED",
        error

    }
}

export function addFood(newFood){
    return{
        type:"ADD_FOOD",
        newFood

    }
}

export function updateFood(updateFood){
    return {
        type :"UPDATE_FOOD",
        updateFood
    }
}
export function updateSucceeded(updateFood){
    return {
        type : "UPDATE_SUCCEEDED",
        updateFood
    }
}
export function DeleteFood(deleteFood){
    return{
        type : "DELETE_FOOD",
        deleteFood,
    }
}

export function DeleteSucceeded(deleteFood){
    return {
        type: "DELETE_SUCCEEDED",
        deleteFood
    }
}