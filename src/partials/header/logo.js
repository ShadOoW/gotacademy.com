import React from 'react';

// Import Layout
import { Flex } from 'layout';

// Import Typography
import { H3 } from 'typography';

// Import Components
import Cursor from './cursor';

const Logo = () => (
  <Flex alignItems='center'>
    <H3 pr='1rem'>~/starter-kit</H3>
    <Cursor />
  </Flex>
);

export default Logo;
