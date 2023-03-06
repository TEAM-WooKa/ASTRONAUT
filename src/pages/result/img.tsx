import { useRouter } from 'next/router';

function ResultImagePage() {
  const { query, back } = useRouter();
  const imageUrl = query.image as string;
  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} width="320px" height="220px" alt="card" />
      ) : (
        <p>이미지 다운에 실패했습니다. </p>
      )}
      <button onClick={() => back()}>뒤로가기</button>
    </div>
  );
}
export default ResultImagePage;
