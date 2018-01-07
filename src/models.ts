import { ElementRef } from '@angular/core';

export type ContainerRef = Window | ElementRef | any;

export interface InfiniteScrollEvent {
  currentScrollPosition: number;
}

export interface IPositionElements {
  windowElement: ContainerRef;
  axis: any;
}

export interface IPositionStats {
  height: number;
  scrolledUntilNow: number;
  totalToScroll: number;
}
export interface IScrollerDistance {
  down?: number;
  up?: number;
}

export interface IScrollState {
  lastTotalToScroll: number;
  totalToScroll: number;
  isTriggeredTotal: boolean;
  lastScrollPosition: number;
}

export interface IResolver {
  container: ContainerRef;
  isWindow: boolean;
  axis: any;
}

export interface IScrollRegisterConfig {
  container: ContainerRef;
  throttle: number;
}

export interface IScroller {
  fromRoot: boolean;
  horizontal: boolean;
  disable: boolean;
  throttle: number;
  scrollWindow: boolean;
  element: ElementRef;
  scrollContainer: string | ElementRef;
  alwaysCallback: boolean;
  downDistance: number;
  upDistance: number;
}

export interface IScrollParams {
  isScrollingDown: boolean;
  shouldFireScrollEvent: boolean;
  positionStats: IPositionStats;
}

export interface IInfiniteScrollAction {
  type: string;
  payload: InfiniteScrollEvent;
}
