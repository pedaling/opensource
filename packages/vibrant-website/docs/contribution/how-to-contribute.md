---
title: 기여하는 방법
sidebar_position: 1
---


Vibrant Design System은 오픈소스로 개발중이며, [Github](https://github.com/pedaling/opensource)에 공개되어있습니다.

따라서 누구나 PR 생성, 이슈 보고 등을 통해 Vibrant Design System에 기여할 수 있습니다.


## PR 생성으로 기여하기



### PR ticket 생성하기

PR 생성을 진행하기 전 branch 이름을 설정하기 위해 사전 이슈 티켓 발급이 필요합니다.
 [Issue 섹션](https://github.com/pedaling/opensource/issues) 에 접속하여, 작업 내용을 정리합니다.


#### 기능 추가


#### 버그 수정


#### 


### branch 작업하기

Vibrant 에 기여하기 위한 PR 을 생성하기 위한 브랜치 작업은 아래와 같은 수순을 따라 진행합니다.

본격적인 개발에 앞서, vibrant 가 따르고 있는 [디자인 규칙](./develope-principle.md) 을 읽어보시는 것을 권장드립니다.


(1) [Vibrant opensource](https://github.com/pedaling/opensource) 리포지토리를 clone 합니다.

(3) `main` 브랜치로부터 본인의 branch 를 새로 분기합니다. branch 이름은 티켓의 이름 (ex. `vs-20`) 으로 설정합니다.

(4) 본인의 branch 에 작업을 한 후, `main` 을 base 로 PR을 생성합니다.



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
| duplicate | 해당 이슈가 이미 발견되어 진행중이거나 수정된 경우 | Vibrant Builder |


### 버그 수정


• 이슈 생성시 라벨을 `bug` 로 등록합니다.

• 이슈 보고시에는 **재현경로** 와 이미지를 첨부해야 합니다. `기대했던 결과` `실제 동작한 내용` 을 함께 상세히 기술하면 이슈 파악에 큰 도움이 됩니다.

• 이슈가 제출된 후에는 최대 2일 이내로 담당자가 배정되어 진행됩니다. 담당자가 이슈 확인 및 진행중의 과정에서 보고자에게 답변을 할 수 있으며, 이 답변에 대해 보고자가 답변하지 않으면 이슈는 14일 이내로 자동 종료됩니다.

• 이슈가 담당자 확인 후 해결될 시에는 이슈의 라벨이 추가되는 방식으로 업데이트 됩니다.



### 기능 제안


• 이슈 생성시 라벨을 `enhancement` 로 등록합니다.

• 추가하고자 하는 기능 또는 컴포넌트에 대한 소개를 작성하여 등록합니다. 세부적인 요구 사항을 추가할수록 토의가 빠르게 진행된 후 기능 추가가 이루어질 수 있습니다.
 
• 이슈가 제출된 후에는 최대 2일 이내로 담당자가 배정되어 진행됩니다. 담당자가 이슈 확인 및 진행중의 과정에서 보고자에게 답변을 할 수 있으며, 이 답변에 대해 보고자가 답변하지 않으면 이슈는 14일 이내로 자동 종료됩니다.

• 이슈가 담당자 확인 후 해결될 시에는 이슈의 라벨이 추가되는 방식으로 업데이트 됩니다.

