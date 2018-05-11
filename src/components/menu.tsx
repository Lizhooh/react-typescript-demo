import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    list: Array<{
        text: string,
        url: string,
    }>
}

export default (p: Props) => (
    <div className="menu">
        {p.list.map((item, index) => (
            <Link to={item.url} key={item.url}>
                {item.text}
            </Link>
        ))}
    </div>
)

