
import Home from "../pages/Home.tsx";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "../components/MainLayout.tsx";
import Cities from "../pages/Cities.tsx";


import EditCity from "../pages/EditCity.tsx";
import AddCity from "../pages/AddCity.tsx";



const RouteLayout = () => {
    const pages = [
        { path: "/cities", element: <Cities /> },
        { path: "/add-city", element: <AddCity/> },
        {path: "edit-city/:id", element: <EditCity /> }
    ] as const;

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout/>}>
                    <Route index element={<Home />} />
                    {pages.map((page) => (
                        <Route
                            key={page.path}
                            path={page.path}
                            element={page.element}
                        />
                    ))}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteLayout;
