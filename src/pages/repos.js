import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SkeletonCardToRepos } from "../components/skeleton";
import CardToRepos from "../components/cardsToRepos";
import { API } from "../api";

const Repos = props => {
  const [name, setName] = useState("");

  useEffect(() => {
    const repo = `query{ viewer{ repositories(first:100, isFork:false, ownerAffiliations: OWNER,privacy:PUBLIC, orderBy:{field: CREATED_AT, direction: DESC}){ nodes{ name } } } }`;
    API(repo)
      .then(res => res.text())
      .then(body => {
        const base = JSON.parse(body);
        let projects = base.data.viewer.repositories.nodes;
        setName(projects);
      })
      .catch(error => console.error(error));
  }, []);

  let items = [];
  for (let i in name) {
    items.push(name[i].name);
  }

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
      <SkeletonCardToRepos {...props} />
      <SkeletonCardToRepos {...props} />
      <SkeletonCardToRepos {...props} />
      <SkeletonCardToRepos {...props} />
    </>
  );

  return (
    <LabelTwo>
      <Row style={{ margin: 0 }}>
        {typeof name === "string" ? (
          <Loading />
        ) : (
          items.map((text, i = 1) => (
            <CardToRepos {...props} key={i++} text={text} />
          ))
        )}
      </Row>
    </LabelTwo>
  );
};

export default Repos;
