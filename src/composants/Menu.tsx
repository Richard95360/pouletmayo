import  { useState } from 'react'

interface IMenuprops {
  data: string[];
  onClick?:(index:number) => {} | void;
  selected?:number;
  className?: string;

}

const Menu = (props:IMenuprops) => {
  const [curIndex, setCurIndex] = useState(props.selected);
  const handleToggle = (index:number) => {
    setCurIndex(index);
  }
  const liEml = props.data.map((label,index) => (
     <li 
  className={curIndex === index ? "activated" : undefined}
   key={index} 
   onClick={() => {
    handleToggle(index)
   if (props.onClick) props.onClick(index);
  }}>
    {label}
    </li>
    ));
  return (
    <ul className={props.className}>
      {liEml}
     </ul>
  )
}

export default Menu;