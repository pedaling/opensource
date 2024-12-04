import React, { useState } from 'react';
import { Body, GridList, Paper, Pressable, SelectField, VStack } from '@vibrant-ui/components';
import { Icon } from '@vibrant-ui/icons';

const IconContainer = ({ name, backgroundColor, children }) => (
  <Pressable
    width="100%"
    onClick={() => {
      navigator.clipboard.writeText(name);
    }}
  >
    <Paper px={8} pt={16} pb={14} rounded="sm" backgroundColor={backgroundColor}>
      <VStack alignHorizontal="center" alignVertical="center" spacing={12}>
        {children}
        <Body level={3} color="onColor" wordBreak="break-all" lineLimit={1} overflowWrap="break-word">
          {name}
        </Body>
      </VStack>
    </Paper>
  </Pressable>
);

export const IconMaps = () => {
  const [size, setSize] = useState('24');
  const [type, setType] = useState('Regular');
  const [color, setColor] = useState('primaryContainer');

  return (
    <VStack spacing={12}>
      <SelectField
        label="Icon Type"
        options={[
          {
            label: 'Fill',
            value: 'Fill',
          },
          {
            label: 'Regular',
            value: 'Regular',
          },
          {
            label: 'Thin',
            value: 'Thin',
          },
        ]}
        onValueChange={value => setType(value)}
        defaultValue={type}
      />
      <SelectField
        label="Size"
        defaultValue={size}
        options={[
          {
            label: '12',
            value: '12',
          },
          {
            label: '16',
            value: '16',
          },
          {
            label: '24',
            value: '24',
          },
          {
            label: '32',
            value: '32',
          },
        ]}
        onValueChange={setSize}
      />
      <SelectField
        defaultValue={color}
        label="Color"
        onValueChange={setColor}
        options={[
          {
            label: 'Primary',
            value: 'primaryContainer',
          },
          {
            label: 'Informative',
            value: 'informativeContainer',
          },
          {
            label: 'Error',
            value: 'errorContainer',
          },
          {
            label: 'Success',
            value: 'successContainer',
          },
          {
            label: 'Warning',
            value: 'warningContainer',
          },
          {
            label: 'OnView1',
            value: 'surface1',
          },
        ]}
      />
      <GridList
        data={Object.keys(Icon)}
        columns={[4, 8, 8]}
        renderItem={({ item }) => {
          const IconComponent = Icon[item][type];

          return (
            <IconContainer name={item} key={item} backgroundColor={color}>
              <IconComponent size={parseInt(size)} fill="onColor" />
            </IconContainer>
          );
        }}
        keyExtractor={item => item}
        rowSpacing={8}
        columnSpacing={8}
      />
    </VStack>
  );
};
