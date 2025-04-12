import style from './SelectA.module.css'
 
 function Select({text, name,id,handlerChange}) {
     return(
         <div className={style.form_control}>
         <label htmlFor={name}>{text}</label>
 
         <select name= {name} id={id} onChange={handlerChange}>
         <option value ="">Avaliação:</option>
         <option value ="1">⭐</option>
         <option value ="2">⭐⭐</option>
         <option value ="3">⭐⭐⭐</option>
         <option value ="4">⭐⭐⭐⭐</option>
         <option value ="5">⭐⭐⭐⭐⭐</option>
        


 
 
 
         </select>
         </div>
     )
 }
 export default Select;