/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import data from './content/data';

export class List extends Component {
    divRef = React.createRef();

    componentDidMount() {
        let div = this.divRef.current.childNodes,
            props = this.props;
        div.forEach((el) => {
            el.addEventListener('click', function () {
                props.sendIndex(parseFloat(this.id));
            });
        });
    }

    componentDidUpdate() {
        this.divRef.current.childNodes[this.props.currentIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'nearest',
        });
    }

    render() {
        let listItem = data.map(({ title,src }, i) => {
            return (
                <div
                    id={i}
                    key={src}
                    className={
                        this.props.currentIndex === i ? 'box1 active' : 'box1'
                    }
                >
                    
                        <img
                            src={src}
                            title={title}
                            align="center"
                            alt={title}
                        />
                   

                    <span>{title}</span>
                </div>
            );
        });
        return (
            <div className="container1" ref={this.divRef}>
                {listItem}
            </div>
        );
    }
}

export default List;
