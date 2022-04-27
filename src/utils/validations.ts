import {InputName} from "./const/const";
import {TFValidationLength, TValidate, TValidation} from "../types/types";


const lengthSting: TFValidationLength = (min, max, value) => {
    if (min > value.length || max < value.length) {
        return {
            isValid: false,
            errorText: `Поле должно быть от ${min} до ${max} символов`,
        };
    }
    return {
        isValid: true,
        errorText: '',
    };
}
const validValue = (regExp: RegExp, value: string, errorText: string): TValidation => {
    if (!regExp.test(value)) {
        return {
            isValid: false,
            errorText,
        };
    }
    return {
        isValid: true,
        errorText: '',
    };
}
const validValueString = (regExp: RegExp, value: string, errorText: string): TValidation => {
    if (regExp.test(value)) {
        return {
            isValid: false,
            errorText,
        };
    }
    return {
        isValid: true,
        errorText: '',
    };
}
const emptyValidate = (value: string): TValidation => {
    if (value === '') {
        return {isValid: false, errorText: "Поле обязательно к заполнению"}
    }
    return {isValid: true, errorText: ''}
}

const loginValid = (value: string): TValidation => {
    let empty = emptyValidate(value);
    if (!empty.isValid) {
        return empty;
    }

    let onlyNumber = validValueString( /^[0-9]+$/, value, 'Не должно содержать только цифры');
    if (!onlyNumber.isValid) {
        return onlyNumber;
    }

    let kiril = validValueString( /[а-яА-ЯЁё]/, value, "Не должно содержать кириллицы");
    if (!kiril.isValid) {
        return kiril;
    }


    let whitespace = validValue( /^\S*$/, value, "Не должно содержать пробелов");
    if (!whitespace.isValid) {
        return whitespace;
    }

    let regExp = validValue( /([A-z]+[0-9-_]*)$/, value, "Поле заполнено неверно");
    if (!regExp.isValid) {
        return regExp;
    }

    const lvalid = lengthSting(3, 20, value);
    if (!lvalid.isValid) {
        return lvalid;
    }

    return {isValid: true, errorText: ''}
}


const passValid = (value: string): TValidation => {
    let empty = emptyValidate(value);
    if (!empty.isValid) {
        return empty;
    }


    let big = validValue( /[A-Z]/, value, 'Должно содержать одну букву в верхнем регистре');
    if (!big.isValid) {
        return big;
    }


    let notNumber = validValue( /[0-9]/, value, 'Должно содержать цифр');
    if (!notNumber.isValid) {
        return notNumber;
    }


    let regExp = validValue( /([A-Z|0-9]+\w*)$/, value, "Поле заполнено неверно");
    if (!regExp.isValid) {
        return regExp;
    }

    const lvalid = lengthSting(8, 40, value);
    if (!lvalid.isValid) {
        return lvalid;
    }

    return {
        isValid: true,
        errorText: '',
    };
};


const phoneValid = (value: string): TValidation => {

    let empty = emptyValidate(value);
    if (!empty.isValid) {
        return empty;
    }


    let kiril = validValueString( /[a-zA-Zа-яА-ЯЁё]/, value, 'Не должно содержать букв');
    if (!kiril.isValid) {
        return kiril;
    }

    let regExp = validValue( /^([+]?[0-9]*)$/, value, "Поле заполнено неверно");
    if (!regExp.isValid) {
        return regExp;
    }

    const lvalid = lengthSting(10, 15, value);
    if (!lvalid.isValid) {
        return lvalid;
    }

    return {
        isValid: true,
        errorText: '',
    };
};

const emailValid = (value: string): TValidation => {
    let empty = emptyValidate(value);
    if (!empty.isValid) {
        return empty;
    }

    const lvalid = lengthSting(10, 15, value);

    if (!lvalid.isValid) {
        return lvalid;
    }

    let kiril = validValueString(  /[а-яА-ЯЁё]/, value, 'Не должно содержать кириллицы');
    if (!kiril.isValid) {
        return kiril;
    }

    let regExp = validValue( /^([a-z0-9.-]+@[a-z0-9-]+[.]+[a-z]*)$/, value, "Поле заполнено неверно");
    if (!regExp.isValid) {
        return regExp;
    }

    return {
        isValid: true,
        errorText: '',
    };
};

const nameValid = (value: string): TValidation => {

    let result = {isValid: true, errorText: ''}
    let empty = emptyValidate(value);
    if (!empty.isValid) {
        return empty;
    }

    const lvalid = lengthSting(3, 20, value);
    if (!lvalid.isValid) {
        return lvalid;
    }

    let firstLetter = validValue(/^[A-ZА-Я]/, value, "Первая буква должна быть заглавной");
    if (!firstLetter.isValid) {
        return firstLetter;
    }

    let whitespace = validValue( /^\S*$/, value, "Не должно содержать пробелов");
    if (!whitespace.isValid) {
        return whitespace;
    }


    let notNumber = validValueString( /[0-9]/, value, 'Не должно содержать цифр');
    if (!notNumber.isValid) {
        return notNumber;
    }

    let regExp = validValue( /([A-zА-я]+[-_]*)$/, value, "Поле заполнено неверно (допустим только дефис)");
    if (!regExp.isValid) {
        return regExp;
    }

    return result
}

const validations: TValidate = {
    [InputName.login]: loginValid,
    [InputName.firstName]: nameValid,
    [InputName.secondName]: nameValid,
    [InputName.password]: passValid,
    [InputName.email]: emailValid,
    [InputName.phone]: phoneValid,
    [InputName.message]: emptyValidate,
}

export default validations

