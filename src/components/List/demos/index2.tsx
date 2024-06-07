import React, { useState } from 'react';
import { List } from 'MINKEN';
import './_index.scss';

export default function listDemo1() {
  const [listSize, setListSize] = useState('default');
  const dataSource = [
    '《原神》是由米哈游自主研发的一款全新开放世界冒险游戏.',
    '《原神》是由米哈游自主研发的一款全新开放世界冒险游戏.',
    '《原神》是由米哈游自主研发的一款全新开放世界冒险游戏.',
    '《原神》是由米哈游自主研发的一款全新开放世界冒险游戏.',
    '《原神》是由米哈游自主研发的一款全新开放世界冒险游戏.',
  ];

  return (
    <>
      <span
        className={listSize === 'small' ? 'active-size-bar' : 'size-change-bar'}
        onClick={() => setListSize('small')}
      >
        small
      </span>
      <span
        className={listSize === 'default' ? 'active-size-bar' : 'size-change-bar'}
        onClick={() => setListSize('default')}
      >
        default
      </span>
      <span
        className={listSize === 'large' ? 'active-size-bar' : 'size-change-bar'}
        onClick={() => setListSize('large')}
      >
        large
      </span>
      <List
        style={{ fontSize: '16px', width: '600px', marginTop: '30px' }}
        header="List title"
        size={listSize}
        dataSource={dataSource}
        render={(item: string) => {
          return <List.Item style={{ fontSize: '14px' }}>{item}</List.Item>;
        }}
      />
    </>
  );
}
