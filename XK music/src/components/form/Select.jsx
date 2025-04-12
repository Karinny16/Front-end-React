import style from './Select.module.css'
 
 function Select({text, name,id, handlerChange}) {
     return(
         <div className={style.form_control}>
         <label htmlFor={name}>{text}</label>
 
         <select name= {name} id={id} onChange={handlerChange}>
         <option value ="">Selecione um gënero</option>
         <option value ="1">ROCK</option>
         <option value ="2"> POP</option>
         <option value ="3">JAZZ</option>
         <option value ="4"> BLUES</option>
         <option value ="5">CLASSICAL</option>
         <option value ="6">HIPHOP</option>
         <option value ="7">ELECTRONIC</option>
         <option value ="8">REGGAE</option>
         <option value ="9"> METAL</option>
         <option value ="10"> COUNTRY</option>
         <option value ="11">SERTANEJO</option>



 
 
 
         </select>
         </div>
     )
 }
 export default Select;