import * as React from 'react';
import { Graph } from 'src/helpers/Graph';
import { GraphNode } from './graph-node';
import { Modal } from './modal';

/**
 * TODO:
 * 
 * 1. Graph with modals
 * 2. Filtered news list wih pagination
 */


// Circle parameters
const CIRCLE_RADIUS = 30;
// Canvas parameters
const HEIGHT = 640;
const WIDTH = 1000;

interface IProps {
    graphData: Graph<string>;
}

interface IState {
    display: number[];
    modal: boolean;
}

export class GraphView extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            display: [],
            modal: false
        }
    }

    public onGraphNodeHover = (index: number) => {
        if (this.state.display.indexOf(index) === -1) {
            this.setState({ display: [...this.state.display, index] });
        }
    }

    public onGraphNodeRelease = () => {
        this.setState({ display: [] });
    }

    public mapGraph = (
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
                                    {this.mapGraph(
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
                <GraphNode
                    value={g.value}
                    shiftX={shiftX}
                    shiftY={shiftY}
                    radius={CIRCLE_RADIUS}
                    id={g.id}
                    onMouseEnter={this.onGraphNodeHover}
                    onMouseLeave={this.onGraphNodeRelease}
                    display={this.state.display.indexOf(g.id) !== -1}
                />
            </g>
        );
    }

    public toggleModal = () => {
        this.setState({ modal: !this.state.modal })
    }

    public render() {
        return (
            <>
            <Modal display={this.state.modal} toggleModal={this.toggleModal} />
            <svg width={WIDTH} height={HEIGHT}>
                {this.mapGraph(this.props.graphData, CIRCLE_RADIUS, HEIGHT / 2, 1, WIDTH, HEIGHT)}
            </svg>
            </>
        );
    }
}
