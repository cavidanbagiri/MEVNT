

import { Form as VeeForm, Field as VeeField, ErrorMessage, defineRule } from 'vee-validate'
import { required, email, min, max } from '@vee-validate/rules';

const validation = {
    install: (app, options)=>{

        app.component('VeeForm',VeeForm);
        app.component('VeeField',VeeField);
        app.component('ErrorMessage', ErrorMessage);

        defineRule('required', required, );
        defineRule('email', email);
        defineRule('min', min);
        defineRule('max', max);

    }
}

export default validation;