import {makePropDecorator} from "@angular/core/src/util/decorators";

export interface ResolveDecorator {

  (bindingPropertyName?: string): any;
  new (bindingPropertyName?: string): any;
}

export interface Resolve {
  /**
   * Name used when instantiating a component in the template.
   */
  bindingPropertyName?: string;
}

export const Resolve: ResolveDecorator = makePropDecorator('Resolve', [['bindingPropertyName', undefined]]);



