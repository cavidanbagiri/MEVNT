
import {defineStore} from 'pinia';

const canvasChecking = defineStore('toggle_checking',{

    state : () =>({
        //Open Close Login Register Modal
        login_register_modal_toggle : false,
        //Open Close Canvas
        canvas_toggle : false,
    }),

    getters : {
        GETLOGINREGISTERTOGGLE: (state) => state.login_register_modal_toggle,
        GETCANVASTOGGLE: (state) => state.canvas_toggle,
    },

    actions : {
        TOGGLELOGINREGISTERMODAL(){
            this.login_register_modal_toggle = !this.login_register_modal_toggle;
        },
        CANVASTOGGLE(){
            this.canvas_toggle = !this.canvas_toggle;
        }
    }

});

export default canvasChecking;