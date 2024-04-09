// "use client";

// import { ApolloClient, ApolloLink, HttpLink, ApolloProvider } from "@apollo/client";
// import {
//   NextSSRInMemoryCache,
//   SSRMultipartLink,
// } from "@apollo/experimental-nextjs-app-support/ssr";

// function makeClient() {
//   const httpLink = new HttpLink({
//     uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clu8undly00cp08jp0hmp0sxf/master",
//   });

//   return new NextSSRApolloClient({
//     cache: new NextSSRInMemoryCache(),
//     link:
//       typeof window === "undefined"
//         ? ApolloLink.from([
//             new SSRMultipartLink({
//               stripDefer: true,
//             }),
//             httpLink,
//           ])
//         : httpLink,
//   });
// }

// export function ApolloWrapper({ children }: React.PropsWithChildren) {
//   return (
//     <ApolloProvider makeClient={makeClient}>
//       {children}
//     </ApolloProvider>
//   );
// }
