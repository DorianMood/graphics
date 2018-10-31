import * as React from 'react';
import { Graph } from 'src/helpers/Graph';

const circleRadius = 30;
const HEIGHT = 640;
const WIDTH = 1000;

export const GraphView = (props: { graphData: Graph<string> }) => (
    <svg width={WIDTH} height={HEIGHT}>
        {mapGraph(props.graphData, circleRadius, HEIGHT / 2, 1, WIDTH, HEIGHT)}
    </svg>
);

export const mapGraph = (
    g: Graph<string>,
    shiftX: number = circleRadius, shiftY: number = circleRadius,
    depth: number = 1,
    width: number, height: number
) => {

    let nodes = <></>;
    if (g.nodes.length !== 0) {
        nodes =
            <g>
                {g.nodes.map(
                    (node, index) => {
                        return (
                            <g key={index}>
                                <line x1={shiftX} y1={shiftY} x2={shiftX + 4 * circleRadius} y2={height / g.nodes.length * (index + 0.5)} stroke="green" />
                                {mapGraph(node, shiftX + 4 * circleRadius, height / g.nodes.length * (index + 0.5), depth + 1, width, (index + 1) * height / g.nodes.length)}
                            </g>
                        );
                    }
                )}
            </g>
    }
    return <g>{nodes}<circle cx={shiftX} cy={shiftY} r={5 + circleRadius / 2} fill="green" /><circle cx={shiftX} cy={shiftY} r={circleRadius / 2} /></g>;
}
