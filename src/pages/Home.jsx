import { Link } from "react-router-dom"

function Home(){
        //renders home page of Van Life upon searching page with link to Vans page
    return(
        <div className="home-container">
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link to="/vans">Find your van</Link>
        </div>
    )
}

export default Home