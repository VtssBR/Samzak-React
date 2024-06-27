import { useState } from "react";
import styles from "./Form.module.css"


export default function Form(){

    const[inputNameText, setNameInputText] = useState('');
    const[erroName, setErrorName] = useState('')
    const[errorCheck, setErrorCheck] = useState('')
    

    const initialCheckBoxes = [
        {name: 'checkboxCamera', checked: false, message:'Camera de segurança'},
        {name: 'checkboxAlarmename', checked: false, message: 'Alarme residencial'},
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
          setErrorCheck('');
        };
    

    function sentMessageSubmit(ev) {
        ev.preventDefault();
        const selectedMessages = inputCheckboxes
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.message);
            const selectedMessagesFormatted = selectedMessages.map(msg => `- ${msg}`).join('%0A');

            if (!inputNameText && selectedMessages.length === 0) {
                setErrorName('* Por favor, preencha seu nome.')
                setErrorCheck('*Por favor, selecione pelo menos um serviço.');
            }
            
            if (!inputNameText) {
                setErrorName('* Por favor, preencha seu nome.')
                return;
            }
          
            if (selectedMessages.length === 0) {
                setErrorCheck('*Por favor, selecione pelo menos um serviço.');
                return;
            }
              
            window.open(`https://wa.me/5511996495733?text=Olá,%0AGostaria+de+solicitar+um+orçamento+para+os+seguintes+serviços:%0A${selectedMessagesFormatted}%0A%0AFico+no+aguardo+do+retorno+com+as+informações+necessárias.%0A%0AAtenciosamente,%0A${inputNameText}`, "_blank");
    };


    function handleNameInput(ev){
        setNameInputText(ev.target.value)
        setErrorName('');
    }

    return(
        <>
        <div>
        <form className={styles.FormContent}>
            <h2 className={styles.titleBudget}>Solicite seu Orçamento</h2>
            <label className={styles.txtTitles} htmlFor="name">Informe seu nome: </label>
            <input className={styles.inputName} onChange={handleNameInput} type="text" id="name" />
            <p className={styles.errorMessage}>{erroName}</p>
            <p className={styles.txtTitles}>Selecione os serviços no qual deseja orçar:</p>
                <p className={styles.errorMessage}>{errorCheck}</p>
                <div className={styles.checkboxes}>
                    {inputCheckboxes.map((checkbox, index) => (
                    <div key={index}>
                    <input className={styles.inputCheckbox}
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