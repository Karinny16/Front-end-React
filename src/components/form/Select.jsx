import style from './Select.module.css'
 
 function Select({text, name,id}) {
     return(
         <div className={style.form_control}>
         <label htmlFor={name}>{text}</label>
 
         <select name= {name} id={id}>
         <option value ="">Selecione um gënero</option>
         <option value ="">Pop</option>
         <option value ="">Funk</option>
         <option value ="">Sertanejo</option>
         <option value ="">Forró</option>
         <option value ="">Indie</option>
         <option value ="">MPB</option>
         <option value ="">K-pop</option>
         <option value ="">Trap</option>
         <option value ="">Rap</option>
         <option value ="">Eletrônica</option>
         <option value ="">Clássica</option>
         <option value ="">Jazz</option>



 
 
 
         </select>
         </div>
     )
 }
 export default Select;