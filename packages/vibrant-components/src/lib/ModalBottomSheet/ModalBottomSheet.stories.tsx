import { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box, Text, useCurrentTheme } from '@vibrant-ui/core';
import { Body } from '../Body';
import { ContainedButton } from '../ContainedButton';
import { HStack } from '../HStack';
import { Paragraph } from '../Paragraph';
import { Pressable } from '../Pressable';
import { SelectField } from '../SelectField';
import { TextField } from '../TextField';
import { VStack } from '../VStack';
import { ModalBottomSheet } from './ModalBottomSheet';

export default {
  title: 'ModalBottomSheet',
  component: ModalBottomSheet,
  args: {
    defaultOpen: false,
    title: 'Title',
    renderOpener: ({ open }) => (
      <Pressable backgroundColor="primary" onClick={open} p={20}>
        <Body level={1}>Click Me</Body>
      </Pressable>
    ),
    renderContents: () => (
      <Box width="100%" height={100} backgroundColor="primary" alignItems="center" justifyContent="center">
        <Text>Content</Text>
      </Box>
    ),
  },
} as ComponentMeta<typeof ModalBottomSheet>;

export const Basic: ComponentStory<typeof ModalBottomSheet> = props => (
  <VStack mt={200} width="100%">
    <Box mx="auto">
      <ModalBottomSheet title="" {...props} />
    </Box>
  </VStack>
);

export const WithLongContent: ComponentStory<typeof ModalBottomSheet> = props => (
  <VStack width="100%">
    <Box mx="auto">
      <ModalBottomSheet
        {...props}
        renderContents={() => (
          <VStack spacing={20} px={[20, 32]}>
            <Paragraph level={1}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
              the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
              software like Aldus PageMaker including versions of Lorem Ipsum.
            </Paragraph>
          </VStack>
        )}
      />
    </Box>
  </VStack>
);

export const ControlledOpen: ComponentStory<typeof ModalBottomSheet> = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Pressable backgroundColor="primary" onClick={() => setOpen(true)} p={20} mx="auto">
        <Body level={1}>완강하기</Body>
      </Pressable>
      <Box mx="auto">
        <ModalBottomSheet
          title="클래스 완강을 축하합니다"
          subtitle="클래스메이트님을 위해 축하 선물을 준비했어요!"
          open={open}
          renderContents={({ close }) => (
            <ContainedButton kind="primary" size="lg" onClick={close}>
              확인
            </ContainedButton>
          )}
          onClose={() => setOpen(false)}
        />
      </Box>
    </>
  );
};

export const MultipleModal: ComponentStory<typeof ModalBottomSheet> = () => {
  const [opened, setOpened] = useState(false);

  return (
    <VStack mt={36}>
      <ContainedButton kind="primary" size="lg" onClick={() => setOpened(true)}>
        열기
      </ContainedButton>
      <ModalBottomSheet
        title="첫번째 모달"
        subtitle="첫번째 모달입니다."
        renderContents={() => (
          <ContainedButton
            kind="primary"
            size="lg"
            onClick={() => {
              setOpened(false);

              setTimeout(() => {
                setOpened(true);
              }, 100);
            }}
          >
            닫기 및 다시 열기
          </ContainedButton>
        )}
        open={opened}
        onClose={() => setOpened(false)}
      />
    </VStack>
  );
};

export const withButtonOptions: ComponentStory<typeof ModalBottomSheet> = () => (
  <HStack mt={200} width="100%" spacing={20}>
    <ModalBottomSheet
      title=""
      defaultOpen={false}
      renderOpener={({ open }) => (
        <ContainedButton kind="primary" size="md" onClick={open}>
          Primary
        </ContainedButton>
      )}
      primaryButtonOptions={{ text: 'primary', disabled: false }}
    />
    <ModalBottomSheet
      title=""
      defaultOpen={false}
      renderOpener={({ open }) => (
        <ContainedButton kind="primary" size="md" onClick={open}>
          Primary + Secondary
        </ContainedButton>
      )}
      primaryButtonOptions={{ text: 'primary', disabled: false }}
      secondaryButtonOptions={{ text: 'secondary', disabled: false }}
    />
    <ModalBottomSheet
      title=""
      defaultOpen={false}
      renderOpener={({ open }) => (
        <ContainedButton kind="primary" size="md" onClick={open}>
          Primary + Sub
        </ContainedButton>
      )}
      primaryButtonOptions={{ text: 'primary', disabled: false }}
      subButtonOptions={{ text: 'sub', disabled: false }}
    />
  </HStack>
);

export const WithFormContent: ComponentStory<typeof ModalBottomSheet> = props => {
  const {
    theme: { zIndex },
  } = useCurrentTheme();

  return (
    <VStack width="100%">
      <Box mx="auto">
        <ModalBottomSheet
          {...props}
          renderContents={() => (
            <VStack spacing={20} px={[20, 32]}>
              <SelectField
                label="실 색상"
                options={[
                  { label: '4397 아이비', value: '4397 아이비' },
                  { label: '4396 코니퍼', value: '4396 코니퍼' },
                  { label: '4394 네이비', value: '4394 네이비' },
                  { label: '4393 크림', value: '4393 크림' },
                  { label: '4392 블랙', value: '4392 블랙' },
                  { label: '4391 그레이', value: '4391 그레이' },
                  { label: '4390 데님', value: '4390 데님' },
                  { label: '4388 포세린', value: '4388 포세린' },
                  { label: '4387 라일락', value: '4387 라일락' },
                  { label: '4386 린덴', value: '4386 린덴' },
                  { label: '4385 오트밀', value: '4385 오트밀' },
                ]}
                zIndex={zIndex.modalBottomSheet + 1}
              />
              <TextField />
            </VStack>
          )}
        />
      </Box>
    </VStack>
  );
};
