import React from 'react';
import { List } from 'MINKEN';
import './_index.scss';


export default function listDemo1() {

  const dataSource = [
    '你说的对，但是.',
    '《原神》是由米哈游自主研发的一款全新开放世界冒险游戏.',
    '游戏发生在一个被称作「提瓦特」的幻想世界.',
    '在这里，被神选中的人将被授予「神之眼」.',
    '导引元素之力.',
  ];

  return (
    <List
      style={{ fontSize: '16px', width: '600px' }}
      header="List title"
      size="default"
      dataSource={dataSource}
      render={(item: string) => {
        return (
          <List.Item style={{ fontSize: '14px' }} key={item}>
            <div className="list">{item}</div>
          </List.Item>
        );
      }}
    />
  );
}
