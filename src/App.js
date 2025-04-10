import Header from './components/chef-claude/Header';
import Main from './components/chef-claude/Main';
import Footer from './components/chef-claude/Footer';
import Form from './components/chef-claude/Form';
import StateExample from './components/examples/StateExample';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Form />
        <Main />
        <StateExample />
        <Footer />
      </div>
    </>
  );
}

export default App;
