import { TodoApplicationPage } from './app.po';

describe('todo-application App', () => {
  let page: TodoApplicationPage;

  beforeEach(() => {
    page = new TodoApplicationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
