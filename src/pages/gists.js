import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SkeletonCardToGists } from "../components/skeleton";
import CardToGists from "../components/cardsToGists";
import { API } from "../api";

const Gists = (props) => {
  const [name, setName] = useState("vazio");
  useEffect(() => {
    const gist = `query { viewer { gists(first:100 privacy:PUBLIC orderBy:{field: CREATED_AT, direction: DESC}){ nodes{ description url } } } }`;

    API(gist)
      .then(res => res.text())
      .then(body => {
        const base = JSON.parse(body);
        let projects = base.data.viewer.gists.nodes;
        setName(projects);
      })
      .catch(error => console.error(error));
  }, []);

  let names = [];

  for (let i in name) {
    names.push(name[i]);
  }

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
      <SkeletonCardToGists {...props}/>
      <SkeletonCardToGists {...props}/>
      <SkeletonCardToGists {...props}/>
      <SkeletonCardToGists {...props}/>
    </>
  );

  return (
    <LabelTwo>
      <Row style={{ margin: 0 }}>
        {typeof name === "string" ? (
          <Loading />
        ) : (
          names.map((card, i = 1) => (
            <CardToGists
              key={i++}
              description={card.description}
              url={card.url}
              {...props}
            />
          ))
        )}
      </Row>
    </LabelTwo>
  );
};

export default Gists;
