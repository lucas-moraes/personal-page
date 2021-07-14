import { key } from "../token";

export function API ( repo: string ) {
  const token = key;
  return fetch( "https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify( {
      query: repo
    } ),
    headers: {
      Authorization: `Bearer ${ token }`
    }
  } );
}
