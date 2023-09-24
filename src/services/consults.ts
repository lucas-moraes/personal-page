import {Access} from "./api";

export async function GetRepositories() {
  const repo = `query{ 
        viewer{ 
          repositories(
            first:100, 
            isFork:false, 
            ownerAffiliations: OWNER,
            privacy:PUBLIC, 
            orderBy:{
              field: CREATED_AT, 
              direction: DESC
            }
          ){
            nodes{ 
              name,
              primaryLanguage {
                name
              }        
            } 
          } 
        } 
      }`;
  return Access(repo)
    .then((res) => res.text())
    .then((body) => {
      const base = JSON.parse(body);
      return base.data.viewer.repositories.nodes;
    })
    .catch((error) => console.error(error));
}
