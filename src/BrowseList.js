import { useParams } from "react-router";
import DisplayList from "./DisplayList";
import useFetch from "./useFetch";

const BrowseList = () => {
    const { keyword }= useParams();
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${keyword}`;
    const { data, isPending, error } = useFetch(url);

    return (  
        <div className="browselist">
            <h2>Search Results for <em>{keyword}</em></h2>
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {data && <DisplayList data={data.results} baseUrl={data.baseUri}/>}
        </div>
    );
}
 
export default BrowseList;