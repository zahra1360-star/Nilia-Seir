
import React, { useState } from "react";
import { RadioButton } from '../components/RadioButton';



export default function RR() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const DateReturn = document.getElementById('DateReturn');
  const DateOneway = document.getElementById('DateOneway');


  const radioChangeHandler = (e) => {
    
    setPaymentMethod(e.target.value);
  };

  return (

    
      <div className=" form-check-label" style={{ display: "flex" }}>
        <RadioButton
          changed={radioChangeHandler}
          
          id="2"
        
          isSelected={paymentMethod === "یکطرفه"
            &&

            (DateReturn.style.display = 'none') &&
            (DateOneway.style.display = 'block')
          }
          label="یکطرفه"
          value="یکطرفه"

          checked
        />

        <RadioButton
          changed={radioChangeHandler}
          id="1"
          isSelected={paymentMethod === "رفت و برگشت" &&
            (DateReturn.style.display = 'block') &&
            (DateOneway.style.display = 'none')
          }
          label="رفت و برگشت"
          value="رفت و برگشت"
        />
      </div>

 
  );
}