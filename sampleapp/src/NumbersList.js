function NumbersList(props){
   const numbers= props.numbers;
  // const listItems = numbers.map((value) => value*2);
  const listItems = numbers.map((value,index) => 
      <li key={index}>  
      {/* // key -- 0,1,2,3,4 data - 1,2,3,4,5  */}
          {value * 2}
      </li>
    );
   return (
    <ul>
        {listItems}
    </ul>
   )
}
export default NumbersList;