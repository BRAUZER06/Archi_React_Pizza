import React from "react";

function Categories({ items, onClickItem }) {
  const [activItem, setActivItem] = React.useState(null);
 

  const onSelectItem = (index)=>{
    setActivItem(index)
   
    
  }
  return (
    <div className="categories">
     
      <ul>
        <li className={activItem === null? 'active': ''} onClick={()=>onSelectItem(null)}>Все</li>
        {items && items.map((name, index) => (
          <li 
          className={activItem === index ? 'active': ''} 
          onClick={() => onSelectItem(index)} key={`${name}_${index}`}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}









// class Categories extends React.Component {
//   state = {
//     activeItem: 3,
//   };

//   onSelectItem = index =>{
//     this.setState({
//       activeItem: index,
//     })
//   }

//   render() {
//     const { items, onClickItem } = this.props;
//     return (
//       <div className="categories">
//         <ul>
//           <li>Все</li>
//           {items.map((name, index) => (
//             <li
//               className={this.state.activeItem === index ? "active" : ""}
//               onClick={()=> this.onSelectItem(index)}
//               key={`${name}_${index}`}
//             >
//               {name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

export default Categories;
