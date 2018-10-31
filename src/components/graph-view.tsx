import * as React from 'react';
import { Graph } from 'src/helpers/Graph';

const width = 50;
export const GraphView = (props: {
    graphData: Graph<string>;
}) => (
        <svg width={1000} height={640}>
            {map(props.graphData, width, 200 + width)}
        </svg>
    );

export const map = (g: Graph<string>, shiftX: number = width, shiftY: number = width, depth: number = 0) => {
    console.log('Recursion level ' + depth);
    let nodes = <g />;
    if (g.nodes.length !== 0) {
        nodes =
            <g>
                {g.nodes.map(
                    (node, index) => map(node, shiftX + width * depth, shiftY + width * index, depth + 1)
                )}
            </g>
    }
    return <g><circle cx={shiftX} cy={shiftY} r={width / 2} />{nodes}</g>;
}