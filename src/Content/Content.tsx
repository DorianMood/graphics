import * as React from 'react';
import Post from '../Post/Post';


class Content extends React.Component{

    public render() {

        return (
            <div className = "Content">
                <Post/>
            </div>
        )
    }
}

export default Content;