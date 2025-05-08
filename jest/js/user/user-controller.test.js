const User = require('./user');
const UserController = require('./user-controller');

describe('UserController', () => {
  let controller;

  beforeEach(() => {
    controller = new UserController();
  });

  test('add() adds a new user', () => {
    const user = new User(1, 'test@example.com');
    expect(controller.add(user)).toBe(true);
  });

  test('remove() returns false if user does not exist', () => {
    expect(controller.remove(999)).toBe(false);
  });

  test('findByEmail() returns user if email exists', () => {
    const user = new User(2, 'email@x.com');
    controller.add(user);
    expect(controller.findByEmail('email@x.com')).toEqual(user);
  });

  test('findByEmail() returns null if email does not exist', () => {
    expect(controller.findByEmail('none@x.com')).toBeNull();
  });

  test('findById() returns user if ID exists', () => {
    const user = new User(3, 'abc@x.com');
    controller.add(user);
    expect(controller.findById(3)).toEqual(user);
  });

  test('findById() returns null if ID does not exist', () => {
    expect(controller.findById(1234)).toBeNull();
  });
});

