import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import { SkeletonCardToGists } from "../components/skeleton";
import CardToGists from "../components/cardsToGists";
import { API } from "../api";

interface GistsProps {
  theme: boolean;
}

const Gists: FunctionComponent<GistsProps> = ( props ) => {
  const [ script, setScript ] = useState<Array<any>>( [] );
  useEffect( () => {
    const gist = `query { viewer { gists(first:100 privacy:PUBLIC orderBy:{field: CREATED_AT, direction: DESC}){ nodes{ description url } } } }`;

    API( gist )
      .then( res => res.text() )
      .then( body => {
        const base = JSON.parse( body );
        let projects = base.data.viewer.gists.nodes;
        setTimeout( () => setScript( projects ), 3000 );
      } )
      .catch( error => console.error( error ) );
  }, [] );

  const LabelTwo = styled.div`
    z-index: -1;
    padding-left: 3rem;
    padding-top: 3rem;
  `;

  const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;

  const Loading = () => (
    <>
      <SkeletonCardToGists { ...props } />
      <SkeletonCardToGists { ...props } />
      <SkeletonCardToGists { ...props } />
      <SkeletonCardToGists { ...props } />
    </>
  );

  return (
    <LabelTwo>
      <Row style={ { margin: 0 } }>
        { script.length <= 0 ? (
          <Loading />
        ) : (
          script.map( ( text, i = 1 ) => ( <CardToGists key={ i++ } description={ text.description } url={ text.url } { ...props } /> ) )
        ) }
      </Row>
    </LabelTwo>
  );
};

export default Gists;
