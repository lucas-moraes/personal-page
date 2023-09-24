import React, {FunctionComponent, useEffect, useState} from "react";
import {SkeletonCardToRepos} from "../../components/Skeleton";
import {IReposProps} from "./interface";
import {LabelTwo, Row} from "./styles";
import { GetRepositories } from "../../services/consults";
import CardToRepos from "../../components/CardToRepos";


const Repos: FunctionComponent<IReposProps> = (props) => {
  const [project, setProject] = useState<{name: string; primaryLanguage: {name: string}}[]>([]);

  async function Get() {
    await GetRepositories().then((res) => {
      setTimeout(() => {
        setProject(res);
      }, 3000);
    });
  }

  useEffect(() => {
    Get();

    () => {
      return Get();
    };
  }, []);

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
      <Row style={{margin: 0}}>
        {project.length <= 0 ? (
          <Loading />
        ) : (
          project.map((text, i = 1) => (
            <CardToRepos {...props} key={i++} text={text.name} language={text.primaryLanguage?.name ?? "Indefinido"} />
          ))
        )}
      </Row>
    </LabelTwo>
  );
};

export default Repos;
