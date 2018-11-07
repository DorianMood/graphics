import * as React from "react";

interface IProps {
    display: boolean;
    toggleModal: any;
}

export class Modal extends React.Component<IProps> {
    public render() {
        return (
            <>
                <div className="modal" style={this.props.display ? {
                    zIndex: 1003,
                    display: "block",
                    opacity: 1,
                    top: "10%",
                    transform: "scaleX(1) scaleY(1)"
                } : {}}>
                    <div className="modal-content">
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div className="modal-footer">
                        <a className="modal-close waves-effect waves-green btn-flat" onClick={this.props.toggleModal}>
                            Agree
                        </a>
                    </div>
                </div>
                <div className="modal-overlay" style={this.props.display ? {
                    zIndex: 1002,
                    display: "block",
                    opacity: 0.5
                } : {}} />
            </>
        );
    }
}
