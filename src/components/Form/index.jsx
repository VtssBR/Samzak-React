import { useState } from "react";
import styles from "./Form.module.css"


export default function Form(){

    const[inputNameText, setNameInputText] = useState('');
    

    const initialCheckBoxes = [
        {name: 'checkboxCamera', checked: false, message:'Camera de segurança'},
        {name: 'checkboxAlarmename', checked: false, message: 'Alarme monitorado'},
        {name: 'checkboxCerca', checked: false, message:'Cerca eletrica'}
    ];
        
    const[inputCheckboxes, setCheckboxes] = useState(initialCheckBoxes);

    function handleCheckBox(ev){
        const {name, checked, message} = ev.target
        
        setCheckboxes((prevCheckboxes) => {
            return prevCheckboxes.map(checkbox => {
              if (checkbox.name === name) {
                return {
                  ...checkbox,
                  checked: checked,
                  value: message
                };
              }
              return checkbox;
            });
          });
        };
    

    function sentMessageSubmit(ev) {
        ev.preventDefault();
        const selectedMessages = inputCheckboxes
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.message);
            const selectedMessagesJointed = selectedMessages.join(', ')
    
        window.open(`https://wa.me/5511996495733?text=Oi+meu+nome+é+${inputNameText}+e+gostaria+de+fazer+um+orçamento+de:+${selectedMessagesJointed}.`,"_blank")
    };


    function handleNameInput(ev){
        setNameInputText(ev.target.value)
    }

    return(
        <>
        <div>
        <form className={styles.FormContent}>
            <h2>Solicite seu Orçamento</h2>
            <label htmlFor="name">Nome: </label>
            <input onChange={handleNameInput} type="text" id="name" />
                <div>
                    {inputCheckboxes.map((checkbox, index) => (
                    <div key={index}>
                    <input 
                    type="checkbox" 
                    name={checkbox.name}
                    value={checkbox.message}
                    checked={checkbox.checked}
                    onChange={handleCheckBox}
                    />
                    <label htmlFor={checkbox.name}>{checkbox.message}</label>
                    </div>
                    ))}
                </div>
            <button onClick={sentMessageSubmit} className={styles.buttonSubmit} type="submit">ENVIAR</button>
        </form>
        </div>
        </>
    )



}