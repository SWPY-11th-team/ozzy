'use client';
import { useRouter } from 'next/navigation';
import style from '../DetailPage.module.css';
import NavigationBar from '@/app/components/NavigationBar/Nav';

const TermsDetail1 = () => {
  var router = useRouter();
  return (
    <div className={style.detailContainer}>
      <NavigationBar />
      <div>
        <h1>[필수] 서비스 이용 약관</h1>

        <div>제 1 조 (목적)</div>
        <div className={style.text}>
          본 약관은 Ozzy (이하 "서비스"라 한다) 이용과 관련된 권리와 의무, 책임
          사항을 명확히 하여 이용자의 권익을 보호하는 것을 목적으로 합니다.
          <br />
          <br />
        </div>
        <div>
          제 2 조 (약관의 효력 및 변경)
          <br />
        </div>
        <div className={style.text}>
          본 약관은 서비스에 게시함으로써 효력을 발생합니다. 서비스 운영자는
          약관을 변경할 수 있으며, 변경 시에는 최소 7일 전에 공지하고, 이용자는
          변경된 약관에 동의해야 서비스 이용이 가능합니다.
          <br />
          <br />
        </div>
        <div>
          제 3 조 (서비스의 제공)
          <br />
        </div>
        <div className={style.text}>
          서비스는 다음과 같은 기능을 제공합니다: 개인 일기 작성 및 관리, 일정
          관리 및 알림 기능, 통계 및 분석 기능, 서비스는 이용자의 요청에 따라
          맞춤형 서비스를 제공할 수 있습니다.
          <br />
          <br />
        </div>
        <div>
          제 4 조 (이용자의 의무)
          <br />
        </div>
        <div className={style.text}>
          이용자는 서비스 이용 시 다음 사항을 준수해야 합니다: 타인의 권리를
          침해하지 않을 것, 불법적인 행위를 하지 않을 것, 등록된 정보가 정확하고
          최신임을 보장할 것, 이용자는 자신의 계정 정보를 안전하게 관리해야
          하며, 타인에게 공유해서는 안 됩니다.
          <br />
          <br />
        </div>
        <div>
          제 5 조 (서비스의 변경 및 중단)
          <br />
        </div>
        <div className={style.text}>
          서비스 운영자는 서비스의 내용을 변경하거나 중단할 수 있으며, 이 경우
          사전 공지를 통해 이용자에게 알립니다. 서비스 중단 시 이용자는 저장된
          데이터에 대한 접근이 제한될 수 있으며, 이에 대한 책임은 이용자에게
          있습니다.
          <br />
          <br />
        </div>
        <div>
          제 6 조 (면책 조항)
          <br />
        </div>
        <div className={style.text}>
          서비스 운영자는 서비스 이용 중 발생하는 문제에 대해 책임을 지지
          않으며, 이용자는 자신의 판단에 따라 서비스를 이용해야 합니다. 서비스
          이용과 관련하여 발생하는 모든 분쟁은 이용자의 책임입니다.
          <br />
          <br />
        </div>
        <div>
          제 7 조 (약관의 준수)
          <br />
        </div>
        <div className={style.text}>
          이용자는 본 약관을 준수해야 하며, 이를 위반할 경우 서비스 이용에
          제한을 받을 수 있습니다.
        </div>
      </div>
    </div>
  );
};

export default TermsDetail1;
