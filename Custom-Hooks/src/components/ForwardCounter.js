import { useState, useEffect } from 'react';

import Card from './Card';
import useCounter from '../Hooks/use-counter';

const ForwardCounter = () => {
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
