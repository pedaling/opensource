---
title: 기여하는 방법
sidebar_position: 1
---


Vibrant Design System은 오픈소스로 개발중이며, [Github](https://github.com/pedaling/opensource)에 공개되어있습니다.

따라서 누구나 PR 생성, 이슈 보고 등을 통해 Vibrant Design System에 기여할 수 있습니다.


## PR 생성으로 기여하기

### 이슈 생성하기

PR 생성을 진행하기 전 branch 이름을 설정하기 위해 사전 이슈 티켓 발급이 필요합니다.
 [Issue 섹션](https://github.com/pedaling/opensource/issues) 에서 Feature Request 를 선택해 작성합니다.
 

### branch 작업하기

Vibrant 에 기여하기 위한 PR 을 생성하기 위한 브랜치 작업은 아래와 같은 수순을 따라 진행합니다.

본격적인 개발에 앞서, vibrant 가 따르고 있는 [디자인 규칙](./develope-principle.md) 을 읽어보시는 것을 권장드립니다.


(1) [Vibrant opensource](https://github.com/pedaling/opensource) 리포지토리를 clone 합니다.

(2) `main` 브랜치로부터 본인의 branch 를 새로 분기합니다. branch 이름은 이슈 태그와 이슈의 번호로 생성합니다.
>  이슈 번호가 #622 이고, 버그 수정을 위해 이슈태그를 bug 태그로 생성한 이슈라면 `bug-622` 로 설정하고, 피쳐 추가의 경우라면 `enhancement-622` 가 됩니다.

(3) 본인의 branch 에 작업을 한 후, `main` 을 base 로 PR을 생성합니다.



### Pull Request 

• PR 에는 변경 전/후의 스크린샷과 더불어 변경한 내용을 기술합니다.

• PR 은 자동으로 등록되어있는 CI/CD 체크를 통과해야 리뷰 단계를 거칠 수 있습니다.

• PR 은 모든 리뷰어들의 댓글이 해결되고, vibrant builder 의 approve 를 받아야 머지될 수 있습니다. 



### 배포와 버전관리

배포 권한은 현재 contributors 가 아닌 vibrant builders 에게만 있습니다.

릴리즈는 시급한 요청이 있을 시에는 하루에 2번 이상 나가기도 하지만, 대체적으로는 일주일에 1번 이상 진행됩니다.

버전 관리는 [유의적 버전](https://semver.org/lang/ko/) 을 따릅니다.


• `patch` : 기존 버전과 호환되면서 버그 및 디자인을 수정한 버전

• `minor` : 기존 버전과 호환되면서 새로운 기능을 추가한 버전

• `major` : 기존 버전과 호환되지 않게 API 가 바뀌는 모든 수정 버전




## 이슈 리포팅을 통해 기여하기


 Vibrant Design System 를 사용하는 과정에서 버그를 발견하거나, feature 추가를 제안할 때, VDS 리포지토리의 [Issue 섹션](https://github.com/pedaling/opensource/issues)을 통해 리포트할 수 있습니다.


현재 VDS 리포지토리의 issue 들을 관리하는 라벨은 아래와 같습니다.


| Label | Content | Author |
| ----- | ------- | ------ | 
| good first issue | VDS 의 첫 사용자가 읽으면 좋을 issue 혹은 discussion | 모든 이용자 |
| [bug](#버그-수정) | 버그와 오류를 발견 | 버그 발견자 |
| documentation | VDS 홈페이지의 문서의 추가, 수정을 제안 | 제안자 | 
| [enhancement](#기능-제안) | 새로운 기능 추가 및 구현 제안 | 제안자 |
| help wanted | 중대한 이슈 혹은 특별히 빠른 처리가 필요한 경우 | 제안자 |
| question | 사용에 대한 질의나 토론 | 제안자 | 
| wontfix | 이슈 파악 후, VDS 의 수정이 필요하지 않은 경우의 라벨 | Vibrant Builder | 
| invalid | 기술한 경로로 이슈가 재현되지 않거나, 이미 존재하는 제안에 대한 반려 | Vibrant Builder |
| duplicate | 해당 이슈가 이미 발견되어 진행중이거나 수정된 경우 | Vibrant Builder | 
| completed | 이슈가 수정되거나, 요청한 feature 가 반영된 경우  | Vibrant Builder |


### 버그 수정

• 이슈 생성시 `Bug report` 템플릿을 선택합니다. 

• 이슈 보고시에는 **재현경로** 와 이미지를 첨부해야 합니다. `기대했던 결과` `실제 동작한 내용` 을 함께 상세히 기술하면 이슈 파악에 큰 도움이 됩니다.

• 이슈가 제출된 후에는 담당자가 배정되어 진행됩니다. 우선순위에 따라 이슈가 해결되기까지의 시간 목표가 상이합니다. `Blocker`는 1시간, `Critical`는 4시간, `Major`는 하루, `Minor`는 일주일 이내로 해결되는 것을 목표로 합니다.

• 이슈가 담당자 확인 후 해결될 시에는 이슈의 라벨이 추가되는 방식으로 업데이트 됩니다.



### 기능 제안

• 이슈 생성시 `Feature request` 템플릿을 선택합니다. 

• 추가하고자 하는 기능 또는 컴포넌트에 대한 소개를 작성하여 등록합니다. 세부적인 요구 사항을 추가할수록 토의가 빠르게 진행된 후 기능 추가가 이루어질 수 있습니다.
 
• 이슈가 제출된 후에는 담당자가 배정되어 진행됩니다. 우선순위에 따라 이슈가 해결되기까지의 시간 목표가 상이합니다. `Blocker`는 2시간, `Critical`는 8시간, `Major`는 일주일, `Minor`는 한 달 이내로 해결되는 것을 목표로 합니다.

• 단순히 기능 요청을 제안하는 경우에는, `For Only Suggestion` 에 해당하는 내용을 기입하고 제출합니다.

• 직접 PR 을 생성하여 기여하고자 하는 경우에는, `For Your Own Contribution with PR` 에 안내된 대로 RFC (Request for Comments) 를 작성하고, 헤당 페이지 링크를 기입합니다.

• 이슈가 담당자 확인 후 해결될 시에는 이슈의 라벨이 추가되는 방식으로 업데이트 됩니다.


## 개발자 워크플로우

컴포넌트 개발 및 수정은 Storybook을 통해 이루어지며, 다음 명령어로 실행 가능합니다.

```bash
yarn start-storybook
```

### Native App 개발

스토리북 네이티브를 테스트하기 위해서는 앱 실행이 필요합니다.

```bash
yarn vibrant-app
# press 'a' to android simulator
# press 'i' to ios simulator
```

`a`키나 `i`키를 통해 시뮬레이터를 실행한 다음, 스토리북 웹에서 플랫폼 선택을 통해 네이티브 컴포넌트를 테스트할 수 있습니다.

![Storybook Platform Select](/img/docs/contribution-stoorybook-platform.png)

**스토리북의 Controls panel과 선택된 스토리가 앱과 동기화됩니다**

### 문서 사이트 개발

```bash
yarn vibrant-docs
```

명령어를 통해 문서 사이트를 개발할 수 있습니다.