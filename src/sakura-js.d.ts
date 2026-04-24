declare module 'sakura-js/dist/sakura.js' {
  type SakuraColor = {
    gradientColorStart: string;
    gradientColorEnd: string;
    gradientColorDegree: number;
  };

  type SakuraOptions = {
    className?: string;
    fallSpeed?: number;
    maxSize?: number;
    minSize?: number;
    delay?: number;
    colors?: SakuraColor[];
  };

  export default class Sakura {
    constructor(selector: string, options?: SakuraOptions);
    start(): void;
    stop(graceful?: boolean): void;
  }
}

declare module 'sakura-js/dist/sakura.css';
