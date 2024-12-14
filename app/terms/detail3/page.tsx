'use client';
import { useRouter } from 'next/navigation';
import style from '../DetailPage.module.css';
import NavigationBar from '@/app/components/NavigationBar/Nav';

const TermsDetail3 = () => {
  var router = useRouter();
  return (
    <div className={style.detailContainer}>
      <NavigationBar />
      <div>
        <h1>개인정보 처리 방침</h1>
        [Ozzy] (이하 "서비스")는 사용자의 개인정보를 소중히 보호하며, 다음과
        같은 방침을 통해 개인정보를 처리합니다.
        <br />
        <br />
        <div>개인정보의 수집 및 이용 목적</div>
        <div className={style.text}>
          - 서비스 제공 및 운영 사용자 <br />
          - 맞춤형 서비스 제공 <br />
          - 서비스 개선 및 연구 <br />- 사용자와의 소통 및 피드백 수집
        </div>
        <br />
        <div>수집하는 개인정보의 항목</div>
        <div className={style.text}>
          - 이름 <br />
          - 이메일 주소 <br />
          - 일기 내용 <br />
          - 감정 분석 결과 <br />- 서비스 이용 기록 등
        </div>
        <br />
        <div>개인정보의 보유 및 이용 기간</div>
        <div className={style.text}>
          개인정보는 서비스 이용 기간 동안 보유하며, 이용 목적이 달성된 후에는
          지체 없이 파기합니다.
        </div>{' '}
        <br />
        <div>개인정보의 제3자 제공</div>
        <div className={style.text}>
          사용자의 개인정보는 법률에 의한 경우를 제외하고는 제3자에게 제공하지
          않습니다. 단, AI 분석을 위해 네이버 클로바 서비스를 활용하는 경우,
          해당 서비스 제공을 위해 필요한 최소한의 개인정보가 제공될 수 있습니다.
          이 경우, 사용자는 개인정보가 제3자에게 제공되는 것에 대해 동의합니다.
        </div>
        <br />
        <div>개인정보의 안전성 확보 조치</div>
        <div className={style.text}>
          서비스는 개인정보의 안전성을 확보하기 위해 기술적, 관리적 조치를
          취하고 있습니다.
        </div>
        <br />
        <div>이용자의 권리</div>
        <div className={style.text}>
          사용자는 언제든지 자신의 개인정보에 대한 열람, 수정, 삭제를 요청할 수
          있습니다.
        </div>
        <br />
        <div>개인정보 처리 방침의 변경</div>
        <div className={style.text}>
          본 방침은 법령 및 서비스의 변경에 따라 수정될 수 있으며, 변경 시
          사전에 공지합니다.
        </div>
        <br />
        <div>본 방침은 동의한 날로부터 시행됩니다.</div>
      </div>
    </div>
  );
};

export default TermsDetail3;
