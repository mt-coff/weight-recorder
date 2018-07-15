const Enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
let store = {};
const mockLocalStorage = {
  getItem: key => {
    return key in store ? store[key] : null;
  },

  setItem: (key, value) => {
    store[key] = value;
  },

  clear: () => {
    store = {};
  },

  removeItem: key => {
    delete store[key];
  }
};

Enzyme.configure({ adapter: new Adapter() });
Object.defineProperty(window, "localStorage", { value: mockLocalStorage });
