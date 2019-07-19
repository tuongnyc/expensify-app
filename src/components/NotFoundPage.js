import React from 'react';
import { Link } from 'react-router-dom';

// <Link> is similar to <a>, however it does not do whole page refresh
// so, it is much faster!
const NotFoundPage = () => (
    <div>
    404 -> <Link to="/">Go Home </Link>
    </div>
);


export default NotFoundPage;