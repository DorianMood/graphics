import * as React from 'react';
import { Graph } from 'src/helpers/Graph';

// Circle parameters
const CIRCLE_RADIUS = 30;
// Canvas parameters
const HEIGHT = 640;
const WIDTH = 1000;

export const GraphView = (props: { graphData: Graph<string> }) => (
    <svg width={WIDTH} height={HEIGHT}>
        {mapGraph(props.graphData, CIRCLE_RADIUS, HEIGHT / 2, 1, WIDTH, HEIGHT)}
    </svg>
);

export const mapGraph = (
    g: Graph<string>,
    shiftX: number = CIRCLE_RADIUS,
    shiftY: number = CIRCLE_RADIUS,
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
                                <line
                                    x1={shiftX}
                                    y1={shiftY}
                                    x2={shiftX + 4 * CIRCLE_RADIUS}
                                    y2={height / g.nodes.length * (index + 0.5)}
                                    stroke="green"
                                />
                                {mapGraph(
                                    node,
                                    shiftX + 4 * CIRCLE_RADIUS,
                                    height / g.nodes.length * (index + 0.5),
                                    depth + 1,
                                    width,
                                    (index + 1) * height / g.nodes.length)}
                            </g>
                        );
                    }
                )}
            </g>
    }
    return (
        <g>
            {nodes}
            <circle
                cx={shiftX}
                cy={shiftY}
                r={5 + CIRCLE_RADIUS / 2}
                fill="green"
            />
            <circle cx={shiftX} cy={shiftY} r={CIRCLE_RADIUS / 2} />
        </g>
    );
}
