const DisplayList = (props) => {

    const list = props.data;
    const baseURL = props.baseUrl;

    return (  
        <div className="recipe-list">
            {
                list.map((recipe) => (
                    <a href={recipe.sourceUrl} target="_blank">
                        <div className="recipe-item" key={recipe.id}>
                            <h3> {recipe.title}</h3>
                            <img src={baseURL + recipe.image} alt={recipe.title} width="300px"/>
                            <p>Servings: {recipe.servings}</p>
                            <p>Time to Make: {recipe.readyInMinutes}</p>
                        </div>
                    </a>
                ))
            }

        </div>
    );
}
 
export default DisplayList;