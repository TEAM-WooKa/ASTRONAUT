import { toPng } from 'html-to-image';
import type { MutableRefObject } from 'react';

export const downloadImage = async (
  ref: MutableRefObject<HTMLElement | null>,
) => {
  if (!ref.current) return;

  try {
    const dataUrl = await toPng(ref.current);
    const link = document.createElement('a');
    link.download = 'image.png';
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error('Failed to generate PNG image:', error);
  }
};

export const getImageUrl = async (
  ref: MutableRefObject<HTMLElement | null>,
) => {
  if (!ref.current) return null;

  // NOTE: to png fmf
  try {
    const dataUrl = await toPng(ref.current);

    const res = await fetch(dataUrl);
    const blob = await res.blob();
    // 로컬 스토리지에 Blob 저장
    const imageUrl = URL.createObjectURL(blob); // Blob 데이터를 이미지 URL로 변환
    return imageUrl;
  } catch (error) {
    console.error('HTML to Image conversion failed', error);
  }
};
