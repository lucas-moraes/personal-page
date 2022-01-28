import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import { SkeletonCardToRepos } from "../components/skeleton";
import CardToRepos from "../components/cardsToRepos";
import { API } from "../api";

interface ReposProps {
  theme: boolean;
}

const Repos: FunctionComponent<ReposProps> = ( props ) => {

  const [ project, setProject ] = useState<Array<any>>( [] );

  useEffect( () => {
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
    API( repo )
      .then( res => res.text() )
      .then( body => {
        const base = JSON.parse( body );
        let projects = base.data.viewer.repositories.nodes;
        setTimeout( () => setProject( projects ), 3000 );

      } )
      .catch( error => console.error( error ) );
  }, [] );


  const LabelTwo = styled.div`
    padding-left: 3rem;
    padding-top: 3rem;
  `;

  const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;

  const Loading = () => (
    <>
      <SkeletonCardToRepos { ...props } />
      <SkeletonCardToRepos { ...props } />
      <SkeletonCardToRepos { ...props } />
      <SkeletonCardToRepos { ...props } />
    </>
  );

  return (
    <LabelTwo>
      <Row style={ { margin: 0 } }>
        { project.length <= 0 ? (
          <Loading />
        ) : (
          project.map( ( text, i = 1 ) => ( <CardToRepos { ...props } key={ i++ } text={ text.name } language={ text.primaryLanguage.name } /> ) )
        ) }
      </Row>
    </LabelTwo>
  );
};

export default Repos;
