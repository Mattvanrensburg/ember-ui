import Route from '@ember/routing/route';

export default class UsersRoute extends Route {
  beforeModel() {
    return this.store.query('user', { active: 'true' });
  }
  
  model() {
    return this.store.peekAll('article');
  }
}
