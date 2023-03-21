import github from "./db.js"
import { useEffect, useState } from "react"

function App() {

    const [userName, setUserName] = useState("");

    useEffect(()=>{
        const query = {
            query:`
                query {
                    viewer {
                        name
                    }
                }
            `
        }

        fetch(github.baseURL, {
            method: "POST",
            headers: github.headers,
            body: JSON.stringify(query)})
            .then(response => response.json())
            .then(data => {
                setUserName(data.data.viewer.name)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
  return (
    <div className="App container mt-5">
      <h1 className={"text-primary"}><i className={"bi bi-diagram-2-fill"}></i>{userName}'s Repos</h1>
    </div>
  );
}

export default App;
