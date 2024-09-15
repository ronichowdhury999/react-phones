import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home"
import Root from "../Root/Root"
import Favorites from "../Pages/Favorites"


const myCreateRoute = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/favorites',
                element:<Favorites/>,
            }
        ]
    }
])

export default myCreateRoute