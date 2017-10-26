export interface IBounds {
  top?: number;
  left?: number;
  width?: number;
  height?: number;
  transform?: string;
}

export interface IFlipStateMap<TAnimation = any> {
  [key: string]: IFlipState<TAnimation>;
}

export type FlipIteratee = (
  state: IFlipState,
  key: string,
  fullState: { [key: string]: IFlipState }
) => any;

export interface IFlippingConfig {
  active?: (element: Element) => boolean;
  getDelta?: (Bounds) => IBounds;
  getBounds?: (node: Element) => IBounds;
  selector?: (parent: Element) => Element[];
  onFlip?: (state: IFlipStateMap) => void;
  onRead?: (state: IFlipStateMap) => void;
  onEnter?: (state: IFlipStateMap) => void;
  onLeave?: (state: IFlipStateMap) => void;
  getKey?: () => string;
  parent?: Element;
}

export interface IFlippingOptions extends IFlippingConfig {
  readOnly?: boolean;
}

export interface IFlipNodeMode {
  from: {
    x?: number;
    y?: number;
    [key: string]: string | number;
  };
  to: {
    x?: number;
    y?: number;
    [key: string]: string | number;
  };
}

export interface IFlipNodesMode {
  node: IFlipNodeMode;
  container?: IFlipNodeMode;
}

export type IFlipStateType = 'ENTER' | 'MOVE' | 'LEAVE';

export interface IFlipState<TAnimation = any> {
  type: IFlipStateType;
  key: string;
  node: Element | undefined;
  bounds: IBounds;
  delta: IBounds | undefined;
  animation: TAnimation;
  index: number;
  previous:
    | Pick<IFlipState, 'type' | 'bounds' | 'animation' | 'node'>
    | undefined;
  start: number;
}
