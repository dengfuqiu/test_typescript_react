import { observable, action } from 'mobx';

class LoginStore {
  @observable test = 1;

  @action.bound userLogin() {
    console.log(11111111);
  }
}

export { LoginStore };
export default new LoginStore();
