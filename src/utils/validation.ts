import {InputName} from "../const/const";
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

const emptyValidate = (value: string): TValidation => {
    if (value === '') {
        return {isValid: false, errorText: "Поле обязательно к заполнению"}
    }

    return {isValid: false, errorText: ''}
}

const loginValid = (value: string): TValidation => {
    let empty = emptyValidate(value);
    if (!empty.isValid) {
        return empty;
    }

    const lvalid = lengthSting(3, 20, value);

    if (!lvalid.isValid) {
        return lvalid;
    }

    const regExp = /([A-z]+[0-9-_]*)$/;
    if (!regExp.test(value)) {
        return {
            isValid: false,
            errorText: 'Поле заполнено неверно',
        };
    }

    return {isValid: false, errorText: ''}
}


const passValid = (value: string): TValidation => {
    let empty = emptyValidate(value);
    if (!empty.isValid) {
        return empty;
    }

    const lvalid = lengthSting( 8, 40, value);

    if (!lvalid.isValid) {
        return lvalid;
    }

    const regExp = /([A-Z|0-9]+\w*)$/;
    if (!regExp.test(value)) {
        return {
            isValid: false,
            errorText: 'Поле заполнено неверно',
        };
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

    const lvalid = lengthSting( 10, 15, value);

    if (!lvalid.isValid) {
        return lvalid;
    }

    const regExp = /^([+]?[0-9]*)$/;
    if (!regExp.test(value)) {
        return {
            isValid: false,
            errorText: 'Поле заполнено неверно',
        };
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

    const lvalid = lengthSting( 10, 15, value);

    if (!lvalid.isValid) {
        return lvalid;
    }

    const regExp = /^([a-z0-9.-]+@[a-z0-9-]+[.]+[a-z]*)$/;
    if (!regExp.test(value)) {
        return {
            isValid: false,
            errorText: 'Поле заполнено неверно',
        };
    }

    return {
        isValid: true,
        errorText: '',
    };
};


const fileValid = (value: string): TValidation => {
    return {
        isValid: true,
        errorText: '',
    };
};


const validation: TValidate = {
    [InputName.login]: loginValid,
    [InputName.password]: passValid,
    [InputName.firstName]: loginValid,
    [InputName.secondName]: loginValid,
    [InputName.email]: emailValid,
    [InputName.phone]: phoneValid,
    [InputName.file]: fileValid,
    [InputName.message]: emptyValidate,
}

export default validation

