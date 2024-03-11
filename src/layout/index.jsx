import { useLocation } from "react-router-dom";
import { useOutlet } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { routes } from "@/router/router.jsx";
import Header from "@/component/header.jsx";
import Footer from "@/component/footer.jsx";

const Layout = () => {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};

  return (
    <div>
      <Header />
      <main>
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            unmountOnExit
            classNames="my-node"
          >
            {() => <div ref={nodeRef}>{currentOutlet}</div>}
          </CSSTransition>
        </SwitchTransition>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
