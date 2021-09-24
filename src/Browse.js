import useFetch from "./useFetch";
import DisplayList from "./DisplayList";

const Browse = () => {

    const url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=40";
    const { data, isPending, error } = useFetch(url);

    return (  
        <div className="explore">
            <h2>Explore Recipes</h2>
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {data && <DisplayList data={data.recipes} baseUrl="" />}
        </div>
    );
}
 
export default Browse;