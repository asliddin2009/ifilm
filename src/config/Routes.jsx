import { Route } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';

const Routes6 = () => {
    return (
        <>
            <Route
                path='/:category/search/:keyword'
                element={<Catalog />}
            />
            <Route
                path='/:category/:id'
                element={<Detail />}
            />
            <Route
                path='/:category'
                element={<Catalog />}
            />
            <Route
                path='/'
                exact
                element={<Home />}
            />
        </>
    );
}

export default Routes6;
