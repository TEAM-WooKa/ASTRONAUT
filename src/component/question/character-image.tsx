import Image from 'next/image';
import React from 'react';

import type { CharacterColorType, CharacterType } from '@/types/character';
import { getCharacterImageSize } from '@/utils/character/image';

export default function CharacterImage({
  color,
  character,
}: {
  color: CharacterColorType;
  character: CharacterType;
}) {
  const imageURL = `/problem/${color}_${character}.png`;
  const { width, height } = getCharacterImageSize(character);

  return (
    <Image
      src={imageURL}
      alt="character image"
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL="/images/blur.webp"
      priority
    />
  );
}
