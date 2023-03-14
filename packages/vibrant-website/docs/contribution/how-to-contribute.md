---
title: 기여하는 방법
sidebar_position: 1
---

# Vibrant UI 에 기여하세요

Vibrant Design System은 오픈소스로 개발중이며, [Github](https://github.com/pedaling/opensource)에 공개되어있습니다.

따라서 누구나 PR 생성, 이슈 보고 등을 통해 Vibrant Design System에 기여할 수 있습니다.


## PR 생성으로 기여하기


### PR ticket 생성하기

PR 생성을 진행하기 전 branch 이름을 설정하기 위해 사전 이슈 티켓 발급이 필요합니다.
[Vibrant Service Center](https://101inc.atlassian.net/servicedesk/customer/portal/31) 에 접속하여, `PR ticket create` 을 선택해 작업 내용을 정리합니다.

• 작업을 진행하게 된 배경 및 이슈 내역을 작성합니다.

• 기능 추가 PR 의 경우, 어떤 기능인지에 대한 내용을 작성합니다.

• 버그 수정 PR 의 경우, 버그 재현 경로 및 수정 방향에 대한 내용을 작성합니다.



### branch 작업하기


• [Vibrant opensource](https://github.com/pedaling/opensource) 리포지토리를 fork 합니다.

• fork 된 리포지토리를 clone 합니다.

• `main` 브랜치로부터 본인의 branch 를 새로 분기합니다. branch 이름은 티켓의 이름 (ex. `vs-20`) 으로 설정합니다.

• 본인의 branch 에 작업을 한 후, `main` 을 base 로 PR을 생성합니다.



### PR 가이드라인

• PR 에는 변경 전/후의 스크린샷과 더불어 변경한 내용을 기술합니다.

• PR 은 자동으로 등록되어있는 CI/CD 체크를 통과해야 리뷰 단계를 거칠 수 있습니다.

• PR 은 모든 리뷰어들의 댓글이 해결되고, 1개 이상의 승인을 받아야 머지될 수 있습니다. 


### 배포와 버전관리

배포 권한은 현재 contributors 가 아닌 vibrant builders 에게만 있습니다.

릴리즈는 시급한 요청이 있을 시에는 하루에 2번 이상 나가기도 하지만, 대체적으로는 일주일에 1번 이상 진행됩니다.

버전 관리는 [유의적 버전](https://semver.org/lang/ko/) 을 따릅니다.


## 이슈 보고를 통해 기여하기


Vibrant Design System 에 추가하고 싶은 기능, 컴포넌트가 있거나 버그를 발견했을 때 직접 PR 을 생성하지 않고도 기여할 수 있습니다. [Vibrant Service Center](https://101inc.atlassian.net/servicedesk/customer/portal/31) 에 접근하여 필요에 맞는 이슈 보고를 진행합니다.


• 이슈 보고시에는 **재현경로** 와 이미지를 첨부해야 합니다. 

• 이슈가 제출된 후에는 최대 2일 이내로 담당자가 배정되어 진행됩니다. 담당자가 이슈 확인 및 진행중의 과정에서 보고자에게 답변을 할 수 있으며, 이 답변에 대해 보고자가 답변하지 않으면 이슈는 14일 이내로 자동 종료됩니다.

• 이슈가 담당자 확인 후 해결될 시에는 Service center 의 티켓 변경사항이 생기며, 변경 PR 에 해당 이슈 보고자가 태그됩니다.