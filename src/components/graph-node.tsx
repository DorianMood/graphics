import * as React from "react";

interface IProps {
    shiftX: number;
    shiftY: number;
    radius: number;
    value: any;
    id: number;
    onMouseEnter?: any;
    onMouseLeave?: any;
}

export class GraphNode extends React.Component<IProps> {

    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <g>
                <circle
                    cx={this.props.shiftX}
                    cy={this.props.shiftY}
                    r={5 + this.props.radius / 2}
                    fill="green"
                />
                <text
                    x={this.props.shiftX - this.props.radius}
                    y={this.props.shiftY + this.props.radius}
                    fill="black"
                >
                    {this.props.value}
                </text>
                <circle cx={this.props.shiftX} cy={this.props.shiftY} r={this.props.radius / 2} />
            </g>
        );
    }
}