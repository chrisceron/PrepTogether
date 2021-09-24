import banner from './banner.jpg';
import { useState } from 'react';
import { useHistory } from 'react-router';


const Home = () => {

    const [input, setInput] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/browse/${input}`);
    }

    return (
        <div className="home">
            <img src={banner} alt="home banner" />
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <label>Search </label>
                    <input 
                        type="text"
                        required
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        </div>
      );
}
 
export default Home;
