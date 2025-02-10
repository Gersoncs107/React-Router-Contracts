import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root, {loader as rootLoader, action as rootAction, loader} from './routes/root'
import ErrorPage from './error-page'
import Contact, {loader as contactLoader} from './routes/contact'
import Editcontact, {action as editAction}from './routes/edit'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader
      },
      {
        path:"contacts/:contactId/edit",
        element: <Editcontact/>,
        loader: contactLoader,
        action: editAction
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
