import {createBrowserRouter} from "react-router-dom";

import UserForm from "../components/UserForm";
import App from "@/App";
import UserForm2 from "@/components/forms/UserForm2";
import UserFormAvatar from "@/components/forms/UserFormAvatar";
import ClickModal from "@/components/modals/ClickModal";
import NavsWithMouseHover from "@/components/navs/NavsWithMouseHover";
import HoverPr from "@/components/navs/HoverPr";
import HoverPr2 from "@/components/navs/HoverPr2";

export const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
        {
            path:'/test/user1',
            element: <UserForm/>
        },
        {
          path:'/test/user2',
          element: <UserForm2/>
      },
        {
          path:'/test/user3',
          element: <UserFormAvatar/>
      },
      {
        path:'/test/modal',
        element: <ClickModal/>
      },
      {
        path:'/test/NavsWithMouseHover',
        element: <NavsWithMouseHover/>
      },
      {
        path:'/test/HoverPr',
        element: <HoverPr/>
      },
      {
        path:'/test/HoverPr2',
        element: <HoverPr2/>
      },
    ]
  }
])

// export default router