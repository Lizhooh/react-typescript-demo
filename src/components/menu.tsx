import * as React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
    list: [any]
};

export default ({ list }: IProps) => (
    <div className="menu">
        {list.map((item, index) => (
            <Link to={item.url} key={item.url}>
                {item.text}
            </Link>
        ))}
    </div>
);



