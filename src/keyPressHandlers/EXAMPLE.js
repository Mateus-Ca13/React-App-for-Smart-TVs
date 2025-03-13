/* eslint-disable no-unused-vars */

function ExampleHandler(key, focusedElement, setFocusedElement, selectablesList) {
    console.log(key, selectablesList, focusedElement)
    
    switch(key){
        case "ArrowRight": 
            switch(focusedElement.id){
                case "":
                
                break;
                
                default:
                //
                break;
            }
            break;
        //=============================
        case "ArrowUp": 
            switch(focusedElement.id){
                case "":
                
                break;
                
                default:
                //
                break;
            }

            break;
        //=============================
        case "ArrowDown": 
            switch(focusedElement.id){
                case "":
                
                break;
                
                default:
                //
                break;
            }

            break;
        //=============================
        case "ArrowLeft": 
            switch(focusedElement.id){
                case "":
                
                break;
                
                default:
                //
                break;
            }
            break;
        //=============================
        case "Enter": 
            focusedElement.ref.children[0].click()
            break;
        //=============================
        case "Escape": 
            break;
        case "XF86Back":
            window.close()
            break;
        default:

        
            break;
    }
}

export default ExampleHandler;
