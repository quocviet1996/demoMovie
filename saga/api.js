 function* getFoodFromApi() {

        try{
            let response = yield fetch("http://192.168.1.7:3001/list_all_foods");
             let responseJson = yield response.json();
             //console.log(responseJson);
            // return responseJson;       
            //const movies = yield response.status === 200 ? JSON.parse(response._bodyInit): [] ;
            //console.log(movies);      
         return responseJson.data;
    
        }
        catch(error){
            console.error(`error is ${error}`);
    
        }
       
    }
    function* insertNewFoodFromApi(newFood){
        try{
            let response = yield fetch("http://192.168.1.7:3001/insert_new_foods",{
                method : 'POST',
                headers : {
                    'Accept':'application/json',
                    'Content-Type':'application/json',

                },
                body:JSON.stringify({
                    name:newFood.name,
                    foodDescription : newFood.foodDescription,
                })
            });
            let responseJson = yield response.json();
           return responseJson.result;
            //console.log(`response = ${JSON.stringify(response)}`);
            //return yield (response.status === 201);
        }
        catch(error){

            console.error(`error is ${error}`);
        }

    }
    function* UpdateFood(updateFood){
        //console.log(updateFood.id)
        try{
            let response = yield fetch("http://192.168.1.7:3001/update_a_foods",{
                method : 'PUT',
                headers : {
                    'Accept':'application/json',
                    'Content-Type':'application/json',

                },
                body: JSON.stringify({
                    food_id : updateFood._id,
                    name : updateFood.name,
                })
            })
           
            let responseJson = yield response.json();
            //console.log(responseJson.result);
            return responseJson.result;

        }
        catch(error){
            console.error(`error is ${error}`);
        }
    }
    function* DeleteFood(deleteFood){
        try{
            let response = yield fetch("http://192.168.1.7:3001/delete_a_foods",{
                method : "DELETE",
                headers : {
                    'Accept' : 'Application/json',
                    'Content-Type' :'Application/json',
                },
                body: JSON.stringify({
                    food_id : deleteFood._id,
                })
            });
            let responseJson = yield response.json();
            return responseJson.result;
            

        }
        catch(error){
            console.log(error);
        }
    }
export const api = {
    getFoodFromApi,
    insertNewFoodFromApi,
    UpdateFood,
    DeleteFood
};