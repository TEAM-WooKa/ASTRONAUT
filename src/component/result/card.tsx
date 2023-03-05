import IDCard from '@/component/result/IDCard';
import Image from 'next/image';

const name = '이름';
const birth = '2000.00.00';
const hobby = '취미';

function IDCardPage({ cardRef }: { cardRef: any }) {
  // TODO : url에 데이터가 있다는 것을 가정하고, 데이터를 가져와서 뿌려준다.

  return <IDCard name={name} birth={birth} hobby={hobby} cardRef={cardRef} />;
}

export default IDCardPage;
