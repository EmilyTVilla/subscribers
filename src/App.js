import React, { useState, Fragment } from "react"
import './bootstrap.min.css';
import json from "./json/subscribers.json"


function App(){
  
  const [subscribers, setSubscribers] = useState(json);
  
    const SortFunction=(e)=>{

      const sorted=[...subscribers].sort( (a, b) =>{

        if (a[e] < b[e]) return -1;

        else if (a[e] > b[e]) return 1;

        return 0;
        
      });

      setSubscribers(sorted);
    }
    
  return (

    <Fragment>
      
      <div className="pb-2">
        <div className="App"  >

          <div>
            <h1 className="display-1 text-center text-success">Subscribers</h1>
          </div>
          <div>
            <select name="select" onClick={(e)=>SortFunction(e.target.value)} >

              <option value="name">Name</option>
              <option value="lastName">lastName</option>
              <option value="age">Age</option>
              <option value="sport">Sport</option>

            </select>

            </div>
        
        </div>
      </div>
    
      <div className="p-4">

        <div className="table-responsive">
      
          <table className="table table-hover mb-0">

            <thead >
              <tr className="table-primary">
              
                <th className="th-lg">
                  Name
                </th>
                <th className="th-lg">
                  Last Name
                </th>
                <th className="th-lg">
                  Age
                </th>
                <th className="th-lg">
                  Sport
                </th>
              </tr>
            </thead>
        
            <tbody>

              {subscribers.map(subscribers => (

                <tr key={subscribers.name}style={{ margin: '30px' }}>
                    
                    
                    <td >{subscribers.name}</td>
                    
                    <td >{subscribers.lastName}</td>
                    
                    <td >{subscribers.age}</td>
                    
                    <td >{subscribers.sport}</td>

                  </tr>
              ))}
            </tbody>
        
          </table>
        </div>
      </div>
      <div>
        <div className="col-8 offset-2" onClick={(e)=>SortFunction(e.target.value)}>
          <button type="button" className="btn btn-outline-success btn-rounded btn-sm col-2 offset-1 " value="name">
            Sort By Name
          </button>
          <button type="button" className="btn btn-outline-primary btn-rounded btn-sm  col-2 offset-1 " value="lastName">
            Sort By Last Name
          </button>
          <button type="button" className="btn btn-outline-secondary btn-rounded btn-sm  col-2 offset-1" value="age">
            Sort By Age
          </button>
          <button type="button" className="btn btn-outline-info btn-rounded btn-sm  col-2 offset-1" value="sport">
            Sort By Sport
          </button>
        </div>
      </div>
    
    
    </Fragment>
  )
}
    
export default App
    
    
 

