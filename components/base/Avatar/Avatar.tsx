import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Clipboard from 'components/base/Clipboard';
import Button from 'components/ui/Button';
import Icon from 'components/ui/Icon';

import Picture from './components/Picture';

interface Props {
  className?: string;
  followers?: number;
  isAddressDisplayed?: string;
  isClickable?: boolean;
  isDiscoverButton?: boolean;
  isPictureOnly?: boolean;
  isTooltip?: boolean;
  isVerified?: boolean;
  label?: string;
  name: string;
  nickname?: string;
  personalUrl?: string;
  picture?: string;
  twitterName?: string;
  walletId?: string;
}

const Avatar = ({
  className,
  followers,
  isAddressDisplayed,
  isClickable,
  isDiscoverButton,
  isPictureOnly,
  isTooltip,
  isVerified,
  label,
  name,
  nickname,
  personalUrl,
  picture,
  twitterName,
  walletId,
}: Props) => {
  if (isPictureOnly) {
    return (
      <Picture
        isClickable={isClickable}
        isTooltip={isTooltip}
        isVerified={isVerified}
        link={walletId}
        name={name}
        picture={picture}
      />
    );
  }

  return (
    <SAvatarContainer className={className}>
      <Picture
        isClickable={isClickable}
        isTooltip={isTooltip}
        isVerified={isVerified}
        link={walletId}
        name={name}
        picture={picture}
      />
      <SDetailsContainer>
        <STopDetails>
          <Link href={`/${walletId}`} passHref>
            <SName>{name}</SName>
          </Link>
          {followers && <SLabel>{`${followers} followers`}</SLabel>}
          {nickname && <SNickname>@{nickname}</SNickname>}
        </STopDetails>

        <SBottomDetails>
          {label && <SLabel>{label}</SLabel>}
          {twitterName && (
            <SLink
              href={`https://twitter.com/${twitterName}`}
              target="_blank"
              title="twitterPage"
              rel="noopener noreferrer"
            >
              <STwitterIcon name="socialTwitter" />
              <STwitterNickname>@{twitterName}</STwitterNickname>
            </SLink>
          )}
          {personalUrl && (
            <SLink
              href={personalUrl}
              target="_blank"
              title="personalPage"
              rel="noopener noreferrer"
            >
              {personalUrl.replace(/(^\w+:|^)\/\//, '')}
            </SLink>
          )}
          {isAddressDisplayed && walletId && (
            <Clipboard address={walletId} isEllipsis />
          )}
        </SBottomDetails>
      </SDetailsContainer>
      {isDiscoverButton && (
        <SButton
          color="primaryLight"
          href={`/${walletId}`}
          size="small"
          text="Discover"
        />
      )}
    </SAvatarContainer>
  );
};

const SAvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1.6rem;
`;

const STopDetails = styled.div`
  display: flex;
  align-items: center;

  > * {
    &:not(:first-child) {
      margin-left: 0.8rem;
    }
  }
`;

const SBottomDetails = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.4rem;

  > * {
    &:not(:first-child) {
      margin-left: 0.8rem;
    }
  }
`;

const SName = styled.a`
  color: ${({ theme }) => theme.colors.contrast};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 1.6rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;

const SLabel = styled.span`
  color: ${({ theme }) => theme.colors.contrast};
  font-size: 1.6rem;
`;

const SNickname = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.6rem;
`;

const SLink = styled.a`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.neutral200};
  font-size: 1.6rem;
`;

const STwitterIcon = styled(Icon)`
  width: 1.4rem;
  height: 1.4rem;
`;

const STwitterNickname = styled.span`
  margin-left: 0.4rem;
`;

const SButton = styled(Button)`
  margin-left: 0.8rem;
`;

export default Avatar;
