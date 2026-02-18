// App.jsx
import Chai from "./Chai.jsx";
function App(){
  const name="Arpit Verma";
  const role=" Aspiring Full Stack Developer"
  let mydate=new Date();
  const date=mydate.toDateString();
  document.body.style.backgroundColor="lightblue";
  document.body.style.color="brown";

  return (
    <div>
      <Chai />
      <h2>Chai chai chai</h2>
        </div>
  )
}

export default App;