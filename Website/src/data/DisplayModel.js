import ObservableModel from "./ObservableModel";

class DisplayModel extends ObservableModel {
  constructor() {
    super();
  }

  newMessage(event){
    localStorage.setItem("message", event.target.value);
  }
}
const modelInstance = new DisplayModel();
export default modelInstance;
