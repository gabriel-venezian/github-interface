import React from "react";
import useGithub from "../../hooks/gitHubHooks";
import * as S from "./styled";

const Profile = () => {
  const { githubState } = useGithub();

  return (
    <S.Wrapper>
      <S.WrapperImage src={githubState.user.avatar} alt="Avatar of user" />
      <S.WrapperUserInfo>
        <div>
          <h1>{githubState.user.name}</h1>
          <S.WrapperUser>
            <a
              href={githubState.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {githubState.user.login}
            </a>
          </S.WrapperUser>
          <S.WrapperUser>
            <span>{githubState.user.company}</span>
          </S.WrapperUser>
          <S.WrapperUser>
            <span>{githubState.user.location}</span>
          </S.WrapperUser>
          <S.WrapperUser>
            <a href={githubState.user.blog} target="_blank" rel="noreferrer">
              {githubState.user.blog}
            </a>
          </S.WrapperUser>
        </div>
        <S.WrapperStatusCounter>
          <div>
            <h4>Followers</h4>
            <span> {githubState.user.followers}</span>
          </div>
          <div>
            <h4>Following</h4>
            <span> {githubState.user.following}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span> {githubState.user.public_gists}</span>
          </div>
          <div>
            <h4>Repositories</h4>
            <span> {githubState.user.public_repos}</span>
          </div>
        </S.WrapperStatusCounter>
      </S.WrapperUserInfo>
    </S.Wrapper>
  );
};

export default Profile;
