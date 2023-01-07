
import {defineStore} from 'pinia';

const canvasChecking = defineStore('toggle_checking',{

    state : () =>({
        //User Profile Dropdown
        user_dropdown : false,
        //Open Close Login Register Modal
        login_register_modal_toggle : false,
        //Open Close Canvas
        canvas_toggle : false,
    }),

    getters : {
        GETLOGINREGISTERTOGGLE: (state) => state.login_register_modal_toggle,
        GETCANVASTOGGLE: (state) => state.canvas_toggle,
        GETUSERDROPDOWN: (state) => state.user_dropdown,
    },

    actions : {
        //Opening & Closing UserDropdown Modal
        TOGGLEUSERDROPDOWN(){
            this.user_dropdown = !this.user_dropdown;
        },
        //Close User Dropdon Modal
        CLOSEUSERDROPDOWN(){
            this.user_dropdown = false;
        },
        //Opening User Login Register Modal
        TOGGLELOGINREGISTERMODAL(){
            this.login_register_modal_toggle = !this.login_register_modal_toggle;
        },
        //Open & Close Global Canvas Catalog
        CANVASTOGGLE(){
            this.canvas_toggle = !this.canvas_toggle;
        },
        CLOSEMODAL(){
            this.login_register_modal_toggle = false;
            this.canvas_toggle = false;
        }
    }

});

export default canvasChecking;