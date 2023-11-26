import { useRouter } from "next/router";
import { useEffect } from "react";
import { UserContext, UserProvider } from "@/context/UserContext";
import setAuthToken from "@/utils/setAuthToken";
interface Props {
  // Add any props that the wrapped component requires
}

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const Auth = (props: P & Props) => {
    const router = useRouter();

    // useEffect(() => {
    //   const token = localStorage.getItem("token");
    //   // console.log(token, "token");
    //   // if (!token) {
    //   //   setAuthToken(localStorage.getItem("token"));

    //   //   router.push("/");
    //   // }
    // }, []);

    return (
      <UserProvider>
        <WrappedComponent {...props} />
      </UserProvider>
    );
  };

  // Set the display name to improve debugging
  Auth.displayName = `withAuth(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return Auth;
};

export default withAuth;
