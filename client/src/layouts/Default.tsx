import { Outlet } from "react-router";

function DefaultLayout() {
  return (
    <>
      <nav>
        <h2>
          Quest of Apollo
        </h2>
        <ul>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default DefaultLayout;
