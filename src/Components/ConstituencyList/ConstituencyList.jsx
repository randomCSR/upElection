import React from 'react'
import './ConstituencyListStyle.css' 
import PieChartCompo from '../PieChart/PieChartCompo'
// import ReactTooltip from 'react-tooltip';


function ConstituencyList(props) {
    
    const [items,setItems] = React.useState("starting");
  
  console.log(props.data)
   
    return (
    <div className="dropDown">
       <div className="radioBtns" >
        <input className="rb1" type="radio" value="2022" name="year" /> 2022 Elections
        <input className="rb2" type="radio" value="2017" name="year" /> 2017 Elections
        <input className="rb3" type="radio" value="2012" name="year" /> 2012 Elections
       </div>

      <select id = "constituency"
       value={items}
       onChange={(e) => {
         const selectedName = e.target.value;
         setItems(selectedName);
       }}>
          <option label= "List of Constituency" value= "List of Constituency" > </option>,
          <option label= "Amethi" value= "Amethi"> </option>,
          <option label= "Ghorawal" value= "Ghorawal"> </option>,
          <option label= "Marihan" value= "Marihan"> </option>,
          <option label= "Chunar" value= "Chunar"> </option>,
          <option label= "Majhawan" value= "Majhawan"></option>,
          <option label= "Gyanpur" value= "Gyanpur"> </option>,
          <option label= "Bhadohi" value= "Bhadohi"> </option>,
          <option label= "Sevapuri" value= "Sevapuri"> </option>,
          <option label= "Varanasi Cantt" value= "Varanasi Cantt"> </option>,
          <option label= "Varanasi North" value= "Varanasi North"></option> ,
          <option label= "Shivpur" value= "Shivpur"></option> ,
          <option label= "Rohaniya" value= "Rohaniya"></option> ,
          <option label= "Pindra" value= "Pindra"></option> ,
          <option label= "Saiyadraja" value= "Saiyadraja"></option> ,
          <option label= "Sakaldiha" value= "Sakaldiha"></option> ,
          <option label= "Zamania" value= "Zamania"></option> ,
          <option label= "Zahoorabadi" value= "Zahoorabadi"></option> ,
          <option label= "Ghazipur" value= "Ghazipur"></option> ,
          <option label= "Ghosi" value= "Ghosi"></option> ,
          <option label= "Madhuban" value= "Madhuban"></option> ,
          <option label= "Didarganj" value= "Didarganj"></option> ,
          <option label= "Nizamabad" value= "Nizamabad"></option> ,
          <option label= "Mubarakpur" value= "Mubarakpur"></option> ,
          <option label= "Gopalpur" value= "Gopalpur"></option>  
      </select>
      <h1 style={{color:"red"}}>{items}</h1>
      <span className="ratio">
          <p>403/403</p>
      </span>
     
      <div  className="firstWidget" >
      <PieChartCompo />
      </div>
     
      
      
<div className="tableWrapper box1" title = "Mohammadabad  Harendra  Candidate   Party   PARTY LOGO">
<table className="table">
  <thead className="tHeading">
    <tr>
      <th>Party</th>
      <th>Result</th>
      <th>Year</th>
     
    </tr>
  </thead>
  <tbody className="tBody">
      <tr >
        <td>BJP</td>
        <td>221</td>
        <td>2012</td>
      </tr>
  </tbody>
</table>
{/* </span> */}
</div>

</div>




    )
      }

    export default ConstituencyList;
    
    
  