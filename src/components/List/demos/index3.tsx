import React, { useState } from 'react';
import { List } from 'MINKEN';
import './_index.scss';

export default function listDemo1() {
  const dataSource = [
    {
      title: '《原神》是由米哈游自主研发的一款全新开放世界冒险游戏.',
      content: 'Genshin Impact is a new open-world adventure game independently developed by miHoYo.',
    },
    {
      title: '《原神》是由米哈游自主研发的一款全新开放世界冒险游戏.',
      content: 'Genshin Impact is a new open-world adventure game independently developed by miHoYo.',
    },
    {
      title: '《原神》是由米哈游自主研发的一款全新开放世界冒险游戏.',
      content: 'Genshin Impact is a new open-world adventure game independently developed by miHoYo.',
    },
    {
      title: '《原神》是由米哈游自主研发的一款全新开放世界冒险游戏.',
      content: 'Genshin Impact is a new open-world adventure game independently developed by miHoYo.',
    },
    {
      title: '《原神》是由米哈游自主研发的一款全新开放世界冒险游戏.',
      content: 'Genshin Impact is a new open-world adventure game independently developed by miHoYo.',
    },
  ];

  return (
    <List
      style={{ fontSize: '16px', width: '600px' }}
      header="List title"
      size="default"
      dataSource={dataSource}
      render={(item: any) => {
        return (
          <List.Item style={{ fontSize: '14px' }}>
            <div className="list">
              <div className="text">
                <span className="title">{item.title}</span>
                <span className="content">{item.content}</span>
              </div>
            </div>
          </List.Item>
        );
      }}
    />
  );
}
