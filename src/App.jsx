import Header from "./components /Header";
import Section from "./components /Section";
import HelpfulResources from "./components /HelpfulResource";
import AboutMe from "./components /AboutMe";
import Footer from "./components /Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Section title="What is React?">
        React is a JavaScript library for building user interfaces.
      </Section>
      <Section title="Benefits of React">
        <ul>
          <li>Reusable components</li>
          <li>State management</li>
          <li>Server-side rendering</li>
          <li>Easy to learn and understand</li>
        </ul>
      </Section>
      <Section title="">
        <HelpfulResources
          resources={[
            { title: "React documentation", link: "https://reactjs.org/docs/getting-started.html" },
            { title: "React tutorial", link: "https://reactjs.org/tutorial/tutorial.html" },
            { title: "React hooks", link: "https://reactjs.org/docs/hooks-intro.html" },
          ]}
        />
      </Section>
      <Section title="About Me">
      <AboutMe />
      </Section>
      <Footer />
    </div>
  );
}

export default App;
