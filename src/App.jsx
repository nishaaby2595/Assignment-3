import React from 'react';
import Header from './Header';
import Nav from './Nav';
// import Services from './Services';
import tech from './tech.jsx'
import ServicesTable from './ServicesTable'; 


function Card(props){
    return(
      <div className="card" style={{ border: '2px solid #007bff', padding: '10px', margin: '10px', backgroundColor: '#e0f7fa' }}>
      <img src={props.imgurl} alt={"card image"} style={{ width: '100%',  borderRadius: '5px' }} />
      <h2>{props.title || "Default Title"}</h2>
      <p>{props.description || "Default description line 1"}</p>
      <button>View More</button>
    </div>
    );
  }
  
    function createtechcard(p){
      return(
        <div className="cards-container" >
        <Card 
              key={p.techID}
              title={p.name}
              description={`${p.description}`}
              imgurl={p.imgurl}
              />
        </div>
      )
    }

function App() {

  return (
    <div>
      <Header/>
      <Nav />
      
      <div className="app-container">
        <div className='Contents'>
            <h2>Your Trusted Technology Solutions</h2><br />
            <p>Empowering businesses with innovative solutions and consulting services.</p>
        </div>
        {tech.map(createtechcard)}
        <ServicesTable />
      </div>
      <div>
        <footer className="footer">
         &copy; 2024 Technology Solutions. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;
