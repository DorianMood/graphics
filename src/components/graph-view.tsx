import * as React from 'react';
import { Graph } from 'src/helpers/Graph';
export const GraphView = (props: {
    graphData: Graph<string>;
}) => (<svg width="1000" height="640">
    {map(props.graphData,1000,640)}
</svg>);
export const map = (g: Graph<string>,shiftX:number = 1000,shiftY:number = 640,depth:number = 0) => {
    let nodes = <g/>;
    if (g.nodes.length !== 0){
        nodes = <g>{g.nodes.map(node => map(node,shiftX+70,shiftY/2,depth+1))}</g>
    }
    return <g><circle cx={shiftX} cy={shiftY} r="30"/>{nodes}</g>;
}