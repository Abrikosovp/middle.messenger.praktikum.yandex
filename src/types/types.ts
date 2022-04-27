import Block from "../modules/block/Block";
import {InputName} from "../utils/const/const";

export type TRenderElement = HTMLElement | DocumentFragment;
export type ComponentEvents = Partial<Record<keyof GlobalEventHandlersEventMap, (e: Event) => void>>;
export type TComponent = { [key:string]: Block }
export type TObjectString = { [key:string]: string }



export type TValidation = {isValid: boolean, errorText: string | null }
export type TFValidationLength = (min: number, max: number, value: string) => TValidation;
export type TValidate = Record<InputName, TFValidate>;
export type TFValidate = (value: string, compareValue?: string) => TValidation;


