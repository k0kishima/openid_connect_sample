import React from "react";
import { stringify } from "querystring"
import { AuthPage } from "../../components/pages/AuthPage";  // NOTE: workspace 使ってるからかこのプロジェクトの tsconfig で指定した baseUrl 効かないから一旦相対パスで

type AuthRedirectParams = {
  responseType: 'code';
  clientId: string;
  redirectUri: string;
}

export const AuthContainer: React.VFC = () => {
  const authorizationEndpointBaseUrl = "http://localhost:3002/authorize";

  const handleAuthRedirection = () => {
    const params: AuthRedirectParams = {
      // clientIdなどは本来であれば環境変数を参照するなどしてハードコーディングを避けるべき(演習の便宜上このように定義)
      responseType: 'code',
      clientId: 'oauth-client-1',
      redirectUri: 'http://localhost:3000/callback',
    }
    const authorizationUrl = `${authorizationEndpointBaseUrl}?${stringify(params)}`;
    window.location.assign(encodeURI(authorizationUrl))
  };

  return (
    <AuthPage handleAuthRedirection={handleAuthRedirection} />
  );
};
