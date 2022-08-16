# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

### [0.9.1](https://github.com/pedaling/opensource/compare/vibrant-core-0.9.0...vibrant-core-0.9.1) (2022-08-12)

### Dependency Updates

* `vibrant-utils` updated to version `0.5.1`
* `vibrant-theme` updated to version `0.5.2`

### Bug Fixes

* react-spring 라이브러리가 Dependency에 기본 값으로 사용되도록 한다 ([#186](https://github.com/pedaling/opensource/issues/186)) ([58da2da](https://github.com/pedaling/opensource/commit/58da2da51a1d43e98c56a5ecac2b88f189215a29))
* set babel useBuiltIns option as false ([#189](https://github.com/pedaling/opensource/issues/189)) ([513268f](https://github.com/pedaling/opensource/commit/513268fc81da30bb95ba005554d5425139420b26))

## [0.9.0](https://github.com/pedaling/opensource/compare/vibrant-core-0.8.0...vibrant-core-0.9.0) (2022-08-11)

### Dependency Updates

* `vibrant-utils` updated to version `0.5.0`
* `vibrant-theme` updated to version `0.5.1`

### Features

* 글로벌 이벤트를 관리하는 GlobalEventProvider와 Dismissible 컴포넌트를 추가한다. [WP-2666] ([#174](https://github.com/pedaling/opensource/issues/174)) ([993bdbd](https://github.com/pedaling/opensource/commit/993bdbdc2161381ec57faa31fadf5405ae7670df))
* add box-sizing default prop to Box, Input ([#183](https://github.com/pedaling/opensource/issues/183)) ([4b5914c](https://github.com/pedaling/opensource/commit/4b5914c4dd2e39858aea28eb730325313355e902))
* add textAlign left prop to Text component ([#184](https://github.com/pedaling/opensource/issues/184)) ([9deb9e2](https://github.com/pedaling/opensource/commit/9deb9e27479a4f828f98ecee38c02eabf921bcbf))
* support localization to Calendar ([#180](https://github.com/pedaling/opensource/issues/180)) ([b3a1ec2](https://github.com/pedaling/opensource/commit/b3a1ec266ed5fa4aaaac9b5b41868529bbbfc54c))
* **vibrant-components:** add SearchInput component ([#163](https://github.com/pedaling/opensource/issues/163)) ([af62b81](https://github.com/pedaling/opensource/commit/af62b81d7a57689e59aa85b313c64c72f5e55ec0))
* **vibrant-components:** visible Calendar on remain area ([#181](https://github.com/pedaling/opensource/issues/181)) ([9f15ab8](https://github.com/pedaling/opensource/commit/9f15ab82ac1709ed2b1ec022684aae9715d83a2c))
* **vibrant-core:** add overflow systemProp ([#167](https://github.com/pedaling/opensource/issues/167)) ([17b3ad5](https://github.com/pedaling/opensource/commit/17b3ad5fea5ce8ca9459f14960a8ac11cbd317ac))
* **vibrant-core:** add Text component to core library ([#173](https://github.com/pedaling/opensource/issues/173)) ([6d22716](https://github.com/pedaling/opensource/commit/6d22716e0fc3d986a993cd593553e058abd76450))
* **vibrant-core:** add text systemProp ([#166](https://github.com/pedaling/opensource/issues/166)) ([b05a0c8](https://github.com/pedaling/opensource/commit/b05a0c88db47744de8ca6f7f1d5bfef836d49586))
* **vibrant-core:** add TextInput component to core library ([#175](https://github.com/pedaling/opensource/issues/175)) ([2003510](https://github.com/pedaling/opensource/commit/200351038c607b59ce44974e7cd9951fb469ce70))


### Bug Fixes

* add z-index to SelectOptionGroup ([#165](https://github.com/pedaling/opensource/issues/165)) ([14b2c66](https://github.com/pedaling/opensource/commit/14b2c660524977295669f5e7534133949ac4fdb5))
* react-spring을 ExternalDependency에서 주입받도록 한다 ([#178](https://github.com/pedaling/opensource/issues/178)) ([5de8a2c](https://github.com/pedaling/opensource/commit/5de8a2c841edb29805e81820aae2fe3127f6a405))

## [0.8.0](https://github.com/pedaling/opensource/compare/vibrant-core-0.7.2...vibrant-core-0.8.0) (2022-08-04)

### Dependency Updates

* `vibrant-utils` updated to version `0.4.0`
* `vibrant-theme` updated to version `0.5.0`

### Features

* **vibrant-components:** Paper에서 elevationLevel 속성을 지원한다 [WP-2495] ([#150](https://github.com/pedaling/opensource/issues/150)) ([845ae1b](https://github.com/pedaling/opensource/commit/845ae1b206b7f4c077c9079bcb37df98cf089260))
* **vibrant-core, vibrant-utils:**  boxShadow, elevationLevel 속성을 systemProp으로 추가한다. [WP-2622] ([#148](https://github.com/pedaling/opensource/issues/148)) ([084e38d](https://github.com/pedaling/opensource/commit/084e38dbabc5cba35890017f85190088bacf6cbc))
* **vibrant-core:** add input systemProp ([#156](https://github.com/pedaling/opensource/issues/156)) ([53bc0a2](https://github.com/pedaling/opensource/commit/53bc0a2c162029a779a032f959fa43542fb6b6b7))
* **vibrant-core:** add Svg native component ([#151](https://github.com/pedaling/opensource/issues/151)) ([fec0a49](https://github.com/pedaling/opensource/commit/fec0a49dd35619b6f5941ea22486273712a72712))
* **vibrant-utils:** add DistributiveOmit utility type ([#153](https://github.com/pedaling/opensource/issues/153)) ([aea13ce](https://github.com/pedaling/opensource/commit/aea13ceff4caeae22a7554d17ade8939164c8e0d))


### Bug Fixes

* **vibrant-core:** fix Svg component type error ([#146](https://github.com/pedaling/opensource/issues/146)) ([fb6bdd9](https://github.com/pedaling/opensource/commit/fb6bdd99414c4fba18be0d749fbf89c289884ecd))
* **vibrant-core:** fix SvgProps export path ([#152](https://github.com/pedaling/opensource/issues/152)) ([a5f5d66](https://github.com/pedaling/opensource/commit/a5f5d665f34637380dc5d1b09323e4568239d703))

### [0.7.2](https://github.com/pedaling/opensource/compare/vibrant-core-0.7.1...vibrant-core-0.7.2) (2022-08-03)

### Dependency Updates

* `vibrant-theme` updated to version `0.4.0`

### Bug Fixes

* fix type import path ([#142](https://github.com/pedaling/opensource/issues/142)) ([d0150df](https://github.com/pedaling/opensource/commit/d0150dfd4547672cf4751084ef04f981af1c61af))

### [0.7.1](https://github.com/pedaling/opensource/compare/vibrant-core-0.7.0...vibrant-core-0.7.1) (2022-08-03)

### Dependency Updates

* `vibrant-theme` updated to version `0.3.1`

### Bug Fixes

* **vibrant-core:** remove box 'as' prop default value ([#137](https://github.com/pedaling/opensource/issues/137)) ([abb2b30](https://github.com/pedaling/opensource/commit/abb2b303272c0e29236d9baff2a1cc2507208a7d))
* **vibrant-core:** remove ElementName default type ([#135](https://github.com/pedaling/opensource/issues/135)) ([c8ee71b](https://github.com/pedaling/opensource/commit/c8ee71b7489c30aae82381ff5942c99b356da84d))

## [0.7.0](https://github.com/pedaling/opensource/compare/vibrant-core-0.6.0...vibrant-core-0.7.0) (2022-07-29)


### Features

* **vibrant-core:** add transform props to system props ([#126](https://github.com/pedaling/opensource/issues/126)) ([9c2eac1](https://github.com/pedaling/opensource/commit/9c2eac108e6e8fd498e54d27853d95a1bbd992ad))


### Bug Fixes

* android에서 앱이 켜지지 않는 문제를 수정한다 ([#130](https://github.com/pedaling/opensource/issues/130)) ([0d38b3a](https://github.com/pedaling/opensource/commit/0d38b3a8880f897c78e40e3efad530cd6f5f68f3))


## [0.6.0](https://github.com/pedaling/opensource/compare/vibrant-core-0.5.1...vibrant-core-0.6.0) (2022-07-29)


### Features

* borderStyle에 dashed를 추가한다 ([#127](https://github.com/pedaling/opensource/issues/127)) ([81739be](https://github.com/pedaling/opensource/commit/81739be76615f053c0496cc505142c2c45f58ea9))

### [0.5.1](https://github.com/pedaling/opensource/compare/vibrant-core-0.5.0...vibrant-core-0.5.1) (2022-07-28)

## [0.5.0](https://github.com/pedaling/opensource/compare/vibrant-core-0.4.0...vibrant-core-0.5.0) (2022-07-28)


### Features

* **vibrant-core:** add VibrantProvider for inject external dependencies ([#124](https://github.com/pedaling/opensource/issues/124)) ([80248bc](https://github.com/pedaling/opensource/commit/80248bc36230a388da5329c08e02cd8321698380))
* **vibrant-core:** 웹에서 lineHeight 값이 숫자라면 px 단위를 붙인다 ([#117](https://github.com/pedaling/opensource/issues/117)) ([1b22b8c](https://github.com/pedaling/opensource/commit/1b22b8cad8334b37669b586aa713132aa732bdbe))

## [0.4.0](https://github.com/pedaling/opensource/compare/vibrant-core-0.3.0...vibrant-core-0.4.0) (2022-07-27)

### Dependency Updates

* `vibrant-utils` updated to version `0.3.1`
* `vibrant-theme` updated to version `0.3.0`

### Features

* motion 컴포넌트가 ResponsiveValue로 동작되도록 한다 ([#106](https://github.com/pedaling/opensource/issues/106)) ([e15b8fb](https://github.com/pedaling/opensource/commit/e15b8fb2ccca804aa7069faf85165e0ede8ac1e0))
* native responsiveValue를 지원한다 ([#104](https://github.com/pedaling/opensource/issues/104)) ([d09f8e1](https://github.com/pedaling/opensource/commit/d09f8e1bb565d1bac5d78fd8367d314733014c6a))
* opacity Token을 추가한다 ([#105](https://github.com/pedaling/opensource/issues/105)) ([cd5c406](https://github.com/pedaling/opensource/commit/cd5c4067b08d22d4d0c68c482b95528896aa6738))
* useResponsiveValue hook을 추가한다 ([#102](https://github.com/pedaling/opensource/issues/102)) ([7456046](https://github.com/pedaling/opensource/commit/74560461d72ac181f9f622dfb5675663dfec52d6))
* **vibrant-components:** pressable prop을 제거하고 Pressable 컴포넌트를 추가한다 ([#110](https://github.com/pedaling/opensource/issues/110)) ([a4246cd](https://github.com/pedaling/opensource/commit/a4246cd525c7cd8910db1d495d40e0802f74a5fa))
* **vibrant-core:** 네이티브 Box 컴포넌트가 systemProp에서 설정한 BaseComponent를 사용할 수 있게한다 ([#88](https://github.com/pedaling/opensource/issues/88)) ([ea6b849](https://github.com/pedaling/opensource/commit/ea6b8496d4ed4a3e7aaadcea076ee17f96bc9c9b))
* **vibrant-core:** add borderRadiusLevel systemProp ([#119](https://github.com/pedaling/opensource/issues/119)) ([b6c62cf](https://github.com/pedaling/opensource/commit/b6c62cfc1a2196adcb57ef7b6acfd24ff6ff106d))
* **vibrant-core:** add gradient systemProp ([#111](https://github.com/pedaling/opensource/issues/111)) ([a87b045](https://github.com/pedaling/opensource/commit/a87b04521cb1f2cc4e7447b24e7a5f6a94ebe41d))
* **vibrant-core:** add ReactElementChild type ([#114](https://github.com/pedaling/opensource/issues/114)) ([efe5c1a](https://github.com/pedaling/opensource/commit/efe5c1a417753f72c4a6c86085bbca52d367e01a))
* **vibrant-motion:** add backgroundColor prop to Motion ([#83](https://github.com/pedaling/opensource/issues/83)) ([7cbbfdf](https://github.com/pedaling/opensource/commit/7cbbfdfaa1048951a76873cd93c057ac93d99e12))
* **vibrant-theme, vibrant-components:** gradient scale을 theme에 추가한다 ([#91](https://github.com/pedaling/opensource/issues/91)) ([5a9c70b](https://github.com/pedaling/opensource/commit/5a9c70b4013e44534b536c25c5ee7769a0ead55e))


### Bug Fixes

* box 컴포넌트가 기본적으로 flex로 동작되도록 한다 ([#86](https://github.com/pedaling/opensource/issues/86)) ([7377ef7](https://github.com/pedaling/opensource/commit/7377ef75938539186d13fa25bab558fbec4ba0e9))
* update native jest config to use jest-expo preset ([#109](https://github.com/pedaling/opensource/issues/109)) ([0ef07f1](https://github.com/pedaling/opensource/commit/0ef07f108156cffd0e4cdb535d6689dfeb8f9463))
* vibrant-component native 배포를 지원한다 ([#113](https://github.com/pedaling/opensource/issues/113)) ([9cbf665](https://github.com/pedaling/opensource/commit/9cbf6653abe6ec378eb8256990e2c34f0cef9be9))
* **vibrant-core:** fix box prop type ([#95](https://github.com/pedaling/opensource/issues/95)) ([6aeee4d](https://github.com/pedaling/opensource/commit/6aeee4d6609c1b86a13bf2bd4c6382ab58f04898))
* withVariation에서 ref와 children 타입이 잘못 설정되는 문제를 수정한다 ([#101](https://github.com/pedaling/opensource/issues/101)) ([0554d53](https://github.com/pedaling/opensource/commit/0554d534fa51933e8a336bd0964639cd797573cf))

## [0.3.0](https://github.com/pedaling/opensource/compare/vibrant-core-0.2.1...vibrant-core-0.3.0) (2022-07-19)

### [0.2.1](https://github.com/pedaling/opensource/compare/vibrant-core-0.2.0...vibrant-core-0.2.1) (2022-07-19)

## [0.2.0](https://github.com/pedaling/opensource/compare/vibrant-core-0.1.1...vibrant-core-0.2.0) (2022-07-19)

### Dependency Updates

* `vibrant-utils` updated to version `0.2.0`

### Features

* **vibrant-components:** SelectField 컴포넌트를 구현한다 ([#74](https://github.com/pedaling/opensource/issues/74)) ([9cb3b15](https://github.com/pedaling/opensource/commit/9cb3b158689a31ee8698e19f980c347b4aab2791))

## 0.1.0 (2022-07-18)


### Features

* npm 배포를 설정한다 (0.0.2) ([#33](https://github.com/pedaling/opensource/issues/33)) ([c85a748](https://github.com/pedaling/opensource/commit/c85a748b5b4d9883e48120410baaf1f0b49f66f8))
* Tab 컴포넌트를 구현한다 ([#56](https://github.com/pedaling/opensource/issues/56)) ([16d6c02](https://github.com/pedaling/opensource/commit/16d6c021c227706034b96ada9440de419b9c953d))
* TabGroup을 구현한다 ([#59](https://github.com/pedaling/opensource/issues/59)) ([1001a28](https://github.com/pedaling/opensource/commit/1001a28ac4252ab4e0e0b6c0c1fe4d13ff51a47d))
* **vibrant-components:** Input 컴포넌트를 추가한다 ([#40](https://github.com/pedaling/opensource/issues/40)) ([e19f3a2](https://github.com/pedaling/opensource/commit/e19f3a261a2bef96674b5d43e1062a615f0477e5))
* **vibrant-components:** NumericField를 구현한다 ([#67](https://github.com/pedaling/opensource/issues/67)) ([e502929](https://github.com/pedaling/opensource/commit/e502929b2658131eecb17c7775ec43c17e6b51a9))
* **vibrant-components:** VerificationCodeField 컴포넌트를 구현한다 ([#58](https://github.com/pedaling/opensource/issues/58)) ([8313171](https://github.com/pedaling/opensource/commit/83131713900bf300b497aac61875f9dcc6cf1974))
* **vibrant-core:** flexbox row-gap prop을 추가한다 ([#53](https://github.com/pedaling/opensource/issues/53)) ([fe7974f](https://github.com/pedaling/opensource/commit/fe7974f4176261e13739af5473d6566e64b739bd))
* **vibrant-core:** interaction systemProp을 추가한다 ([#51](https://github.com/pedaling/opensource/issues/51)) ([7ca8b6a](https://github.com/pedaling/opensource/commit/7ca8b6a6f908fb4d81e2438794afadfa6b3d65bd))
* **vibrant-core:** pressable, pseudoBefore, pseudoAfter prop을 추가한다 ([#66](https://github.com/pedaling/opensource/issues/66)) ([edfd64c](https://github.com/pedaling/opensource/commit/edfd64caa529f98278ea4900a11d9fd368928909))
* **vibrant-core:** typography 관련 systemProp을 추가한다 ([#36](https://github.com/pedaling/opensource/issues/36)) ([00e56f9](https://github.com/pedaling/opensource/commit/00e56f9d64fb5eedf87616efaa518fb960336a17))
* withTheme decorator를 추가한다 ([#65](https://github.com/pedaling/opensource/issues/65)) ([963904d](https://github.com/pedaling/opensource/commit/963904d81c9d29f67334258c9c26d0dd9e0bd79b))


### Bug Fixes

* cjs 빌드를 사용하지 않도록 한다 ([#72](https://github.com/pedaling/opensource/issues/72)) ([25457c6](https://github.com/pedaling/opensource/commit/25457c61be9b489dc2628227d7ea71d77a712a4c))
* cjs빌드를 전부 활성화한다 ([#73](https://github.com/pedaling/opensource/issues/73)) ([c49eba4](https://github.com/pedaling/opensource/commit/c49eba4461680be09d89dcc4bcaf4ef0b284a142))
* Text 컴포넌트를 구현한다 ([#41](https://github.com/pedaling/opensource/issues/41)) ([c4dac8a](https://github.com/pedaling/opensource/commit/c4dac8a258c62a95acc725e2f37380a89eec0116))
* **vibrant-core:** position 관련 systemProp을 추가한다 ([#45](https://github.com/pedaling/opensource/issues/45)) ([3756724](https://github.com/pedaling/opensource/commit/37567248ec05b11c86b919caf3d7e9c56aab83e3))
* **vibrant-core:** systemProp에서 theme 값을 가져오고 transform을 실행하도록 수정한다 ([#35](https://github.com/pedaling/opensource/issues/35)) ([3c1f320](https://github.com/pedaling/opensource/commit/3c1f320cfb71c4d790b99ea4d74978d46fbd279d))
* **vibrant-core:** systemProp의 값으로 $를 사용하면 theme 값을 조회해서 사용하도록 수정한다 ([#63](https://github.com/pedaling/opensource/issues/63)) ([8ddec6d](https://github.com/pedaling/opensource/commit/8ddec6d5ae3327614c4baa2ab0c64b10e7f16eda))
* **vibrant-core:** systemProp이 아닌 prop은 전부 forward 하도록 수정한다 ([#55](https://github.com/pedaling/opensource/issues/55)) ([47b5edf](https://github.com/pedaling/opensource/commit/47b5edf3693a953fedeecbaf4ad03f4e178babea))
* **vibrant-core:** withVariation이 innerRef로 인자를 넘기도록 한다 ([#37](https://github.com/pedaling/opensource/issues/37)) ([dc0a8ac](https://github.com/pedaling/opensource/commit/dc0a8acfed75e7e0ca8de6c7f6912399cf89e0b1))
