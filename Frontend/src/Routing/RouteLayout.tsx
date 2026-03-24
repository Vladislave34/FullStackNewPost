
import Home from "../pages/Home.tsx";

import {BrowserRouter, Route, Routes} from "react-router-dom";



const RouteLayout = () => {
    const pages  = [
        { path: "/", element: <Home /> },
    ] as const;

    return (
        <BrowserRouter>
            <Routes>
                {pages.map((page) => (
                    <Route
                        key={page.path}
                        path={page.path}
                        element={page.element}
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
};

export default RouteLayout;
