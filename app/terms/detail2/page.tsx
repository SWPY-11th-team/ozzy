'use client';
import { useRouter } from 'next/navigation';
import style from '../DetailPage.module.css';
import NavigationBar from '@/app/components/NavigationBar/Nav';

const TermsDetail2 = () => {
  var router = useRouter();
  return (
    <div className={style.detailContainer}>
      <NavigationBar />
      <div>
        <h1>개인정보 수집 및 이용 동의</h1>
        본인은 [Ozzy] (이하 "서비스")가 제공하는 일기 감정 분석 서비스에 대한
        개인정보 수집 및 이용에 동의합니다.
        <br />
        <br />
        <div>제 1 조 (목적)</div>
        <div className={style.text}>
          본 방침은 서비스에서 수집하는 개인정보의 처리에 관한 사항을 규정하여,
          이용자의 권익을 보호하고 개인정보를 안전하게 관리하기 위한 기준을
          마련합니다.
        </div>
        <br />
        <div>제 2 조 (수집하는 개인정보의 항목)</div>
        <div className={style.text}>
          필수 항목: 이름 이메일 주소: 서비스 이용을 위한 계정 생성 및 인증 일기
          내용 감정 분석 결과 선택 항목: 서비스 이용 기록: 서비스 이용 통계 및
          맞춤형 개선
        </div>
        <br />
        <div>제 3 조 (개인정보의 수집 및 이용 목적)</div>
        <div className={style.text}>
          사용자 맞춤형 감정 분석 제공 서비스 제공 및 운영 서비스 개선 및 연구
          사용자와의 소통 및 피드백 수집
        </div>{' '}
        <br />
        <div>제 4 조 (개인정보의 보유 및 이용 기간)</div>
        <div className={style.text}>
          개인정보는 서비스 이용 기간 동안 보유하며, 이용 목적이 달성된 후에는
          지체 없이 파기합니다. 이용자가 계정을 삭제할 경우 즉시 삭제합니다.
          법적 의무가 있는 경우 해당 기간 동안 보존합니다 (예: 회계 관련 정보).
        </div>
        <br />
        <div>제 5 조 (개인정보의 제3자 제공)</div>
        <div className={style.text}>
          사용자의 개인정보는 법률에 의한 경우를 제외하고는 제3자에게 제공하지
          않습니다. 서비스 제공을 위해 필요한 경우 (Ozzy 서비스의 AI 분석은
          NAVER CLOUD PLATFORM의 서비스를 활용합니다).
        </div>
        <br />
        <div>제 6 조 (이용자의 권리)</div>
        <div className={style.text}>
          사용자는 언제든지 자신의 개인정보에 대한 열람, 수정, 삭제를 요청할 수
          있습니다. 개인정보 보호 관련 문의는 [연락처 정보]로 연락하여 주시기
          바랍니다.
        </div>
        <br />
        <div>제 7 조 (개인정보의 안전성 확보 조치)</div>
        <div className={style.text}>
          서비스는 개인정보의 안전성을 확보하기 위해 기술적 조치 (암호화,
          방화벽, 접근 통제 등) 및 관리적 조치 (정기적인 보안 점검 및 교육
          실시)를 취하고 있습니다.
        </div>
        <br />
        <div>제 8 조 (쿠키의 사용)</div>
        <div className={style.text}>
          본 앱은 사용자 경험 개선을 위해 쿠키를 사용합니다. 이용자는 쿠키
          수집에 대한 동의를 거부할 수 있으며, 이 경우 서비스 이용에 제한이 있을
          수 있습니다.
        </div>
        <br />
        <div>제 9 조 (개인정보 처리 방침의 변경)</div>
        <div className={style.text}>
          본 방침은 법령 및 서비스의 변경에 따라 수정될 수 있으며, 변경 시
          사전에 공지합니다.
        </div>
        <br />
        추가 안내 사항 <br />본 방침은 2025-01-01부터 시행됩니다. 서비스 관련
        문의는 [문의하기]로 연락해 주시기 바랍니다.
      </div>
    </div>
  );
};

export default TermsDetail2;
