export default function canIterate(object) {
        try {
          if (object[Symbol.iterator]) {
            return true;
          } else {
          return false;
          }
        } catch (err) {
          return false;
        }
      }

      //Вариант
/* export default function canIterate(obj){
  try {
    return !!obj[Symbol.iterator] //!! оператор «!!» используется 
                                  //для преобразования любого значения в булево

  } catch (err) {
    return false;
  }
} */