export const projectDetails = [
  {
    title: "모두의 텃밭",
    description:
      "전국의 텃밭을 조회, 등록하고, 분양하는 웹 서비스입니다. 커뮤니티, 지도, 채팅 기능이 포함되어있습니다.",
    logoSrc: "/images/logos/everyone_s_garden.png",
    imgSrc: "/images/projects/everyone_s_garden.png",
    gitHub: "https://github.com/Devinix00/everyone-s-garden-front",
    siteUrl: "https://www.everyones-garden.com/",
    techStacks: [
      "React",
      "Typescript",
      "Chakra UI",
      "Axios",
      "React-Query",
      "Zustand",
    ],
    myContributions: [
      "카카오, 네이버 소셜 로그인",
      "지역 검색 (네이버 지도 위치 이동)",
      "네이버 지도 기반 내 위치 (geolocation)",
      "위도와 경도를 조작하여 텃밭 조회 (마커 클러스터링 적용)",
      "사이드 바 텃밭 무한 스크롤 조회",
      "텃밭 신고, 찜하기, 신청하기",
    ],
    myContributionsDetails: [
      "리다이렉트 페이지의 쿼리스트링에 포함된 토큰 값을 백엔드 서버로 전송합니다. 백엔드 서버는 응답으로 access token을 응답 body에, refresh token을 http only 쿠키에 저장하여 반환합니다. access token의 만료기간이 10분이기 때문에 애플리케이션의 진입점에서 setInterval을 사용하여 9분마다 토큰 갱신 요청을 보냈습니다. 또한, 페이지가 새로고침되거나 시간이 지난 뒤에 다시 접속했을 때도 로그인 상태가 유지되도록 하기 위해 Zustand-Persist를 사용하여 로그인 전역 상태를 관리했습니다. 로그인 상태가 true일 경우 자동으로 토큰 갱신 요청을 보내어 자동 로그인을 구현하였습니다.",
      "지도 페이지에서 사용자가 지역을 검색하여 해당 지역의 텃밭 정보를 쉽게 조회할 수 있도록 지역 검색 기능을 구현했습니다. input의 value가 변경될 때마다 요청을 보내는 대신, 과도한 요청을 방지하기 위해 debounce 기법을 적용했습니다.",
      "유저가 지도 페이지에 진입할 때 geolocation을 통해 가져온 유저의 위도, 경도를 기반으로 네이버 지도를 렌더링합니다. 또한, 현재 사용자의 위치 정보를 마커로 표시합니다.",
      "지도의 위치가 바뀔때마다 지도의 가장자리 네 부분의 위도, 경도를 쿼리스트링에 포함시켜 서버에 요청을 보내 지도에서 보이는 영역의 텃밭 데이터를 받습니다. 이 텃밭 데이터는 MarkerClustering 객체를 이용하여 마커 클러스터링을 적용하였습니다.",
      "지도의 가장자리 위도와 경도를 통해 조회하는 텃밭들을 사이드바에서 무한 스크롤의 형태로 구현하였습니다. 이를 위해 React-Query의 useInfiniteQuery를 활용하였습니다.",
      "React-Query의 useMutation 훅을 이용해 로딩 스피너를 처리하였습니다. 신청하기와 같은 경우에는 별 다른 서버의 요청 없이 href='tel:'을 이용하여 모바일 환경에서 텃밭을 등록한 유저의 번호로 전화를 걸 수 있게 구현하였으며, 채팅하기 버튼을 누르면 채팅방으로 이동하게 됩니다.",
    ],
    troubleShootings: [
      {
        title: "framer-motion과 transform 중앙 정렬",
        problem:
          "left와 transform을 Chakra UI 컴포넌트의 props로 전달하여 좌우 중앙정렬 하고 있었으나, framer-motion의 애니메이션을 추가하고 난 후 컴포넌트의 위치가 올바르게 조정되지 않는 이슈가 발생했다.",
        cause:
          "framer-motion을 사용할 때 x와 y 속성으로 애니메이션을 설정하면, 내부적으로 transform: translateX()와 transform: translateY()가 적용되는 것이 원인이었다. 이 경우, 기존의 CSS transform: translateX(-50%)와 충돌하여 CopyBox의 중앙 정렬이 제대로 이루어지지 않았던 것이다.",
        solution:
          "애니메이션 초기(initial)에 x:'50%'을 명시적으로 추가해서 transform 속성이 올바르게 적용되도록 조정하니 다시 중앙 정렬이 된 모습을 볼 수 있었다.",
        link: "https://velog.io/@dpldpl/framer-motion과-transform-중앙-정렬-문제-해결#해결-과정",
      },
      {
        title: "React 이벤트 처리 순서",
        problem:
          "사용자가 지도상의 지역을 선택하는 UI 컴포넌트를 클릭했을 때 지도 이동이나 지역 정보 업데이트가 예상대로 진행되지 않는 문제가 발생했다. 로깅 콘솔 자체도 출력이 되지 않았던 것으로 보았을 때, handleClickList 함수가 호출되지 않은 것으로 추정되었다.",
        cause:
          "이 문제의 원인은 SearchRegionsListText 컴포넌트(혹은 Input 외부)가 클릭될 때 Input 컴포넌트의 focus가 해제되어 onBlur 이벤트가 발생하고 isInputFocused 상태가 false로 업데이트 되면서 SearchRegionsList가 언마운트되었기 때문이다. 결과적으로 SearchRegionsListText 내부의 handleClickList 함수가 호출되지 못했다.",
        solution:
          "이 문제를 해결하기 위해 (setIsInputFocused(false))를 250밀리초 지연시키는 방법을 적용했다. 이 지연은 onClick 이벤트가 처리될 충분한 시간을 제공하여, 사용자의 클릭 동작이 완전히 처리된 후 focus 상실이 이루어지도록 보장했다.",
        link: "https://velog.io/@dpldpl/React-이벤트-처리-순서와-비동기적-상태-업데이트-문제-해결",
      },
      {
        title: "리액트 컴포넌트의 리렌더링과 state",
        problem:
          "리액트 컴포넌트에서 garden?.gardenLikeId를 기반으로 isGardenLiked 상태가 계산되며, 이는 사용자가 정원을 '좋아요' 했는지 여부를 나타내고 있는 상황이다. 이 값에 따라 '찜하기' 버튼의 상태가 변경되어야 하는데, liked라는 내부 상태가 초기에 한 번 설정된 후 자동으로 업데이트되지 않아 isGardenLiked와 liked의 값이 일치하지 않는 문제가 발생했다.",
        cause:
          "이 문제의 원인은 리액트 상태 관리의 특성에서 기인하였다. 리액트에서는 상태가 변경되면 해당 상태에 의존하는 컴포넌트의 리렌더링이 트리거된다. 그러나, 상태 초기화는 컴포넌트가 마운트될 때 단 한 번만 발생하며, 이후에는 상태 업데이트 함수를 호출하지 않는 한 기존 상태가 유지된다. useState로 선언된 liked 상태는 외부에서 gardenLikeId가 변경되어도 자동으로 업데이트되지 않기 때문에, isGardenLiked의 변경이 liked에 반영되지 않는 것이었다.",
        solution:
          "이 문제를 해결하기 위해 useEffect를 사용하여 gardenLikeId의 변경을 감지하고, 이에 따라 liked 상태를 업데이트하는 방법을 구현했다. useEffect 내에서 gardenLikeId를 의존성 배열로 설정하여, 해당 값이 변경될 때마다 liked 상태를 적절히 업데이트하도록 했다.",
        link: "https://velog.io/@dpldpl/리액트-컴포넌트의-리렌더링과-state-문제-해결",
      },
    ],
  },
  {
    title: "오늘의 운세",
    description:
      "유저의 생년월일, MBTI를 이용해 운세를 제공하는 모바일 앱입니다. ChatGPT API를 이용하여 유저의 운세 데이터를 받아오며, 유저들에게 오늘의 한마디를 푸시 메세지로 제공합니다.",
    logoSrc: "/images/logos/today_s_horoscope.png",
    imgSrc: "/images/projects/today_s_horoscope.png",
    gitHub: "https://github.com/Devinix00/today-s-horoscope",
    googlePlayStoreURl:
      "https://play.google.com/store/apps/details?id=com.exodus.fortune",
    siteUrl: "",
    techStacks: [
      "Turborepo",
      "React-Native (expo)",
      "Firebase Cloud Messaging (FCM)",
      "React",
      "Next.Js (App router) (admin)",
      "Typescript",
      "Tailwind CSS (admin)",
      "SCSS",
      "React-Query",
      "Zustand",
    ],
    myContributions: [
      "Turborepo를 이용하여 모노레포 구성",
      "React-Native Webview 구성",
      "Android 물리적 뒤로가기 구현",
      "푸시 메세지 구현",
      "어드민 페이지 개발",
    ],
    myContributionsDetails: [
      "웹뷰로 구성되는 애플리케이션의 특성을 고려하여, 기존의 멀티 레포 형식 대신 하나의 레포지토리에서 여러 프로젝트를 관리하는 것이 더 효율적이라고 판단하였습니다. 이를 위해 Vercel의 Turborepo를 사용하여 모노레포를 구성하였습니다.",
      "react-native-webview 라이브러리를 사용하여 웹뷰 애플리케이션을 구성하였습니다. 네트워크 연결이 없는 환경에서도 대응할 수 있도록 @react-native-community/netinfo 라이브러리를 활용하였습니다.",
      "웹뷰 애플리케이션은 안드로이드 환경에서 물리적 뒤로가기 버튼이 작동하지 않기 때문에 이에 대한 대응이 필요했습니다. 뒤로가기 함수를 정의하고, useEffect를 이용하여 물리적 뒤로가기 이벤트에 등록하였습니다. 웹뷰 내비게이션 상태 변경 시 호출되는 핸들러(url 갱신 함수)를 정의하여 Webview 컴포넌트의 onNavigationStateChange props로 전달하였고, 메인 화면에서는 뒤로가기 버튼을 눌렀을 때 토스트를 띄우고, 2초 내로 한 번 더 누를 시 애플리케이션을 종료하는 로직을 구현하였습니다.",
      "Firebase Cloud Messaging(FCM)과 @react-native-firebase/messaging 라이브러리를 사용하여 푸시 메시지를 구현하였습니다. 파이어베이스 콘솔에서 푸시 메시지를 보내는 대신, DB에 저장된 '오늘의 한마디'를 푸시 메시지로 받아야 했기 때문에, 디바이스 토큰을 서버로 전송하는 API 통신을 추가로 구현하였습니다.",
      "오늘의 운세 애플리케이션은 ChatGPT API를 통해 운세 데이터를 받아옵니다. 이를 위해 어드민 페이지가 필요하였습니다. 어드민페이지에서는 프롬프트를 관리하고 프롬프트 히스토리를 조회할 수 있으며, 푸시 메시지의 발송 기간을 설정하고, 특정 일자나 기간 동안의 운세 데이터를 한 번에 생성할 수 있습니다. 또한 프롬프트를 통해 미리 생성된 콘텐츠는 날짜별 페이지네이션 형식으로 구현되어있어 손쉽게 조회, 관리 및 수정이 가능합니다.",
    ],
    troubleShootings: [
      {
        title: "NPM 의존성 문제 해결: @rollup/rollup-linux-x64-gnu",
        problem:
          "vercel에서 React로 만든 웹을 배포하려고 했는데, 빌드 에러가 발생했다. 번들러로 사용되는 Rollup 관련 패키지가 제대로 설치되지 않았다고 한다. 특히, @rollup/rollup-linux-x64-gnu에 관련된 에러가 발생하고 있었다. 로컬환경에서 빌드시에는 아무런 문제가 없이 성공했는데, vercel에서 빌드할때에는 에러가 계속되었다.",
        cause:
          "이 문제의 근본 원인은 npm의 의존성 관리 방식에 있었다. npm은 프로젝트의 package.json 파일에 명시된 의존성을 기반으로 패키지를 설치하지만, 때로는 특정 플랫폼 또는 아키텍처에 최적화된 패키지가 선택적 의존성으로 관리되어 자동 설치되지 않는 경우가 있다고 한다. 이 경우, 해당 환경에서만 필요로 하는 특수 패키지(@rollup/rollup-linux-x64-gnu 같은)가 설치 과정에서 누락되었던 것이 원인이었던 것 같다.",
        solution:
          "문제를 해결하기 위해 루트 디렉토리에 존재하는 package.json파일의 scripts에 postinstall 설정을 추가했다. postinstall는 npm install이 완료된 후 자동으로 실행되는 스크립트로, 필요한 추가 작업을 수행할 수 있다고 한다. 여기서는 Rollup과 그 플러그인들을 설치하는 명령을 추가했다. 이를 통해 모든 필수 패키지가 설치되도록 보장했다.",
        link: "https://velog.io/@dpldpl/NPM-의존성-문제-해결-rolluprollup-linux-x64-gnu-이슈-문제-해결",
      },
      {
        title:
          "React Native Webview: URL 상태 관리를 통한 안드로이드 뒤로 가기 동기화",
        problem:
          "내부 웹 페이지의 뒤로 가기 UI와 Android의 하드웨어 뒤로 가기 버튼 간의 상태 불일치 문제가 발생했다. 사용자가 웹뷰 내부의 뒤로 가기 버튼을 통해 페이지를 변경한 후 Android의 뒤로 가기 버튼을 누르면, 예상과 달리 이전 페이지로 이동하지 않고 웹뷰 내의 최초 페이지로 이동해야 하는 상황에서도 이전 페이지로 돌아가 버리는 문제가 발생했다.",
        cause:
          "이 문제의 주요 원인은 Android 시스템의 뒤로 가기 버튼이 WebView의 네비게이션 상태 변화를 인식하지 못하여 WebView 내부에서 발생한 네비게이션 이벤트를 외부 Android 뒤로 가기 동작과 동기화하지 못했기 때문이다. 결과적으로, WebView의 canGoBack() 상태와 실제 웹 페이지의 위치가 일치하지 않는 상황이 발생한 것이다.",
        solution:
          "문제를 해결하기 위해 먼저 WebView 컴포넌트의 onNavigationStateChange 이벤트를 활용하여 현재 URL을 상태로 저장하고 관리하는 방법을 적용했다. 이를 통해 WebView에서 발생하는 모든 페이지 변경을 실시간으로 추적할 수 있게 되었다. 또한, WebView의 현재 URL 상태를 기반으로 하드웨어 뒤로 가기 버튼의 동작을 조건적으로 처리하여, 사용자가 최상위 페이지에 있을 때만 앱을 종료하거나 추가적인 토스트를 표시하도록 로직을 구현했다.",
        link: "https://velog.io/@dpldpl/React-Native-Webview-URL-상태-관리를-통한-안드로이드-뒤로-가기-동기화",
      },
      {
        title:
          "React-Native (expo) firebase fcm 푸시 메세지 디바이스에서 나오지 않는 이슈 해결",
        problem:
          "파이어베이스 콘솔에서 메세지를 보낼때 안드로이드 에뮬레이터에서는 푸시메세지가 잘 작동하였는데, apk 파일로 빌드해서 실제 디바이스에서 테스트 해보니 푸시메세지가 오지 않는 이슈가 발생했다. SHA-1, SHA-256과 같은 인증서 지문의 문제일까 싶어서 파이어베이스와 expo.dev에서 값들을 확인해 봤는데 정확히 일치되어있어서 원인을 파악하기가 힘들었다.",
        cause:
          "원인을 파악하기 위해 expo-dev-client를 도입하여 재 빌드를 해보니 이전에는 확인할 수 없는 빌드 에러가 발생하였고, 이를 해석해보니 google-services.json 파일이 누락되었다고 하였다. EAS 빌드는 깃에서 추적하는 파일만 업로드한다고 한다. gitignore 파일에 google-services.json 파일을 추가한 것이 원인이었다.",
        solution:
          "google-services.json 파일을 gitignore에서 google-services.json을 주석처리하니 빌드에 성공했고, 푸시 메세지도 잘 작동하였다.",
        link: "https://velog.io/@dpldpl/React-Native-expo-firebase-fcm-푸시-메세지-디바이스에서-나오지-않는-이슈-해결-문제-해결",
      },
    ],
  },
  {
    title: "휘뚜루 마뚜루",
    description:
      "시계와 명품에 관련된 커뮤니티 서비스입니다. 외주 개발 프리랜서 형식으로 기능 구현, 버그 해결 및 유지보수와 서비스 확장 개발을 하고 있습니다.",
    logoSrc: "/images/logos/hituru.png",
    imgSrc: "/images/projects/hituru.png",
    siteUrl: "https://www.hituru.com",
    techStacks: [
      "Next.Js",
      "React-Native (expo)",
      "Typescript",
      "shadcn/ui",
      "Tailwind CSS",
      "Axios",
      "React-Query",
      "Zustand",
    ],
    myContributions: [
      "React-Native Webview 구성",
      "댓글, 대댓글 기능 구현",
      "회원가입",
      "팔로워, 팔로잉 페이지 개발",
      "비밀번호 변경",
      "사용자 시계 커스텀",
      "백화점 판매가 변동추이(차트) 구현",
    ],
    myContributionsDetails: [
      "React-Native와 react-native-webview 라이브러리를 이용하여 웹뷰 앱을 구현하였습니다. 안드로이드 기기의 물리적 뒤로가기 버튼의 대응과, 네트워크가 없는 상황에서 대체 ui를 보여주기 위하여 @react-native-community/netinfo 라이브러리를 활용하였습니다.",
      "게시판의 댓글과 답글 기능을 구현했습니다. 특히 답글이 여러 단계로 중첩될 경우, 백엔드 서버에서 받아오는 댓글 리스트 데이터가 계층적으로 쌓이게 됩니다. 이를 효율적으로 처리하기 위해, 재귀 함수를 활용해 댓글 컴포넌트를 구현했습니다.",
      "소셜 로그인을 사용하지 않는 이용자들을 위한 회원가입 기능을 구현하였습니다. 비밀번호의 유효성 검사에는 zod 라이브러리를 활용하여 특수 문자와 대소문자 등의 조건을 충족하도록 하였고, SMS 인증 기능도 구현하였습니다. 또한, 이메일과 닉네임의 중복 여부를 확인하는 예외처리를 하였습니다.",
      "유저의 팔로워, 팔로잉 목록을 조회할 수 있는 페이지를 개발하였습니다. 동적 라우팅을 통해 모든 유저의 팔로워, 팔로우 목록을 조회할 수 있으며 이 페이지에서 언팔로우, 팔로잉을 할 경우 UX 개선을 위한 optimistic update를 적용하였습니다.",
      "비밀번호를 잊은 유저들을 위한 비밀번호 변경 기능을 구현하였습니다. 유저는 SMS 혹은 가입된 Email로 인증번호를 받아 인증에 성공한 뒤, 유저는 비밀번호를 수정할 수 있습니다.",
      "유저가 원하는 디자인의 시계를 커스텀하는 기능을 구현하였습니다. 재질, 베젤, 브레이슬릿, 다이얼 등을 자유자재로 조합하여 자신만의 시계를 커스텀하고 다운받을 수 있습니다. 이 작업에는 canvas API를 활용했습니다.",
      "shadcn/ui 라이브러리를 이용하여 제품에 관련된 기간별 백화점 판매가를 차트 그래프 형식으로 구현하였습니다.",
    ],
    troubleShootings: [
      {
        title: "React Native(expo) 빌드 실패 문제 해결: Node.js 버전 충돌",
        problem:
          "React Native(expo)로 웹뷰 패키징을 하던 도중, 안드로이드 에뮬레이터를 실행시키려고 하니 빌드 에러가 발생했다. React-Native(expo) Node.js 18 버전 이상을 요구하는데, 나는 현재 16버전 사용중이라는 에러 로그를 발견할 수 있었다.",
        cause:
          "node -v 명령어를 입력하여 확인해본 결과, 나는 20 버전의 Node.js를 사용하고 있었다. 하지만 빌드 에러는 동일하게 계속 발생하였기 때문에 원인을 찾기 힘들었다. 보다 구체적인 원인을 찾기 위해 nvm ls 명령어를 입력해 보니, 현재 사용중인 20 버전 이외의 16 버전 Node.js가 시스템에 설치되어있었던 것을 발견할 수 있었다.",
        solution:
          "nvm uninstall 16.20.2(문제를 일으킨 버전) 명령어로 이전의 Node.js 버전을 삭제하고, Gradle의 빌드 캐시를 정리해주니 빌드가 성공하였고, 안드로이드 에뮬레이터가 정상작동하였다.",
        link: "https://velog.io/@dpldpl/React-Native-expo-빌드-실패-문제-해결-Node.js-버전-충돌-문제-해결",
      },
      {
        title:
          "React-Native(expo) Bare Workflow에서 앱 아이콘 설정: 네이티브 설정",
        problem:
          "React-Native(expo)로 개발한 웹뷰 앱의 앱 아이콘을 설정하고 있었다. expo 공식문서를 참고하여 app.json 파일에서의 icon 부분을 디자이너가 전해준 png 파일로 수정 하였지만, 앱의 아이콘이 변경되지 않는 이슈가 발생했다.",
        cause:
          "간편하게 앱을 개발할 수 있는 expo의 Managed Workflow 환경에서는 app.json의 icon을 수정해주는 것만으로 앱 아이콘을 변경할 수 있지만, 해당 Managed Workflow는 Node.js 낮은 버전만 지원하기 때문에(1번의 이슈에서 Node.js 16버전을 삭제했음.) Bare Workflow로 전환된 현재의 프로젝트는 app.json 파일을 수정하는 것으로 앱의 아이콘을 변경할 수 없었다.",
        solution:
          "Android와 같은 경우, android/app/src/main/res/mipmap-* 폴더에 다양한 해상도의 아이콘을 추가해 주었다. 이 폴더에는 mdpi, hdpi, xhdpi, xxhdpi, xxxhdpi 등의 해상도별 폴더가 있다. 각 폴더에 맞는 해상도의 아이콘 파일을 디자이너에게 요청하였고, 이를 반영한 결과 앱의 아이콘이 변경되는 것을 확인할 수 있었다.",
        link: "https://velog.io/@dpldpl/React-Native-expo-빌드-실패-문제-해결-Node.js-버전-충돌-문제-해결",
      },
    ],
  },
  {
    title: "씨네톡 (Cinetalk - 현재 개발중)",
    description:
      "씨네톡 (Cinetalk)은 영화에 대한 자세한 정보와 사용자 리뷰를 제공하는 서비스입니다. 영화에 대한 키워드, 리뷰로 유저에게 영화를 추천합니다.",
    logoSrc: "/images/logos/cinetalk.png",
    imgSrc: "/images/projects/cinetalk.png",
    gitHub: "https://github.com/Devinix00/cinetalk-front",
    siteUrl: "https://cinetalk-front-dev.vercel.app",
    techStacks: [
      "Next.Js (App router)",
      "Typescript",
      "Tailwind CSS",
      "React-Query",
      "Zustand",
    ],
    myContributions: [
      "카카오, 네이버 소셜 로그인",
      "영화 검색 기능",
      "영화 포스터 색상 추출",
      "상세 페이지 반응형 퍼블리싱",
      "영화 리뷰 등록, 수정, 삭제, 좋아요",
      "영화 리뷰 무한 스크롤 조회",
      "영화 평점 등록",
      "영화 찜하기",
      "영화 키워드 조회, 작성",
    ],
    myContributionsDetails: [
      "리다이렉트 페이지의 쿼리스트링에 포함된 토큰 값을 백엔드 서버로 전송합니다. 백엔드 서버는 응답으로 access token을 응답 헤더에, refresh token을 http only 쿠키에 저장하여 반환합니다. 이 토큰들로 로그인과 로그인 연장 기능을 구현하였습니다.",
      "헤더의 검색창을 통해 영화를 검색할 수 있는 기능을 개발하였습니다. 검색 시 너무 많은 요청이 가지 않도록 debounce 기법을 사용하였으며, 검색창에 아무런 값을 입력하지 않았을 때에는 최근 인기 검색어들을 렌더링하는 기능을 구현하였습니다.",
      "상세 페이지의 영화 배너 아래 키워드 바 영역에 대해서는 포스터에서 가장 많이 사용된 색상 두 가지를 추출하여 그라데이션 처리를 하였습니다. 이 작업에는 color-thief 라이브러리를 활용하였습니다.",
      "Tailwind CSS를 활용하여 상세 페이지의 모든 반응형 UI를 개발하였습니다. 조건부 스타일링에는 clsx 라이브러리를 사용하여 코드의 가독성과 유지보수성을 향상시키려 노력하였습니다.",
      "React-Query의 useMutation 훅을 이용해 로딩 스피너를 처리하고, 쿼리 무효화를 통해 데이터를 최신 상태로 유지하였습니다. 좋아요와 싫어요 기능에는 Optimistic Update를 적용하여 사용자 경험을 개선하였습니다.",
      "React-Query의 useInfiniteQuery 훅을 사용하여 간편하고 효율적인 무한 스크롤 기능을 구현하였습니다.",
      "별 모양의 아이콘을 5개 렌더링하고 각 별의 index에 따라 hover 영역을 설정하여 별의 색을 채워 별점을 구분하였습니다. 빈 별은 0점, 반만 채워진 별은 0.5점, 전부 채워진 별은 1점으로 표시되도록 하였습니다.",
      "React-Query의 useMutation 훅을 이용하여 구현하였고, Optimistic Update를 적용하여 사용자 경험을 개선하였습니다",
      "유저는 영화에 관련된 키워드를 5자 내로 작성할 수 있습니다. 최신 키워드와 좋아요가 가장 많은 26개의 키워드를 키워드 조회의 응답으로 받으며, 좋아요 순위를 매겨서 폰트 사이즈와 색상을 다르게 적용하였습니다.",
    ],
    troubleShootings: [
      {
        title:
          "Maximum update depth exceeded: ResizeObserver를 활용한 성능 최적화",
        problem:
          "'Maximum update depth exceeded' 오류가 발생했다. 이 오류는 컴포넌트가 내부 상태를 업데이트하는 동안 발생했다. 이 컴포넌트는 사용자가 창 크기를 변경할 때마다 resize 이벤트를 통해 실행되는 함수 내에서 setState를 호출하여, 컴포넌트의 높이 상태를 업데이트하려고 했다. 그러나 이 과정에서 예상치 못하게 컴포넌트가 너무 많은 상태 변화가 일으켰고, 이는 React가 정한 업데이트 깊이 한계를 초과하여 오류를 발생시켰다.",
        cause:
          "이 문제의 원인은 setContentHeight 함수 호출이 반복적으로 이루어졌기 때문이다. setContentHeight는 resize 이벤트 리스너 내에서 호출되며, 이 함수는 컴포넌트의 상태를 업데이트하는 역할을 한다. 이 상태 업데이트는 컴포넌트의 리렌더링을 트리거하는데, 만약 브라우저 창의 크기 변경이 빠르고 연속적으로 이루어진다면, 이 함수는 계속해서 호출될 수 있다. 특히, 이 컴포넌트에서는 이전 상태와 새로운 높이 값이 동일하더라도 상태를 업데이트하는 로직을 포함하고 있지 않았기 때문에, 높이 값이 변하지 않았음에도 불구하고 불필요하게 상태 업데이트를 계속 수행했다. 이러한 무한 루프는 업데이트 최대 깊이를 초과하게 만들었고, 결국 애플리케이션의 안정성과 성능을 저하시키는 에러로 이어졌다.",
        solution:
          "이 문제를 해결하기 위한 첫 번째 단계는 불필요한 상태 업데이트를 줄이는 것이었다. 이를 위해, 코드에서 ResizeObserver API를 도입하여 요소의 크기 변화를 감지하고, 이에 따라 상태 업데이트를 트리거하도록 변경했다. ResizeObserver는 타겟 요소의 크기가 실제로 변화할 때만 콜백 함수를 실행하므로, 이벤트 기반의 접근 방식보다 훨씬 효율적이다.",
        link: "https://velog.io/@dpldpl/Maximum-update-depth-exceeded-ResizeObserver를-활용한-성능-최적화-문제-해결#해결-과정",
      },
      {
        title: "쿠키 서버로 전송하기: credentials",
        problem:
          "로그인 연장을 위한 토큰 갱신 api 요청 시 500 서버에러가 발생했다.",
        cause:
          "백엔드 개발자와 대화를 나누어 서버 로그를 분석한 결과, refresh 요청 시 refresh token이 누락된 것을 확인할 수 있었다. refresh token은 서버에서 http only 쿠키로 관리되는데, 클라이언트에서 요청을 보낼 때 쿠키를 포함하지 않아 인증에 실패한 것이 문제였었던 것이다.",
        solution:
          "문제를 해결하기 위해 fetch 요청에 credentials: 'include' 옵션을 추가함으로 문제를 해결하였다.",
        link: "https://velog.io/@dpldpl/쿠키-서버로-전송하기-credentials-문제-해결",
      },
    ],
  },
];
