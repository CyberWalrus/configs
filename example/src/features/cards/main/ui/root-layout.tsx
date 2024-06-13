import type { FC } from 'react';

import type { RootLayoutProps } from './root-layout.types';

export const RootLayout: FC<RootLayoutProps> = ({ children }) => <div>{children}</div>;
