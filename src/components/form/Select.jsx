import style from './Select.module.css'
 
 function Select({text, name,id, handlerChange}) {
     return(
         <div className={style.form_control}>
         <label htmlFor={name}>{text}</label>
 
         <select name= {name} id={id} onChange={handlerChange}>
         <option value ="">Selecione um gënero</option>
         <option value ="1">Pop</option>
         <option value ="2">Funk</option>
         <option value ="3">Sertanejo</option>
         <option value ="4">Forró</option>
         <option value ="5">Indie</option>
         <option value ="6">MPB</option>
         <option value ="7">K-pop</option>
         <option value ="8">Trap</option>
         <option value ="9">Rap</option>
         <option value ="10">Eletrônica</option>
         <option value ="11">Clássica</option>
         <option value ="12">Jazz</option>



 
 
 
         </select>
         </div>
     )
 }
 export default Select;