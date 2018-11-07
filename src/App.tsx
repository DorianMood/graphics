
import * as React from 'react';

import './App.css';
import { GraphView } from './components/graph-view';
import { Graph } from './helpers/Graph';

const graphContent: Graph<string> = {
  nodes: [
    {
      nodes: [
        {
          nodes: [
            {
              nodes: [],
              value: "2",
              id: 0
            },
            {
              nodes: [],
              value: "5",
              id: 1
            },
            {
              nodes: [],
              value: "6",
              id: 2
            }
          ],
          value: "2",
          id: 3
        },
        {
          nodes: [],
          value: "5",
          id: 4
        }
      ],
      value: "1",
      id: 5
    },
    {
      nodes: [
        {
          nodes: [],
          value: "3",
          id: 6
        }
      ],
      value: "4",
      id: 7
    }
  ],
  value: "0",
  id: 8
}

class App extends React.Component {
  public render() {


    return (
      <div className="App">
        <GraphView graphData={graphContent} />
      </div>
    );
  }
}

export default App;
