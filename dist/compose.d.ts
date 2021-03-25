import { ComponentType } from 'react';
interface ComponentEnhancer<TInner, TOutter> {
    (component: ComponentType<TInner>): ComponentType<TOutter>;
}
export declare function compose<PInner = {}, POutter = {}>(...func: Function[]): ComponentEnhancer<PInner, POutter>;
export {};
