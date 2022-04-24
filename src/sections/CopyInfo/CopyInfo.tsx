import React from 'react';

import { LinkHandler } from 'components/LinkHandler/LinkHandler';

import * as S from './CopyInfo.styles';

interface Props {
  inspirationName?: string;
  inspirationHref?: string;
}

export const CopyInfo = (props: Props) => {
  const { inspirationHref, inspirationName } = props;

  return (
    <>
      <S.GithubWrapper>
        <LinkHandler isExternal elHref="https://github.com/javusScriptus/creative-bay">
          <S.GithubLink>GitHub repo</S.GithubLink>
        </LinkHandler>
      </S.GithubWrapper>
      <S.AuthorWrapper>
        <LinkHandler isExternal elHref="https://creativeprojects.vercel.app/">
          <S.AuthorLink>Michal Zalobny</S.AuthorLink>
        </LinkHandler>
        portfolio 2022 - WebGL &#38; GLSL
      </S.AuthorWrapper>

      {inspirationName && (
        <S.InspirationWrapper>
          Inspired by
          <LinkHandler isExternal elHref={inspirationHref}>
            <S.InspirationLink>{inspirationName}</S.InspirationLink>
          </LinkHandler>
        </S.InspirationWrapper>
      )}
    </>
  );
};
