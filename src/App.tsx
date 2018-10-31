
import * as React from 'react';

import './App.css';
import { GraphView } from './components/graph-view';
import { Graph } from './helpers/Graph';

const g: Graph<string> = {
  nodes: [
    {
      nodes: [
        {
          nodes: [],
          value: "2"
        }
      ],
      value: "1",
    },
    {
      nodes: [
        {
          nodes: [],
          value: "3"
        }
      ],
      value: "4",
    }
  ],
  value: "0",
}
class App extends React.Component {
  public render() {


    return (
      <div className="App">
        <GraphView graphData={g} />
      </div>
    );
  }
}

export default App;
