
const foodReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_SUCCEEDED":
            return action.Food;
        case "FETCH_FAILED":
            return [];
        // case "ADD_FOOD":
        //     return [
        //         ...state,
        //         action.newFood
        //     ];
       case "UPDATE_SUCCEEDED":
           return state.map ((arr) =>{
               if (arr._id === action.updateFood._id)
              return  {
                   ...arr,
                   name:action.updateFood.name,
                   foodDescription : action.updateFood.foodDescription,
               }
               else{
                return arr;
               }         
           })
         case "DELETE_SUCCEEDED":
             return state.filter((arr) =>{
                 return arr._id.toString() !== action.deleteFood._id.toString();

             })
        default:
            return state; //state does not change
    }
}

export default foodReducer;