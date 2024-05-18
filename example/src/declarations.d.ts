/* eslint-disable import/no-default-export */
declare module '*.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.pcss' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.svg' {
    import type { FC } from 'react';

    import type { SystemIconProps } from '$basics';

    const SVG: FC<SystemIconProps>;
    export default SVG;
}

declare module '*.mdx' {
    const MDXComponent: (props) => JSX.Element;
    export default MDXComponent;
}

declare module '*.jpg' {
    const image: string;
    export default image;
}

declare module '*.png' {
    const image: string;
    export default image;
}

declare module '*.webp' {
    const image: string;
    export default image;
}

declare module '*.jpeg' {
    const image: string;
    export default image;
}
