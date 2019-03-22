import { observable, action } from 'mobx';
import { setPathValue } from 'pathval';

class HomeStore {
  @observable test = 1;

  @action.bound updateValue(path: string, value: any) {
    setPathValue(this, path, value);
  }
}

export { HomeStore };
export default new HomeStore();
