import React from 'react';
import { Switch } from 'MINKEN';
export default function index1() {
  return (
    <div>
      <Switch style={{ marginRight: '10px' }} loading />
      <Switch defaultChecked loading />
    </div>
  );
}
