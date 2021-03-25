import { ComponentType } from 'react';

interface ComponentEnhancer<TInner, TOutter> {
	(component: ComponentType<TInner>): ComponentType<TOutter>;
}

export function compose<PInner = {}, POutter = {}>(...func: Function[]) {
	return func.reduce((a, b) => (...arg: PInner[]) => a(b(...arg)), (arg: ComponentType<PInner>) => arg) as ComponentEnhancer<PInner, POutter>;
}
