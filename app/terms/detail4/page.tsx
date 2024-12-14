'use client';
import { useRouter } from 'next/navigation';
import style from '../DetailPage.module.css';
import NavigationBar from '@/app/components/NavigationBar/Nav';

const TermsDetail4 = () => {
  var router = useRouter();
  return (
    <div className={style.detailContainer}>
      <NavigationBar />
      <div>
        <h1>[필수] 네이버클라우드 플랫폼 CLOVA Studio 서비스 이용 약관</h1>
        <br />
        <br />
        <div>제 1 조 (목적)</div>
        <div className={style.text}>
          본 약관은 네이버클라우드 주식회사(이하 ‘회사’라 합니다)가 제공하는
          네이버 클라우드 플랫폼 서비스 중 CLOVA Studio 서비스(또는 ‘본
          서비스’라 합니다, 이하 동일)를 이용함에 있어, 회사와 본 서비스를
          이용하고자 하는 고객(네이버 클라우드 플랫폼 서비스 이용약관에 동의한
          회원으로서 본 서비스를 추가적으로 이용하고자 하는 자를 의미합니다,
          이하 ‘고객’이라 합니다) 사이의 권리와 의무 및 기타 필요한 사항을
          규정하는데 그 목적이 있습니다.
        </div>
        <br />
        <div>제 2 조 (용어의 정의)</div>
        <div className={style.text}>
          ① 본 약관에서 사용하는 용어의 정의는 아래 각호와 같습니다.
          <br />
          1. ‘CLOVA Studio’는 AI 의 새로운 패러다임으로, HyperScale 기술로 AI 를
          만들 수 있는 네이버의 AI 브랜드를 의미합니다.
          <br />
          2. ‘Trial’이란 유료 요금제 서비스를 이용하기 전 무상으로 본 서비스를
          체험하는 것을 의미하며, 서비스의 기능, 이용자격 또는 사용기한 등의
          제한이 있을 수 있습니다.
          <br />
          3. 'Studio'란 CLOVA Studio 내 개발도구를 의미합니다.
          <br />
          4. 'Prompt'란 Studio 에서 결과값을 생성하도록 Studio 에 입력해 주는
          값을 의미합니다.
          <br />
          5. '토큰'이란 자연어 처리를 위해 하나의 단어를 세분화한 단어 조각을
          의미합니다.
          <br />
          6. '네이버 AI 윤리 준칙'이란 네이버가 서울대 AI 정책
          이니셔티브(SAPI)와 협업하여 발표한 AI 윤리 원칙을 의미합니다.
          <br />
          7. 'Test App'이란 CLOVA Studio 를 통해 생성된 예시들을 Test 할 수
          있도록 제공하는 API 및 Key 를 의미하며, 사용에 일부 제약이 있을 수
          있습니다.
          <br />
          8. 'Service App'란 CLOVA Studio 를 통해 생성된 예시들을 실제 서비스에
          적용할 수 있도록 APP 심사를 통해 제공되는 API 및 Key 를 의미하며,
          사용에 일부 제약이 있을 수 있습니다.
          <br />
          9. 'APP 심사'란 실 서비스에 적용하기 위해 APP 의 이용 목적 등을
          확인하고 심사하는 과정을 의미합니다.
          <br />
          10. ‘고객 데이터’란 고객 또는 이용자가 본 서비스를 이용하는 과정에서
          입력하는 데이터(로그 등 정보를 포함합니다)를 의미합니다.
          <br />
          11. ‘결과물’이란 고객이 ‘고객 데이터’를 입력해 본 서비스를 통해 생성,
          산출한 결과물 및 이와 관련된 자료 일체를 의미합니다.
          <br />
          12. ‘이용자’ 란 고객이 제공하는 서비스 또는 상품을 통하여 본 서비스를
          최종적으로 이용하는 자를 의미합니다.
          <br />
          ② 본 약관에서 별도로 정의하지 않은 용어는 네이버 클라우드 플랫폼
          서비스 이용약관에서 정한 바에 따릅니다.
          <br />
        </div>
        <br />
        <div>제 3 조 (본 서비스 이용 계약의 체결 및 효력)</div>
        <div className={style.text}>
          ① 본 서비스에 대한 이용계약은 고객이 본 약관에 동의하고 이용신청을 한
          후 회사가 이에 대해 승낙함으로써 성립합니다.
          <br />
          ② 회사는 다음 각 호에 해당하는 이용 신청에 대하여는 승낙을 하지 않을
          수 있습니다.
          <br />
          1. 회사로부터 본 서비스 구매 금지 조치 등을 받은 회원이 그 조치 기간
          중에 재 구매 신청을 하는 경우
          <br />
          2. 회사가 운영하는 서비스의 원활한 진행을 방해하는 행위를 하거나
          시도한 경우, 혹은 이러한 행위가 예상되는 경우
          <br />
          3. 회사가 본 서비스를 제공하는 경우 고객이 본 서비스 및 본 서비스를
          구성하는 내용에 포함된 아이디어, 노하우, 지식재산, 기술 등을 파악하게
          되어 회사 등의 지식재산, 영업비밀 등이 침해될 우려가 있는 경우 등
          회사가 해당 고객에 대한 본 서비스 제공이 적절하지 않다고 판단하는 경우
          <br />
          ③ 본 약관에서 정하지 않은 사항은 네이버 클라우드 플랫폼 서비스
          이용약관, 관계법령, 상관례 및 홈페이지에 명시된 서비스 별 설명 내용이
          적용됩니다.
          <br />
        </div>{' '}
        <br />
        <div>제 4 조 (본 서비스의 제공)</div>
        <div className={style.text}>
          ① 회사는 고객이 본 서비스를 활용해 고객 또는 이용자가 AI 기술 기반으로
          문장을 작문할 수 있는 기능을 제공합니다.
          <br />
          ② 회사는 본 서비스의 제공, 운영, 관리, 오류 검증 등 본 서비스의
          정상적인 운영을 위해 필요한 업무에 한하여 ‘고객 데이터’ 및 ‘결과물’에
          접근해서 업무 처리를 할 수 있습니다 (명확히 하면, 관련 로그 수집을
          포함합니다). 본 서비스의 정상적인 운영을 위해 필요한 업무에는 서비스
          성능 개선, 이용 기록과 접속 빈도 분석, 통계 업무가 포함되며 이에
          한정되지 않습니다. 또한, 회사는 회사 및 본 서비스의 홍보 목적으로
          ‘고객 데이터’ 및 ‘결과물’을 사용할 수 있습니다. 회사는 위 목적 외에
          ‘고객 데이터’ 및 ‘결과물’을 이용하거나 개인정보를 처리할 필요가 있는
          경우에는 고객으로부터 별도 동의를 받습니다.
          <br />
          ③ 회사가 제공하는 Studio 내 각 개발도구나 모델은 AI 학습량, 학습정도
          등에 따라 그 세부 사양과 지원 환경이 변동되거나 개발도구나 모델 간
          차이가 발생할 수 있습니다. 이 경우 회사는 고객에게 사전 통지 후 해당
          개발도구나 모델의 지원을 종료하고 다른 개발도구나 모델로 서비스를
          제공할 수 있고, 개발도구나 모델에 따라서는 추가 비용이 발생할 수
          있습니다.
          <br />
          ④ 회사는 고객이 본 서비스를 정상적으로 이용할 수 있도록 본 서비스의
          기술을 제공하는 네이버 주식회사에 첨부 1.의 데이터를 제공할 수
          있습니다.
          <br />
        </div>
        <br />
        <div>제 5 조 (준수사항 및 보증)</div>
        <div className={style.text}>
          ① 고객은 본 서비스를 이용함에 있어서 본 약관 및 네이버 클라우드 플랫폼
          서비스 이용약관, 관계 법령 및 홈페이지에 게시되는 이용조건, 네이버 AI
          윤리 준칙 및 세부 윤리 가이드 등을 준수하여야 합니다. 고객이 이를
          지키지 않아 발생하는 일체의 문제(정부 기관, 권리자 등으로부터의 소송,
          수사 제기 등 일체의 민형사상의 권리침해 및 법 위반 주장 등을
          포함합니다)에 대해서는 자신의 비용과 노력으로 회사를 면책하고, 회사가
          이로 인해 손해를 입게 된 경우 그 모든 손해를 배상하여야 합니다. 다만,
          손해의 발생이 회사의 귀책사유로 인한 경우에는 그러하지 아니 합니다.{' '}
          <br />
          ② 고객은 본 서비스를 이용함에 있어서 관련 법령 상 이용자로부터 동의를
          받아야 하는 항목이 있는 경우 고객이 이용자로부터 적법한 동의를 수령할
          것임을 보증합니다. 고객은 회사가 요청하는 경우 위 동의 수령 사실을
          증명해야 합니다. 회사는 고객의 위탁을 받아 본 서비스를 고객에게
          제공하는 지위에 있을 뿐이므로 고객이 이용자로부터 적법한 동의를
          수령하지 못함으로 인해 발생하는 모든 이슈에 대해서는 고객에게 그
          책임이 있습니다. <br />
          ③ 고객이 전문에서 정한 사항을 지키지 않아 회사에게 어떤 손해나 분쟁이
          발생한 경우, 고객은 회사 등이 입은 모든 손해 및 분쟁 해결을 위해
          지출한 모든 비용을 배상하여야 하고, 나아가 이용자로부터 자신의 책임과
          비용으로 회사 등을 면책하여야 합니다. <br />④ 회사는 고객이 본 조의
          준수 사항을 따르고 있는지 여부를 확인하기 위하여, 필요한 정보나
          증빙서류 등을 제공할 것을 고객에게 객관적으로 합리적인 수준에서 요청할
          수 있으며, 고객은 이에 응하여야 합니다. <br />
          ⑤ 회사는 고객이 본 조를 위반한 것을 확인하거나 위반에 대한 신고가
          접수될 경우 회사는 제 9 조에 따른 제한조치 또는 네이버 클라우드 플랫폼
          서비스 이용약관에 의한 조치를 취할 수 있습니다. <br />
        </div>
        <br />
        <div>제 6 조 (데이터 백업)</div>
        <div className={style.text}>
          ① 고객은 본 서비스 이용기간 동안 회사 서버에 저장된 서비스 관련
          데이터를 서비스 계약 해지 이전에 언제든지 백업할 수 있습니다. 회사는
          서비스 계약 해지 이후 서비스 관련 데이터를 삭제할 수 있으며, 고객이
          사전에 서비스 관련 데이터를 백업하지 않아 발생한 손해에 대하여 책임을
          지지 않습니다.
          <br />
          ② 고객이 Trial 요금제를 사용하는 경우, 고객은 Trial 요금제 사용기한 3
          개월 동안(이하 ‘사용기한’)에만 본 서비스를 이용할 수 있으며 ‘사용기한’
          종료 후 30 일의 유료 요금제 전환 기간(이하 ‘유료 전환 기간’) 중에는 본
          서비스를 이용할 수 없고 오로지 유료 요금제로의 전환 여부만을 선택할 수
          있습니다. 고객이 ‘사용기한’ 또는 ‘유료 전환 기간’ 내에 유료 요금제
          상품으로 전환하지 않을 경우 본 서비스와 관련해 저장된 고객의 서비스
          관련 데이터는 ‘유료 전환 기간’ 만료일까지 고객 스스로 데이터 백업을
          하지 않으면 ‘유료 전환 기간’ 종료 시 데이터는 삭제될 수 있습니다.
          <br />
        </div>
        <br />
        <div>제 7 조 (해지 및 종료 시 처리)</div>
        <div className={style.text}>
          ① 본 서비스 계약이 종료하거나 회사가 본 서비스 제공을 종료하는 경우,
          회사는 CLOVA Studio 서비스에 업로드된 고객의 CLOVA Studio 모델, 위
          모델을 설정하여 산출된 ‘결과물’(제시된 주제 및 문장 작문 결과 등
          부속물을 포함합니다) 및 법령에서 보관의무를 부여하지 않은 데이터 등을
          삭제할 수 있습니다.
          <br />
          ② 전항에도 불구하고 회사는 다음 각호의 경우 고객이 기간만료, 해지
          등으로 본 서비스 이용을 종료한 때로부터 1 년 간 ‘고객 데이터’ 및
          ‘결과물’ 등 본 서비스와 관련된 모든 정보와 자료를 보관∙이용할 수
          있습니다.
          <br />
          1. 본 서비스의 건전하고 정상적인 운영을 위한 목적으로 고객이 제 9 조
          제 1 항 각호(제 1 호를 제외함) 및 제 2 항 각호의 경우에 해당하는지
          여부에 대한 확인 및 증명이 필요할 수 있는 경우
          <br />
          2. 본 서비스의 활용례 및 샘플 제공 등에 제공할 목적으로 필요한 경우
          (단, 개인정보가 포함되지 않은 경우에 한합니다)
          <br />
        </div>
        <br />
        <div>제 8 조 (권리의 귀속)</div>
        <div className={style.text}>
          본 서비스 제공을 위해 회사가 고객에게 어떠한 프로그램, 디자인, 상표
          등의 지식재산권을 제공한바 있다면, 이는 본 서비스의 제공에 필요한 목적
          범위 내에서 제한된 사용권을 부여한 것일 뿐 그 어떠한 경우에도 이와
          같은 제한된 사용권을 넘는 그 이상의 권리를 부여하는 것을 의미하지
          않습니다.
        </div>
        <br />
        <div>제 9 조 (제한조치)</div>
        <div className={style.text}>
          ① 회사는 다음 각 호의 경우, 해당 고객에 대해서 본 서비스의 제공을
          중단할 수 있습니다. <br />
          1. 국가비상사태, 정전 및 이에 준하는 상황이 발생한 경우 <br />
          2. 고객(본조에서 ‘이용자’를 포함합니다)이 본 서비스를 이용함에 있어서
          본 약관, 네이버 클라우드 플랫폼 서비스 이용약관 또는 관련
          법령(정보통신망법, 개인정보보호법, 저작권법 등을 포함한다)을 위반한
          경우 <br />
          3. 고객이 본 서비스를 이용함에 있어서 저작권 등 제 3 자의 권리를
          침해한 경우 <br />
          4. 고객이 본 서비스를 이용함에 있어서 건전한 사회질서를 위반하거나
          미풍양속, 공공질서에 반하는 행위를 하는 경우 <br />
          5. 고객이 회사의 시스템, 서버 등에 과부하를 발생시키거나, 자동화
          프로그램 등을 통해 기계적인 접근을 하거나, 침입 또는 침입을 시도하는
          등 회사의 시스템 및 서버에 부당하게 접근하거나 그러한 시도를 하는 경우{' '}
          <br />
          6. 고객이 본 서비스 이용 과정에서 도출한 ‘결과물’이 법령을 위반하거나
          건전한 사회질서, 미풍양속, 공공질서, 윤리기준 상 적절하지 않은 경우{' '}
          <br />
          7. 이용자가 회사가 명확히 공지한 운영정책, 공지사항을 위반하는 경우{' '}
          <br />
          8. 시스템의 점검 또는 증설, 교체, 새로운 서비스 적용 등을 위해 필요한
          경우 <br />
          9. 네이버 AI 윤리 준칙 및 세부 윤리 가이드를 위반하는 내용 등이 확인된
          경우 <br />
          ② 회사는 다음 각 호의 경우, 해당 고객에 대해서 심사가 완료된
          APP(API)의 사용을 중단할 수 있습니다. <br />
          1. 고객이 APP 심사 시 제출한 이용목적과 다르게 본 서비스를 사용하는
          경우 <br />
          2. 고객이 회사가 가이드한 방법을 벗어나서 본 서비스를 사용하는 경우{' '}
          <br />
          3. 회사가 제공하는 개발도구나 모델에 결함이 발견되거나 본 서비스에
          점검이 필요한 경우 <br />
          ③ 회사는 제 1 항, 제 2 항 각 호의 경우 및 회사가 본 서비스 운영에
          필요하다고 합리적으로 판단하는 경우 고객에게 ‘결과물’을 삭제 및 회수할
          것을 요청할 수 있고 고객은 회사의 위 요청이 있는 경우 ‘고객’이
          보관하는 ‘결과물’을 삭제하고 ‘이용자’로부터 ‘결과물’을 회수하여
          삭제해야 할 의무를 부담합니다. <br />
        </div>
        <br />
        <div>제 10 조 (권리 및 의무 등)</div>
        <div className={style.text}>
          ① 회사는 본 서비스와 관련된 모든 정보 및 자료(‘결과물’을 포함합니다)를
          회사의 홍보 목적, 서비스의 품질 및 기능 개선을 위한 목적으로 사용할 수
          있습니다.
          <br />
          ② 고객은 고객이 입력하는 ‘고객 데이터’에 다음 사항이 포함되지 않도록
          해야 합니다. 회사는 고객이 다음 사항이 포함된 ‘고객 데이터’를
          입력함으로 인해 발생할 수 있는 불법, 부당한 상황을 예방하기 위한
          목적으로 ‘고객 데이터’를 모니터링할 수 있으며, 모니터링 결과 다음
          사항이 포함되거나 불법, 부당한 상황이 확인된 경우에는 ‘고객 데이터’의
          삭제 및 고객의 서비스 이용을 중단하는 조치를 할 수 있습니다. ‘고객
          데이터’에 포함되지 않아야 하는 사항
          <br />
          - 개인정보
          <br />
          - 저작권자의 허락이 없는 저작물
          <br />
          - 타인의 명예를 훼손하는 사항 또는 제 3 자의 권리를 침해하는 사항
          <br />
          - 타인의 비밀 또는 영업기밀에 관한 사항
          <br />
          - 범죄를 교사, 방조하거나 법령을 위반하는 사항
          <br />
          - 네이버 AI 윤리 준칙 및 세부 윤리 가이드 등 회사가 제공하는 서비스
          정책 또는 가이드에 위반하는 사항
          <br />
          - 사회통념 및 건전한 상식에 위반되는 사항
          <br />
          ③ 고객은 본 서비스를 이용하면서 생성된 산출물 등 결과물에 전항의
          사항이 포함되지 않도록 해야 합니다. 또한 고객은 산출물 등 결과물에
          전항의 사항이 포함되거나 이와 관련하여 사회적 이슈 제기, 법적 분쟁의
          발생 등의 경우에는 지체없이 회사에 해당 사실을 통지해야 하고, 회사를
          면책해야 합니다.
          <br />
          ④ 고객은 스스로 본 서비스의 결과물을 이용해 본 서비스에서 허용하는
          범위 밖에서 언어모델의 학습 또는 개발하거나 제 3 자에게 본 서비스의
          결과물을 제공하여 제 3 자가 언어모델의 학습 또는 개발할 수 있게 해서는
          안 됩니다.
          <br />
          ⑤ 회사는 본 서비스의 적법, 건전한 운영을 위해 산출물 등 결과물 및 외부
          송출 내역을 모니터링할 수 있으며, 모니터링 결과 위 사항이 포함되거나
          불법, 부당한 상황이 확인된 경우에는 산출물 등 결과물의 삭제 및 고객의
          서비스 이용을 중단하는 등의 조치를 할 수 있습니다.
          <br />
          <br />
        </div>
        <div>제 11 조 (이용자의 개인정보 등)</div>
        <div className={style.text}>
          ① 고객은 본 서비스를 이용하기 위하여 또는 본 서비스를 이용자에게
          제공하기 위하여 필요한 경우 고객 자신이 보유, 관리하고 있는 이용자에
          대한 개인정보를 회사에게 제공하거나 이용자의 개인정보에 대한 처리
          업무를 회사에게 위탁하여야 합니다. 따라서, 고객은 본 서비스를 이용하기
          앞서 사전에 개인정보보호법 등 관련 법령을 살펴, 필요하다면 회사와
          개인정보 위수탁계약을 체결하거나 이용자로부터 개인정보의 제 3 자
          제공에 관한 동의를 얻어야 합니다. <br />
          ② 고객이 제 1 항의 사항을 위반하여 고객 또는 이용자에게 본 서비스
          이용에 제한이 발생하는 것에 대해 회사는 책임을 부담하지 않으며, 이로
          인해 회사에게 손해가 발생한 경우 고객은 회사가 입은 모든 손해를
          배상하여야 합니다. <br />
        </div>
        <br />
        <div>제 12 조 (책임 면제 특약)</div>
        <div className={style.text}>
          ① 회사는 고객 또는 이용자의 귀책 사유로 인한 본 서비스의 이용 장애에
          대해 책임을 지지 않습니다.
          <br />② 본 서비스는 생성되는 문장이 이용자의 사용환경, 이용자의
          부정사용 또는 오사용 등 제반상황의 영향을 받을 수 있으므로, 회사는
          문장의 완전성, 정확성, 적절성, 타당성 및 신뢰성 등을 보증하지
          않습니다. 고객이 본 서비스를 이용하는 과정에서 생성되는 문장은 AI 에
          의해 임의로 만들어지므로, 회사는 해당 문장의 적법성 또는 적합성에
          대해서 보증하지 않고 이에 따른 책임을 부담하지 않습니다. 또한,
          회사는고객 또는 이용자의 본 서비스 이용 과정에서 생성한 문장으로 인해
          야기되는 법률적, 윤리적, 사회적, 정치적 영향에 대해서 책임이 없습니다.
        </div>
        <br />
        <div>부칙 본 약관은 2024 년 2 월 13 일부터 적용됩니다.</div>
      </div>
    </div>
  );
};

export default TermsDetail4;