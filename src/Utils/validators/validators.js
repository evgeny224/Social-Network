
//Файл с функциями валидаторами для проверки входящих значений

export const required = value => {
    if(value) return undefined;
        
    return "Field is required";
}

export const maxLenghtCreator = (maxLength) => (value) => {
    if(value.length > maxLength) return `Max length is ${maxLength} simbols`;
        
    return undefined;
}