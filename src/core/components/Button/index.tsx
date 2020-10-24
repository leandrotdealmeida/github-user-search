import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}

const Button = ({ text }: Props) => (
    <div className="display-button">
        <button className="button-pos">
            <h5 className="text-button">{text}</h5>
        </button>
    </div>

);

export default Button;