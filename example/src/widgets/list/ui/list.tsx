import type { FC } from 'react';

import type { ListProps } from './list.types';

export const Modal: FC<ListProps> = ({ children }) => <div>{children}</div>;
