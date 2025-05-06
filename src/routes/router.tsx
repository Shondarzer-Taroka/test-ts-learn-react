import {createBrowserRouter} from "react-router-dom";

import UserForm from "../components/UserForm";
import App from "@/App";
import UserForm2 from "@/components/forms/UserForm2";
import UserFormAvatar from "@/components/forms/UserFormAvatar";
import ClickModal from "@/components/modals/ClickModal";
import NavsWithMouseHover from "@/components/navs/NavsWithMouseHover";
import HoverPr from "@/components/navs/HoverPr";
import HoverPr2 from "@/components/navs/HoverPr2";
import HoverPr3 from "@/components/navs/HoverPr3";
import HoverPr4 from "@/components/navs/HoverPr4";
import Quiz1 from "@/components/quizs/Quiz1";
import Math1 from "@/components/maths/Math1";
import Quiz2 from "@/components/quizs/Quiz2";

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
      {
        path:'/test/HoverPr3',
        element: <HoverPr3/>
      },
      {
        path:'/test/HoverPr4',
        element: <HoverPr4/>
      },
      {
        path:'/test/quiz1',
        element: <Quiz1/>
      },
      {
        path:'/test/quiz2',
        element: <Quiz2/>
      },
      {
        path:'/test/mathqs1',
        element: <Math1/>
      },
    ]
  }
])

// export default router