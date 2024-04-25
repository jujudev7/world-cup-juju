"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Navbar_1 = __importDefault(require("./components/Navbar"));
const Home_1 = __importDefault(require("./components/Home"));
// import About from './components/About';
// import Contact from './components/Contact';
const Historique_1 = __importDefault(require("./components/Historique"));
const Palmares_1 = __importDefault(require("./components/Palmares"));
const Editions_1 = __importDefault(require("./components/Editions"));
const TopScorers_1 = __importDefault(require("./components/TopScorers"));
function App() {
    return (<react_router_dom_1.BrowserRouter>
      <div>
        <Navbar_1.default />
        <main>
          <react_router_dom_1.Routes>
            <react_router_dom_1.Route path="/" element={<Home_1.default />}/>
            <react_router_dom_1.Route path="/historique" element={<Historique_1.default />}/>
            <react_router_dom_1.Route path="/historique/palmares" element={<Palmares_1.default />}/>
            <react_router_dom_1.Route path="/historique/editions-precedentes" element={<Editions_1.default />}/>
            <react_router_dom_1.Route path="/historique/meilleurs-buteurs" element={<TopScorers_1.default />}/>
            {/* <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} /> */}
          </react_router_dom_1.Routes>
        </main>
      </div>
    </react_router_dom_1.BrowserRouter>);
}
exports.default = App;
