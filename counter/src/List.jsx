import React from "react";
const List=()=>{
 
return(
    <div>
        <h1>Nested Ordered List</h1>
        <ol start="100">
            <li>Coffee</li>
            <li>Tea</li>
            <ol start="1">
                <li>Black Tea</li>
                <li>Green Tea</li>
            </ol>
            <li>Milk</li>
            </ol> 
         </div>
      );
}
export default List;