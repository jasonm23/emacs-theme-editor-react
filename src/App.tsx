import * as React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ThemeDefinitionForm from './ThemeDefinitionForm';

import Header from './Header';

class App extends React.Component<{}, {}> {

  public state = { themeName: "Untitled" }

  public render() {
    return (
    <div className="App">
      <Header title="Emacs Theme Editor" />
      <ThemeDefinitionForm />
    </div>
    );
  }
}

export default App;
