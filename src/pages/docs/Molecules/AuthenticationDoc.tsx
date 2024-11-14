import {
  AuthenticationSignUpAndSignIn,
  WelcomeCardAuth,
} from "@/components/molecules/Authentication";

import { useAuthTabState } from "@/hooks/reactjs/useTabState";
import { AuthSection } from "../Components/reactjs/Auth/AuthCodeBlock";
import NavigationButton from "@/components/molecules/NavigationButton";
import {
  getAuthenticationSignUpAndSignIn,
  getWelcomeAuthCodeString,
} from "@/constants/reactjs/codeString.Auth";

const AuthenticationDoc = () => {
  const { show, toggleTab } = useAuthTabState();

  const sections = [
    {
      title: "Glassmorphism Welcome Card",
      key: "welcome" as const,
      component: WelcomeCardAuth,
      codeString: getWelcomeAuthCodeString(),
    },
    {
      title: "Glassmorphism Signup and Signin Card",
      key: "signup" as const,
      component: AuthenticationSignUpAndSignIn,
      codeString: getAuthenticationSignUpAndSignIn(),
    },
  ];

  return (
    <>
      <p className="text-gray-500">Displays a Cards for Authentication</p>
      {sections.map(({ title, key, component, codeString }) => (
        <AuthSection
          key={key}
          id={key}
          title={title}
          show={show[key]}
          onToggle={() => toggleTab(key)}
          codeString={codeString}
          InputComponent={component}
        />
      ))}

      <NavigationButton
        previousTitle="Ripple"
        nextTitle="Loaders"
        previousLink="/docs/reactjs/components/ripple"
        nextLink="/docs/reactjs/animations/loaders"
      />
    </>
  );
};

export default AuthenticationDoc;
