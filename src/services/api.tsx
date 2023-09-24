export function Access ( repo: string ) {
  return fetch( "https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify( {
      query: repo
    } ),
    headers: {
      Authorization: `Bearer ${ import.meta.env.VITE_TOKEN }`
    }
  } );
}
