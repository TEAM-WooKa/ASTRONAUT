import html2canvas from 'html2canvas';
import { useRef } from 'react';

function useImageDownload() {
  const captureArea = useRef<HTMLDivElement>(null);

  /* 다운로드 버튼 함수 */
  const onImageDownload = async () => {
    if (captureArea.current) {
      const canvas = await html2canvas(captureArea.current, { scale: 4 });
      const element = document.createElement('a');
      element.href = canvas.toDataURL('image/png');
      element.download = '2023_Mandalart.png';
      element.click();
    }
  };

  // 이미지 blob 형태로 가져오기, 이부분은 아직 미완성, 필요할때 완성할 예정
  const getImageBlob = async () => {
    if (captureArea.current) {
      const canvas = await html2canvas(captureArea.current);
      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        return url;
      });
    }
    return null;
  };

  return {
    captureArea,
    onImageDownload,
    getImageBlob,
  };
}

export default useImageDownload;
